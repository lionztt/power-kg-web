import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import axios from 'axios'
import { Table, Modal, Space,Select, Button, Tooltip, Popconfirm, message, Form, Input, Upload,Row,Col,Divider,DatePicker } from 'antd';
import {actionCreators} from './store'
import {ContentWapper,ContentBox,AddBtnWapper} from './style'
import {
    InboxOutlined,
    DeleteOutlined,
    EditOutlined
  } from '@ant-design/icons';
import DownloadBtn from '../../../components/downloadBtn'

const { Column } = Table;
const { Dragger } = Upload;
const { Option } = Select;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset:6, span: 16 },
};

class AudioModel extends Component{
    
    
    state = { 
        visible: false ,
        type:'add',
        data:{
        audioModelName:'',
        audioModelDesc:'',
        file:''
    }};

    showModal = (type,data) => {
        this.setState({
            visible: true,
            type,
            data
        });
    };

    handleFinish = values => {
        console.log(values);

        // consh
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    renderModal(){

        let modelType = "添加"
        if(this.state.type==="edit"){
            modelType = "编辑"
        }

        console.log(this.state.type,this.state.data)
        let roles = [
            {name:'superManage',display_name:'超级管理员'},
            {name:'kgManage',display_name:'图谱管理员'},
            {name:'user',display_name:'普通用户'},
        ]
        return(
            <Modal
                title={modelType + "用户"}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                footer={null}
                destroyOnClose
            >
                <Form
                    {...layout}
                    name="basic"
                    initialValues={this.state.data}
                    onFinish={this.handleFinish}
                >
                    <Form.Item
                        label="姓名"
                        name="user_name"
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="邮箱"
                        name="user_email"
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="手机号"
                        name="user_phone"
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="用户角色"
                        name="user_player"
                    >
                        <Select 
                            disabled={this.state.type==="edit"}
                        >
                            {roles.map(item=>(
                                <Option value={item.name} key={item.name}>{item.display_name}</Option>
                            ))}
                            
                        </Select>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            确定
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }

    onFinishSearch(){

    }

    getFields = () => {
        // const count = expand ? 10 : 6;
        const count = 6;
        const fields = [
            {name:"user_name",label:'姓名',placeholder:"请输入用户姓名"},
            {name:"user_email",label:'邮箱',placeholder:"请输入用户邮箱"},
            {name:"user_phone",label:'手机号',placeholder:"请输入用户手机号"},
            {name:"user_player",label:'角色',placeholder:"请输入用户角色"},
        ]
        const children = [];
    
        for (let i = 0; i < fields.length; i++) {
          children.push(
            <Col span={8} key={i}>
              <Form.Item
                name={fields[i].name}
                label={fields[i].label}
              >
                <Input placeholder={fields[i].placeholder} />
              </Form.Item>
            </Col>,
          );
        }
        children.push(
            <Col span={8} key={fields.length}>
                <Form.Item
                    name="create_time"
                    label='创建时间'
                >
                    <DatePicker.RangePicker showTime />
                </Form.Item>
            </Col>
        )
        return children;
    }

    render(){
          
        function cancel(e) {
            console.log(e);
        }
        const { tableData, handleDeleteTableItem } = this.props;
        console.log(tableData)

        return(
            <ContentWapper>
                <ContentBox>
                    <Divider orientation="left" style={{paddingTop:'20px'}}>高级搜索</Divider>
                    <Form
                        name="advanced_search"
                        className="ant-advanced-search-form"
                        onFinish={this.onFinishSearch}
                        style={{padding:'0 20px'}}
                    >
                        <Row gutter={24}>{this.getFields()}</Row>
                        <Row>
                            <Col
                                span={24}
                                style={{
                                    textAlign: 'right',
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    搜索
                                </Button>
                                <Button
                                    style={{
                                    margin: '0 8px',
                                    }}
                                >
                                    重置
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <Divider orientation="left">查询结果</Divider>
                    <AddBtnWapper>
                        <Button type="primary" onClick={()=>this.showModal("add")}>
                        添加用户
                        </Button>
                    </AddBtnWapper>
                    {this.renderModal()}
                    <Table dataSource={tableData} rowKey={(text, record) => text.file_id}>
                        <Column title="序号" width="10" align="center" dataIndex="user_id" key="envName" />
                        <Column title="姓名" width="10" align="center" dataIndex="user_name" key="envName" />
                        <Column title="邮箱" width="10" align="center" dataIndex="user_email" key="audioModelName" />
                        <Column title="手机号" width="10" align="center" dataIndex="user_phone" key="user_phone" />
                        <Column title="角色" align="center" dataIndex="user_player" key="user_player" />
                        <Column title="创建时间"  align="center"dataIndex="create_time" key="create_time"  render={(text)=>(
                            <span>{moment(text).format("YYYY-MM-DD HH:mm:ss")}</span>
                        )}/>
                        <Column
                            title="操作"
                            key="action"
                            align="center"
                            render={(text, record, index) => (
                                <Space size="small">
                                    <Tooltip placement="bottomLeft" title='编辑'>
                                        <Button className="edit-btn" size="small" icon={<EditOutlined />}></Button>
                                    </Tooltip>
                                    <Popconfirm title="确认删除？" onConfirm={()=>handleDeleteTableItem(record,index)} onCancel={cancel} okText="确定" cancelText="取消">
                                        <Tooltip placement="bottomLeft" title='删除'>
                                            <Button type="danger" size="small" icon={<DeleteOutlined />}></Button>
                                        </Tooltip>
                                    </Popconfirm>
                                </Space>
                            )}
                        />
                    </Table>
                </ContentBox>
            </ContentWapper>
        )
    }
    componentDidMount(){
        // this.props.handleInitTableData()
        // if(this.props.envs.size===0){
        //     this.props.handleInitEnvData()
        // }
    }

    reload = () => {
        this.componentDidMount()
    }
}

const mapStateToProps = (state)=>{
    return {
        tableData: state.getIn(['audioModel','tableData']).toJS()
    }
}

const mapDispatch = (dispatch) =>({
    handleInitTableData(){
        dispatch(actionCreators.handleInitTableData())
    },
    handleDeleteTableItem(data,index){
        dispatch(actionCreators.handleDeleteTableItem(index,data))
        // message.success('删除成功');
    }
})

export default connect(mapStateToProps,mapDispatch)(AudioModel);