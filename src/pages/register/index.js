import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Tree, message } from 'antd';
import { actionCreators } from './store'
import { RegisterWrapper, RegisterBox } from './style'
import Footer from '../../layout/footer';
import {post} from '../../utils/ajax'
import { tranSelected2Services } from './config'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};



class Register extends Component{

    handleRegister(params){
        let url = 'api/v1/user/registration/'
        post({url,params}).then(res=>{
            message.success("申请注册成功，等待审核")
        }).catch(res=>{

        })
    }
    onFinish = values => {
        if(!values.services){
            values.services = tranSelected2Services(this.props.selectedKeys) 
        }
        this.handleRegister(values)
    };

    render(){
        
        
        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        const onSelect = (selectedKeys, info) => {
            console.log('selected', selectedKeys, info);
        };
        const { treeData, selectedKeys,handleChangeTreeData } = this.props
        return(
            <RegisterWrapper>
                <RegisterBox>
                    <Form
                        {...layout}
                        name="basic"
                        onFinish={this.onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            initialValue=""
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password1"
                            initialValue=""
                            hasFeedback
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            label="密码确认"
                            name="password2"
                            initialValue=""
                            dependencies={['password1']}
                            hasFeedback
                            rules={[
                                { required: true, message: '请再次输入密码!' },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                      if (!value || getFieldValue('password1') === value) {
                                        return Promise.resolve();
                                      }
                                      return Promise.reject('两次密码不一致!');
                                    },
                                  }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        
                        <Form.Item
                            label="姓名"
                            name="full_name"
                            initialValue=""
                            rules={[{ required: true, message: '请输入你的姓名!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="手机号"
                            name="eid"
                            initialValue=""
                            rules={[{ required: true, message: '请输入你的手机号!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="邮箱"
                            name="email"
                            initialValue=""
                            rules={[{ required: true, type: 'email', message: '请输入你的邮箱!' }]}
                        >
                            <Input />
                        </Form.Item>
                        {/* <Form.Item name="services" label="开通项目权限" */}
                            {/* // rules={[ */}
                            {/* //     // { required: true, message: 'Please input your models!' },
                            //     ({ getFieldValue }) => ({ */}
                            {/* //         validator(rule, value) {
                            //           if (selectedKeys.length!==0) {
                            //               console.log(value)
                            //             return Promise.resolve();
                            //           }else{
                            //               return Promise.reject('请选择开通的项目权限!');
                            //           }
                            //         },
                            //       }),
                            // ]} */}
                        {/* // >
                        //     <Tree
                        //         checkable
                        //         checkedKeys={selectedKeys}
                        //         onSelect={onSelect}
                        //         onCheck={handleChangeTreeData}
                        //         treeData={treeData}
                        //     />
                        // </Form.Item> */}

                        {/* <Form.Item
                            label="申请用途描述"
                            name="desc"
                            initialValue=""
                            rules={[{ required: true, message: '请输入申请用途!' }]}
                        >
                            <Input.TextArea />
                        </Form.Item> */}

                        {/* <Form.Item
                            label="备注"
                            name="note"
                        >
                            <Input.TextArea />
                        </Form.Item> */}

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
                </RegisterBox>
                <Footer/>
            </RegisterWrapper>
        )
    }

    componentDidMount(){
        this.props.handlePageInit()
    }
}

const mapState = (state) =>({
    treeData:state.getIn(['register','services']),
    selectedKeys:state.getIn(['register','defaultList']),
})

const mapDispatch = (dispatch) =>({
    handlePageInit(){
        dispatch(actionCreators.handlePageInit())
    },
    handleChangeTreeData(checkedKeys){
        dispatch(actionCreators.changeDefaultKeys(checkedKeys))
    }
})

export default  connect(mapState,mapDispatch)(Register);