import * as constants from './constants'
import { post, setHeaderAuth } from '../../../services/ajax'
import { setUserInfo, setAuthToken, getToken } from '../../../utils/localStorage'

const login = () =>({
    type:constants.CHANGE_LOGIN,
    value:true
})

const changeAuthorities = authorities =>({
    type:constants.CHANGE_AUTHORITIES,
    authorities
})

const changeUsername = username =>({
    type:constants.CHANGE_USERNAME,
    username
})


export const handleLogin = (params) =>{
    return (dispatch) => {
        let url = '/api/v1/user/login/'
        post({ url, params }).then(res=>{
            console.log(res)
            // 保存token
            localStorage.setItem('refreshToken',res.data.refresh)
            setHeaderAuth(res.data.access)
            setAuthToken(res.data.access)
            setUserInfo({username:res.data.username,userAuth:res.data.services})
            dispatch(login())
            dispatch(changeAuthorities(res.data.services))
            dispatch(changeUsername(res.data.username))
            // 登陆需要记录是否登陆，以及权限列表，还需要将token存入localstorage（3个动作）
        }).catch(res=>{
            console.log(res)
        })
    } 
}

export const handleLoginKeep = (username,authorities) => {
    return (dispatch) => {
        if(username){
            dispatch(login())
            dispatch(changeUsername(username))
            setHeaderAuth(getToken())
            if(authorities){
                dispatch(changeAuthorities(authorities))
            }
        }
    }
}

export const logout = () => {
    return(dispatch)=>{
        localStorage.removeItem('refreshToken')
        setHeaderAuth()
        setAuthToken()
        setUserInfo()
        dispatch(handleLogout())
        dispatch(removeUsername())
        dispatch(removeAuthorities())
    }
}

const handleLogout = () =>({
    type:constants.LOGOUT,
    value:false
})

const removeUsername = () =>({
    type:constants.REMOVE_USERNAME,
    username:''
})

const removeAuthorities = () =>({
    type:constants.REMOVE_AUTHORITIES,
    authorities:[]
})

