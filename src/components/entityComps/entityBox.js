/**
 * @desc:这是一个实体右键菜单组件
 * @param:参数说明
 *    authority:权限列表 -- ‘edit’ ‘detail’ ‘relations’
 * 
 */
import React, {Fragment, PureComponent} from 'react';
import {connect} from 'react-redux'
import EntityDetail from './entityDetail'
import EntityEdit from './entityEdit'

class EntityBox extends PureComponent {
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
            <Fragment>
                <EntityEdit/>
                <EntityDetail/>
            </Fragment>
        );
    }
}

//定义属性 类型以及是否必填项
EntityBox.proTypes = {
};
//定义属性的默认值
EntityBox.defaultProps = {
    authority: ['edit','detail','relations']
};

const mapStateToProps = (state)=>({
    loginStatus:state.getIn(['login','loginStatus'])
})

const mapDispatch = (dispatch) =>({
})

export default connect(mapStateToProps,mapDispatch)(EntityBox);