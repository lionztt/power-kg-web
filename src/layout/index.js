import React, { Fragment, useEffect } from 'react';
import {
  useLocation,
//   Redirect
} from "react-router-dom";
import {connect} from 'react-redux'

import Header from './header';
// import Footer from './footer';
import { Login, Register } from '../pages'
import SiderBar from './siderBar';
import { LayoutContent, LayoutDetail } from './style'


import { actionCreators as loginActionCreators } from '../pages/login/store'

import { getUserInfo } from '../utils/localStorage'

function Layout(props){

    useEffect(()=>{
        props.checkLogin()
    })

    const location = useLocation();
    if(location.pathname === '/login' && !props.loginStatus){
        return(
            <Fragment>
                <Header/>
                <Login/>
            </Fragment>
        )
    }
    if(location.pathname === '/register' && !props.loginStatus){
        return(
            <Fragment>
                <Header/>
                <Register/>
            </Fragment>
        )
    }
    // if(props.loginStatus){ // 可以直接访问
        return(
            <Fragment>
                <Header/>
                <LayoutContent className="ant-layout ant-layout-has-sider">
                    <SiderBar/>
                    <LayoutDetail className="ant-layout site-layout">
                        {props.children}
                        {/* <Footer/> */}
                    </LayoutDetail>
                </LayoutContent>
            </Fragment>
        )
    // }
    // return <Redirect to='/login'/>
}

// 有一个坑 hook 不能在组件中使用（useLocation使用了hook）

const mapStateToProps = (state)=>{
    return {
        loginStatus:state.getIn(['login','loginStatus'])
    }
}

const mapDispatch = (dispatch) =>({
    checkLogin(){
        const userInfo = getUserInfo()
        if(userInfo){
            dispatch(loginActionCreators.handleLoginKeep(userInfo.username,userInfo.userAuth))
        }
        
    }
})

export default connect(mapStateToProps,mapDispatch)(Layout);
