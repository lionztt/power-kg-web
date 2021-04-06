import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import { Table, Modal, Space,Select,Tag, Button, Tooltip, Popconfirm, message, Form, Input, Upload,Row,Col,Divider,DatePicker } from 'antd';
import {actionCreators} from './store'
import {ContentWapper,ContentBox,AddBtnWapper} from './style'
import {
    InboxOutlined,
    DeleteOutlined,
    EditOutlined
  } from '@ant-design/icons';
import { put, deleteMethod } from '../../../services/ajax';

const { Column } = Table;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset:6, span: 16 },
};

class Env extends Component{
    
    
    state = { visible: false ,
        type:'add',
        data:{
            testSetName:'',
            testSetDesc:'',
            file:[]
        }
    };

    showModal = (type) => {
        this.setState({
            visible: true,
            type
        });
    };

    handleFinish = values => {
        console.log(values);

        // let url = 'api/v1/auto-lm/lm-env/'+values.env_name+'/'
        // put({url,params:{
        //     env_name:values.env_name,
        //     display_name:values.display_name
        // }}).then(res=>{
        //     this.reload()
        // }).catch()
        // this.setState({
        //     visible: false,
        // });
    }

    handleCancel = e => {
        console.log(e);
        this.setState({
        visible: false,
        });
    }

    handleDeleteTableItem = (index,data) =>{
        // delete 操作
        let url = 'api/v1/auto-lm/lm-env/'+data.env_name
        deleteMethod({url,params:{env_name:data.env_name}}).then(res=>{
            this.reload()
        })
    }

    renderEnvStatus(status){
        if(status==="ACTIVE"){
            return(<Tag color="green">{status}</Tag>)
        }

        if(status==="DISABLED"){
            return(<Tag color="default">{status}</Tag>)
        }
        return null
    }

    getFields = () => {
        // const count = expand ? 10 : 6;
        const count = 6;
        const fields = [
            {name:"role_name",label:'角色名',placeholder:"请输入角色名"},
            {name:"role_creater",label:'创建者',placeholder:"请输入创建者"},
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

    renderModal(){

        let modelType = "添加"
        if(this.state.type==="edit"){
            modelType = "编辑"
        }

        console.log(this.state.type,this.state.data)

        return(
            <Modal
                title={modelType + "环境"}
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
                        label="环境名称"
                        name="env_name"
                        rules={[{ required: true, message: '请输入环境名称!' }]}
                    >
                        <Input/>
                    </Form.Item>
                    
                    <Form.Item
                        label="环境描述"
                        name="display_name"
                        rules={[{ required: true, message: '请输入环境描述!' }]}
                    >
                        <Input/>
                    </Form.Item>

                    {/* <Form.Item
                        label="上传测试集"
                        name="file"
                        rules={[{ required: true, message: '请上传测试集!' }]}
                    >
                        <Dragger 
                            name='file'
                            accept=".txt"
                            beforeUpload={(file)  => {
                                const isLt10M = file.size / 1024 / 1024 <= 10;
                                if (!isLt10M) {
                                    message.error("文件大小限制在10M以下！");
                                    return false;
                                }
                                return false;
                            }}
                        >
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">点击或拖拽到这个区域进行上传</p>
                            <p className="ant-upload-hint">
                                支持txt格式，且文件大小不能超过10MB
                            </p>
                        </Dragger>
                    </Form.Item> */}
                    {/* 创建环境需要一定时间，请耐心等待。 */}
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            确定
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }

    render(){
          
        function cancel(e) {
            console.log(e);
        }
        const { tableData, handleDeleteTableItem } = this.props;

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
                        添加角色
                        </Button>
                    </AddBtnWapper>
                    {this.renderModal()}
                    <Table dataSource={tableData} rowKey={(text, record) => text.file_id}>
                        <Column title="序号" width="10" align="center" dataIndex="id" key="id" />
                        <Column title="角色名" width="10" align="center" dataIndex="role_name" key="role_name" />
                        <Column title="角色描述" width="10" align="center" dataIndex="role_desc" key="role_desc" />
                        <Column style={{textWrap: 'word-break'}} title="角色权限列表" width="30px" align="center" dataIndex="role_list" key="role_list"
                            render={(text, record, index)=>(
                                <Space size="small">
                                    {text.map(item=>(<Tag color="green">{item}</Tag>))}
                                </Space>
                            )}
                        />
                        <Column title="创建者" width="10" align="center" dataIndex="user_name" key="user_name" />
                        <Column title="创建时间" width="20"  align="center"dataIndex="create_time" key="create_time"  render={(text)=>(
                            <span>{moment(text).format("YYYY-MM-DD HH:mm:ss")}</span>
                        )}/>
                        <Column
                            title="操作"
                            key="action"
                            align="center"
                            width="20"
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
        this.props.handleInitTableData()
    }

    reload = () => {
        this.componentDidMount()
    }
}

const mapStateToProps = (state)=>{
    return {
        tableData: state.getIn(['env','tableData']).toJS()
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

export default connect(mapStateToProps,mapDispatch)(Env);