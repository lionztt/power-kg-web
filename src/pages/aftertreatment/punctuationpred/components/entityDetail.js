/**
 * @desc:这是一个实体右键菜单组件
 * @param:参数说明
 *    authority:权限列表 -- ‘edit’ ‘detail’ ‘relations’
 * 
 */
import React, { PureComponent} from 'react';
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import PropTypes from 'prop-types';
import {Drawer,Collapse,Divider} from 'antd';
import {
    DownloadOutlined
} from '@ant-design/icons';
import axios from 'axios'
import {PropName, PropBox, EntityImage} from './style'
import img from '../../../../assets/images/母线.jpeg'
  
class EntityDetail extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            buttonDisabled: false
        }
    }
    showDrawer = () => {
        this.props.changeEntityDetailVisible(true)
    };
    onClose = () => {
        this.props.changeEntityDetailVisible(false)
    };

    render() {
        const {authority} = this.props;
        let data = {"中文名":"母线","英文名":"busbar","功能":"汇集、分配和传送电能","类别":"连接导体","百度百科描述":"母线是指多个设备以并列分支的形式接在其上的一条共用的通路。在计算机系统里，是指多台计算机并列接在其上的一条共享的高速通路，可以供这些计算机之间任意传输数据，但在同一时刻内，只能有一个设备发送数据。"}
        let entity = {"实体名称":"母线","实体编号":"001","实体类别":"一次设备"}
        return (
            <Drawer
                title="实体属性面板"
                placement="right"
                closable={true}
                width={350}
                onClose={this.onClose}
                visible={this.props.visible}
                bodyStyle={{padding:'10px'}}
            >
                <Collapse defaultActiveKey={['1']} ghost expandIconPosition="right">
                    <Collapse.Panel header="实体属性" key="1">
                        <EntityImage src={img}></EntityImage>
                        {Object.keys(data).map(key=>(
                            <PropBox><PropName>{key}:</PropName>{data[key]}</PropBox>
                        ))}
                    </Collapse.Panel>
                    <Divider/>
                    <Collapse.Panel header="实体信息" key="2">
                        {Object.keys(entity).map(key=>(
                            <PropBox><PropName>{key}:</PropName>{entity[key]}</PropBox>
                        ))}
                    </Collapse.Panel>
                    <Divider/>
                </Collapse>
            </Drawer>
        );
    }
}

//定义属性 类型以及是否必填项
EntityDetail.proTypes = {
};
//定义属性的默认值
EntityDetail.defaultProps = {
    visible: false
};
const mapStateToProps = (state)=>({
    visible:state.getIn(['punc','eDetailVisible'])
})

const mapDispatch = (dispatch) =>({
    changeEntityDetailVisible(value){
        console.log('Success:', value);
        dispatch(actionCreators.changeDetailVisible(value))
    },
})

export default connect(mapStateToProps,mapDispatch)(EntityDetail);