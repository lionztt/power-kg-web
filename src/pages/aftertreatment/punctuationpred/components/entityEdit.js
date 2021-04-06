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
import {Drawer,Button,Form,Input,Select} from 'antd';
import {
    DownloadOutlined
} from '@ant-design/icons';
import axios from 'axios'
import {PropName, PropBox, EntityImage} from './style'
import img from '../../../../assets/images/母线.jpeg'
  
class EntityEdit extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            buttonDisabled: false
        }
    }
    showDrawer = () => {
        this.props.changeEntityEditVisible(true)
    };
    onClose = () => {
        this.props.changeEntityEditVisible(false)
    };
    onFinish = () => {
        this.props.changeEntityEditVisible(false)
    };
    onChange=(value)=>{
        console.log(`selected ${value}`);
    }
      
    onBlur() {
        console.log('blur');
    }
      
    onFocus() {
        console.log('focus');
    }
      
    onSearch(val) {
        console.log('search:', val);
    }

    render() {
        const {authority} = this.props;
        let data = {"中文名":"母线","英文名":"busbar","功能":"汇集、分配和传送电能","类别":"连接导体"}
        let entity = {"实体名称":"母线","实体编号":"001","实体类别":"一次设备"}
        return (
            <Drawer
                title="编辑实体面板"
                placement="right"
                closable={true}
                width={350}
                onClose={this.onClose}
                visible={this.props.visible}
                bodyStyle={{padding:'24px'}}
                footer={
                    <div
                      style={{
                        textAlign: 'right',
                      }}
                    >
                      <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                        取消
                      </Button>
                      <Button onClick={this.onFinish} type="primary">
                        保存
                      </Button>
                    </div>
                  }
            >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        label="实体编号"
                        
                        name="entityID"
                    >
                        <Input disabled/>
                    </Form.Item>
                    <Form.Item
                        label="实体名称"
                        name="entityName"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="实体类别"
                        name="entityClass"
                    >
                        <Select
                            showSearch
                            placeholder="选择实体类别"
                            optionFilterProp="children"
                            onChange={this.onChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            onSearch={this.onSearch}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Select.Option value="jack">Jack</Select.Option>
                            <Select.Option value="lucy">Lucy</Select.Option>
                            <Select.Option value="tom">Tom</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="entityProps" 
                        label="实体属性"
                    >
                        <Input.TextArea placeholder="请使用json格式" rows={8}></Input.TextArea>
                    </Form.Item>
                </Form>
            </Drawer>
        );
    }
}

//定义属性 类型以及是否必填项
EntityEdit.proTypes = {
};
//定义属性的默认值
EntityEdit.defaultProps = {
    visible: false
};
const mapStateToProps = (state)=>({
    visible:state.getIn(['punc','eEditVisible'])
})

const mapDispatch = (dispatch) =>({
    changeEntityEditVisible(value){
        console.log('Success:', value);
        dispatch(actionCreators.changeEditVisible(value))
    },
})

export default connect(mapStateToProps,mapDispatch)(EntityEdit);