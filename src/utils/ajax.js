// import axios from 'axios';
// import _ from 'lodash';
// import xss from 'xss';
// import { message } from 'antd';
// import errorCodes from './errorCode';
// import mockData from '../mock';

// import { setAuthToken, getToken,setUserInfo } from './localStorage'

// axios.defaults.baseURL = 'http://localhost:8088/';
// axios.defaults.timeout = 10000; // 请求超时10s
// axios.defaults.withCredentials = true; // 用于跨域：开启withCredentials后，服务器才能拿到你的cookie，当然后端服务器也要设置允许你获取你开启了才有用

// // 添加请求拦截器
// // axios.interceptors.request.use(function (config) {
// //     // 在发送请求之前做些什么
// //     return config;
// // }, function (error) {
// //     // 对请求错误做些什么
// //     return Promise.reject(error);
// // });

// // 添加响应拦截器
// axios.interceptors.response.use((res) => {
//     // 否则的话抛出错误
//     console.log('response', res)
//     if (res.status === 200||res.status === 201) {
//         if(res.data.err_code !== 10000){// 非10000为失败状态
//             message.error(errorCodes[res.data.err_code] || res.data.message || '请求存在错误');
//             return Promise.reject(res);
//         }else{
//             return Promise.resolve(res);
//         }
        
//     } else {
//         console.log(res.status)
//         return Promise.reject(res);
//     }
// }, (err) => {
//     let res = err.response
//     // 走switch 处理401/403/500
//     if(res&&res.status){
//         switch(res.status)
//         {
//             case 401:
//                 // 表示未登录与token失效 
//                 // 处理方法：1.检查localStorage是否为空
//                 // 2.为空为未登录状态，跳到登陆页
//                 // 3.不为空为token失效或者错误状态，刷新token
//                 // 4.刷新token成功，更新token，否则清空用户信息跳登陆
//                 console.log('401')
//                 if(!getToken()){
//                     localStorage.removeItem('refreshToken')
//                     setHeaderAuth()
//                     setAuthToken()
//                     setUserInfo()
//                     window.location.pathname="/login"
//                 }else{
//                     let newToken = refreshToken(localStorage.getItem('refreshToken'))
//                     if(newToken){
//                         setAuthToken(newToken)
//                         setHeaderAuth(newToken)
//                     }else{
//                         localStorage.removeItem('refreshToken')
//                         setHeaderAuth()
//                         setAuthToken()
//                         setUserInfo()
//                         window.location.pathname="/login"   
//                     }
//                 }
//                 break;
//             case 403:
//                 // 提示无权访问
//                 console.log('403')
//                 message.error(errorCodes[res.data.err_code] || res.data.message || '无权访问');
//                 break;
//             case 500:
//                 // 提示重新请求
//                 console.log('500')
//                 message.error(errorCodes[res.data.err_code] || res.data.message || '服务错误，请联系管理员');
//                 break;
//             default:
//                 message.error(errorCodes[res.data.err_code] || res.data.message || '系统错误');
//         }
//     }
   
//     return Promise.reject(err)
// });

// /**
//  * refreshToken方法，当token过期时使用
//  */
// function refreshToken(refreshToken) {
//     post({
//         url:'api/v1/user/token-refresh/',
//         params:{refresh:refreshToken}
//     }).then(res=>{
//         if(res.data.err_code===10000){
//             return res.data.access
//         }
//         return null
//     })
// }

// /**
//  * setAuthToken方法，当重新给请求header添加或删除token时使用
//  */

// export function setHeaderAuth(token) {
//     if(token){
//         axios.defaults.headers.common['Authorization'] = 'JWT '+token 
//     }else{
//         // 没有token就移除
//         delete axios.defaults.headers.common['Authorization'];
//     }
// }

// /**
//  * get方法，对应get请求
//  * @param { String } url [请求的url地址]
//  * @param {Object} params [请求时携带的参数]
//  * @param {Object} headers [请求时axios get请求的header设置]
//  * @param {Object} extraParams [请求时axios get请求的额外设置]
//  * @param {Boolean} useGeneralTip [请求返回是否要全局提示]
//  */


// export function get({
//     url, params, headers={}, extraParams={}, mock=false, useGeneralTip=true,
// }) {
//     if (window.location.hostname === 'localhost' && mock) {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(mockData[url])
//             }, 1000)
//         })
//     }
//     // xss
//     const xssParams = {};
//     _.map(params, (v, k) => {
//         xssParams[k] = xss.filterXSS(v);
//     });
//     params = xssParams;

//     return request({url,method:'get', params, headers, extraParams, useGeneralTip})
// }

// /**
//  * postJson方法，对应post请求
//  * @param {String} url [请求的url地址]
//  * @param {Object} params [请求时携带的参数]
//  */

// export function post({
//     url, params, headers={}, extraParams={}, mock=false, useGeneralTip=true,
// }) {
//     if (window.location.hostname === 'localhost' && mock) {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(mockData[url])
//             }, 1000)
//         })
//     }
//     return request({url,method:'post', params, headers, extraParams, useGeneralTip})
// }

// export function put({
//     url, params, headers={}, extraParams={}, useGeneralTip=true,
// }) {
//     return request({url,method:'put', params, headers, extraParams, useGeneralTip})
// }

// export function deleteMethod({
//     url, params, headers={}, extraParams={}, useGeneralTip=true,
// }) {
//     return request({url,method:'delete', params, headers, extraParams, useGeneralTip})
// }

// function request({
//     url, method, params, headers, extraParams, useGeneralTip
// }) {
//     return new Promise((resolve, reject) => {
//         axios
//         .request({
//             method,
//             url:'/' + url,
//             data:params,
//             ...extraParams,
//             headers
//         })
//         .then((res) => {
//             if (res.data && res.data.err_code !== 10000 && useGeneralTip) {
//                 message.error(errorCodes[res.data.err_code] || res.data.message || '系统错误');
//             }
//             resolve(res.data);
//         })
//         .catch((err) => {
//             reject(err);
//         });
//     });
// }

// export default {
//     get,
//     post,
//     put,
//     deleteMethod
// };
  

  