import axios from 'axios';
import _ from 'lodash';
import xss from 'xss';
import { message } from 'antd';
import { ERROR_CODE, ERROR_MESSAGE } from './errors';
import mockData from '../mock';

import { setAuthToken, getToken, setUserInfo } from './localStorage'


// 全局配置
let ajax = axios.create()
ajax.defaults.baseURL = '/';
ajax.defaults.timeout = 10000; // 请求超时10s
ajax.defaults.withCredentials = true; // 用于跨域：开启withCredentials后，服务器才能拿到你的cookie，当然后端服务器也要设置允许你获取你开启了才有用

// 请求前，对数据进行处理
const processRequest = (config) => {
    let token = localStorage.getItem('token')
    config.method = config.method || 'GET'
    if (token) {
        config.headers.Authorization = `JWT ${token}`
    } else if (
        !config.url.includes('login') &&
        !config.url.includes('register')
    ) {
        // 如果没有取到 token，则跳转到登录页面
        //   message.info('请登录')
        //   setTimeout(() => {
        //     window.location.href = '/login'
        //   }, 1500)
    }
    return config
}

// 请求成功后,对响应数据进行处理
const processResponse = (response) => {
    if (
        response &&
        response.config &&
        response.data
    ) {
        if (response.headers['content-type'].indexOf('application/json;') == -1) {
            return Promise.resolve(response);
        }
        // 统一处理错误码
        if (response.data.errno !== 0) {
            message.error(ERROR_MESSAGE[response.data.errno] || response.data.message || '接口请求失败')
            // token 失效
            if (response.status === ERROR_CODE.TOKEN_INVALID) {
                message.info(ERROR_MESSAGE[response.data.errno])
                window.location.href = '/login'
            }
            return Promise.reject(response);
        }
    }
    return Promise.resolve(response)
}

// 请求返回错误后，对错误进行处理
const processResponseError = (error) => {
    if (error && error.response && error.response.status) {
        switch (error.response.status) {
            case 401:
                // 表示未登录与token失效 
                // 处理方法：1.检查localStorage是否为空
                // 2.为空为未登录状态，跳到登陆页
                // 3.不为空为token失效或者错误状态，刷新token
                // 4.刷新token成功，更新token，否则清空用户信息跳登陆
                console.log('401')
                if (!getToken()) {
                    localStorage.removeItem('refreshToken')
                    setHeaderAuth()
                    setAuthToken()
                    setUserInfo()
                    window.location.href = '/login'
                } else {
                    let newToken = refreshToken(localStorage.getItem('refreshToken'))
                    if (newToken) {
                        setAuthToken(newToken)
                        setHeaderAuth(newToken)
                    } else {
                        localStorage.removeItem('refreshToken')
                        setHeaderAuth()
                        setAuthToken()
                        setUserInfo()
                        window.location.href = '/login'
                    }
                }
                break;
            case 403:
                // 提示无权访问
                message.error(ERROR_MESSAGE[error.response.data.err_code] || error.response.data.message || '无权访问');
                break;
            case 500:
                // 提示重新请求
                message.error(ERROR_MESSAGE[error.response.data.err_code] || error.response.data.message || '服务错误，请联系管理员');
                break;
            default:
                message.error(ERROR_MESSAGE[error.response.data.err_code] || error.response.data.message || '系统错误');
        }
    } else {
        if (error && error.code === 'ECONNABORTED') {
            // 请求超时
            message.error('接口请求超时，请检查接口是否可用', 0)
        }
        return Promise.reject(error)
    }
}

// 对请求进行拦截
ajax.interceptors.request.use(
    (config) => {
        return processRequest(config)
    },
    (error) => Promise.reject(error)
)

// 对返回进行拦截
ajax.interceptors.response.use(
    (response) => {
        return processResponse(response)
    },
    (error) => {
        return processResponseError(error)
    }
)

/**
 * refreshToken方法，当token过期时使用
 */
function refreshToken(refreshToken) {
    post({
        url: '/api/v1/user/token-refresh/',
        params: { refresh: refreshToken }
    }).then(res => {
        if (res.data.err_code === 10000) {
            return res.data.access
        }
        return null
    })
}

/**
 * setAuthToken方法，当重新给请求header添加或删除token时使用
 */

export function setHeaderAuth(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = 'JWT ' + token
    } else {
        // 没有token就移除
        delete axios.defaults.headers.common['Authorization'];
    }
}

/**
 * get方法，对应get请求
 * @param { String } url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Object} headers [请求时axios get请求的header设置]
 * @param {Object} extraParams [请求时axios get请求的额外设置]
 * @param {Boolean} useGeneralTip [请求返回是否要全局提示]
 */


export function get({
    url, params, headers = {}, extraParams = {}, mock = false, useGeneralTip = true,
}) {
    if (window.location.hostname === 'localhost' && mock) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockData[url])
            }, 1000)
        })
    }
    // xss
    const xssParams = {};
    _.map(params, (v, k) => {
        xssParams[k] = xss.filterXSS(v);
    });
    params = xssParams;
    return request({ url, method: 'get', params, headers, ...extraParams, useGeneralTip })
}

/**
 * postJson方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

export function post({
    url, params, headers = {}, extraParams = {}, mock = false, useGeneralTip = true,
}) {
    if (window.location.hostname === 'localhost' && mock) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockData[url])
            }, 1000)
        })
    }
    return request({ url, method: 'post', params, headers, ...extraParams, useGeneralTip })
}

export function put({
    url, params, headers = {}, extraParams = {}, useGeneralTip = true,
}) {
    return request({ url, method: 'put', params, headers, ...extraParams, useGeneralTip })
}

export function deleteMethod({
    url, params, headers = {}, extraParams = {}, useGeneralTip = true,
}) {
    return request({ url, method: 'delete', params, headers, ...extraParams, useGeneralTip })
}


function request(config) {
    return new Promise((resolve, reject) => {
        ajax.request(config).then(res => {
            resolve(res.data||{});
        }, error => {
            reject(error);
        })
    })
}

export default {
    get,
    post,
    put,
    deleteMethod
};


