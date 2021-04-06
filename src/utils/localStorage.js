export function setUserInfo(userInfo){
    //json 对象转字符串
    if(userInfo){
        localStorage.setItem('userInfo',JSON.stringify(userInfo))
    }else{
        localStorage.removeItem('userInfo')
    }
    
}

export function getUserInfo(userInfo){
    return JSON.parse(localStorage.getItem('userInfo')) 
}

export function setAuthToken(token) {
    if(token){
        localStorage.setItem('token', token)
    }else{
        // 没有token就移除
        localStorage.removeItem('token')
    }
}

export function getToken(){
    return localStorage.getItem('token')
}