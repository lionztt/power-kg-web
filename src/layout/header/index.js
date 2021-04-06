import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Link, NavLink} from'react-router-dom'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { HeaderBlock,LogoBlock,LogoTitle,HeaderBtn,UserInfoWapper } from './style'
import { SYSTERMNAME } from '../config'

// 如果登陆变成个人中心，否则是登陆／注册按钮
class AppHeader extends Component{

    renderLoginBtn = () => {
        return(
            <Fragment>
                <NavLink to='/register' activeStyle={{
                    fontWeight: "bold"
                }}>
                    <HeaderBtn>注册</HeaderBtn>
                </NavLink>
                <NavLink to='/login' activeStyle={{
                    fontWeight: "bold"
                }}>
                    <HeaderBtn>登录</HeaderBtn>
                </NavLink>
                <UserInfoWapper>
                    <Dropdown>
                        <a href=" " className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        {this.props.username} <DownOutlined />
                        </a>
                    </Dropdown>
                </UserInfoWapper>
            </Fragment>
        )
    }

    renderUserInfo = () => { 

        const menu = (
            <Menu>
              <Menu.Item onClick={this.props.logout}>
                退出登录
              </Menu.Item>
            </Menu>
        );

        return(
            <UserInfoWapper>
                <Dropdown overlay={menu}>
                    <a href=" " className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        {this.props.username} <DownOutlined />
                    </a>
                </Dropdown>
            </UserInfoWapper>
        )
    }

    render(){

        const { loginStatus } = this.props

        return(
            <HeaderBlock>
                <Link to='/'>
                    <LogoBlock>
                        <span className="anticon anticon-team logo-i"><i className={"iconfont iconpikachu"}></i></span>
                        <LogoTitle>
                            {SYSTERMNAME.replace("皮皮","皮皮｜")}
                        </LogoTitle> 
                    </LogoBlock>
                </Link>
                {
                    loginStatus ? this.renderUserInfo() : this.renderLoginBtn()
                }
            </HeaderBlock>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        loginStatus: state.getIn(['login','loginStatus']),
        username: state.getIn(['login','username']),
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        logout(){
            dispatch(loginActionCreators.logout())
            window.location.pathname = '/login'
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppHeader);