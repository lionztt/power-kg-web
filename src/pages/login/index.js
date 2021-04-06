import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store'
import { Form, Input, Button, Checkbox } from 'antd';
import { LoginWrapper, LoginBox } from './style'
import Footer from '../../layout/footer';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


class Login extends Component{
    render(){
        const { loginStatus } = this.props;
        if(!loginStatus){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={this.props.onFinish}
                            onFinishFailed={this.props.onFinishFailed}
                        >
                            <Form.Item
                                label="用户名"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username or email!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="密码"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </LoginBox>
                    <Footer/>
                </LoginWrapper>
            )
        }else{
            return(
                <Redirect to='/'/>
            )
        }

    }
}

const mapState = (state) =>({
    loginStatus:state.getIn(['login','loginStatus'])
})

const mapDispatch = (dispatch) =>({

    onFinish(values){
        console.log('Success:', values);
        dispatch(actionCreators.handleLogin(values))
    },
    onFinishFailed(errorInfo){
        console.log('Failed:', errorInfo);
    }
})

export default connect(mapState,mapDispatch)(Login);