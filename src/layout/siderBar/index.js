import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from'react-router-dom';
import { Menu } from 'antd';
import { createMenus } from './config';
import Sider from 'antd/lib/layout/Sider';

class SiderBar extends Component {
    state = {
        collapsed: false,
    };

    // onCollapse = collapsed => {
    //     console.log(collapsed);
    //     this.setState({ collapsed });
    // };

    getIcon = (icon) => {
        if(icon) return <span className="anticon anticon-team"><i className={"iconfont " +icon}></i></span>
        else return null
    }
    handleClick = (e) => {
        console.log('click ', e);
    }
    renderSubMenu = ({key, icon, title, subs}) => {
        return (
            <Menu.SubMenu 
                key={key} 
                icon={this.getIcon(icon)}
                title={title}
            >
                {
                    subs && subs.map(item => {
                        return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                    })
                }
            </Menu.SubMenu>
        )
    }
    renderMenuItem = ({key, icon, title}) => {
        return (
            <Menu.Item key={key}>
                {this.getIcon(icon)}
                <Link to={key}>{title}</Link>
            </Menu.Item>
        )
    }

    render(){
        return(
            <Sider 
                // collapsible
                // collapsed = {this.state.collapsed}
                // onCollapse={this.onCollapse}
            >
                <Menu 
                    onClick={this.handleClick}
                    defaultSelectedKeys={[]}
                    defaultOpenKeys={[]}
                    mode="inline"
                    theme="dark"
                >
                    {
                        this.props.menus.map(item => {
                            return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                        })
                    }
                </Menu>
            </Sider>
        ) 
    }
}

const mapStateToProps = (state)=>{
    return {
        menus: createMenus(state.getIn(['login','authorities']))
    }
}

export default connect(mapStateToProps,null)(SiderBar);