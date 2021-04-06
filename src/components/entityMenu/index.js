/**
 * @desc:这是一个实体右键菜单组件
 * @param:参数说明
 *    authority:权限列表 -- ‘edit’ ‘detail’ ‘relations’
 * 
 */
import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Menu, Tooltip} from 'antd';
import {
    DownloadOutlined
} from '@ant-design/icons';
import axios from 'axios'

class EntityMenu extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loadingStatus: true,
            buttonDisabled: false
        }
    }

    render() {
        const {authority} = this.props;

        return (
            <Menu>
                {authority.includes('detail')?<Menu.MenuItem>详细信息</Menu.MenuItem>:null}
                {authority.includes('edit')?<Menu.MenuItem>编辑实体</Menu.MenuItem>:null}
                {authority.includes('relations')?<Menu.MenuItem>一度关系</Menu.MenuItem>:null}
                {authority.includes('relations')?<Menu.MenuItem>二度关系</Menu.MenuItem>:null}
            </Menu>
        );
    }
}

//定义属性 类型以及是否必填项
EntityMenu.proTypes = {
};
//定义属性的默认值
EntityMenu.defaultProps = {
    authority: ['edit','detail','relations']
};
export default EntityMenu;