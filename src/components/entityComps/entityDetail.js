/**
 * @desc:这是一个实体右键菜单组件
 * @param:参数说明
 *    authority:权限列表 -- ‘edit’ ‘detail’ ‘relations’
 * 
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from '../kg/store'
import { Drawer, Collapse, Divider } from 'antd';
import { PropName, PropBox, EntityImage } from './style'
import img from '../../assets/images/母线.jpeg'

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


    //id: "8:母线", label: "primaryEquipment", type: "vertex", properties: {…}
    render() {
        const { eDetail } = this.props;
        console.log(eDetail)
        let data = {}
        if (eDetail.properties&&eDetail.properties.properties) {
            data = JSON.parse(eDetail.properties.properties)
        }
        if (eDetail.properties&&eDetail.properties.baike) {
            data['百度百科描述'] = eDetail.properties.baike
        }
        
        let entity = { "实体名称": eDetail.properties&&eDetail.properties.name?eDetail.properties.name:'', "实体编号": eDetail.id, "实体类别": eDetail.label }
        return (
            <Drawer
                title="实体属性面板"
                placement="right"
                closable={true}
                width={350}
                onClose={this.onClose}
                visible={this.props.visible}
                bodyStyle={{ padding: '10px' }}
            >
                <Collapse defaultActiveKey={['1']} ghost expandIconPosition="right">
                    {eDetail.properties ?
                        (<Collapse.Panel header="实体属性" key="1">
                            {eDetail.properties.img ? <EntityImage src={eDetail.properties.img}></EntityImage> : null}
                            {Object.keys(data).map(key => (
                                <PropBox key={key}><PropName>{key}:</PropName>{data[key]}</PropBox>
                            ))}
                        </Collapse.Panel>
                        ) : null
                    }
                    <Divider />
                    <Collapse.Panel header="实体信息" key="2">
                        {Object.keys(entity).map(key => (
                            <PropBox key={key}><PropName>{key}:</PropName>{entity[key]}</PropBox>
                        ))}
                    </Collapse.Panel>
                    <Divider />
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
const mapStateToProps = (state) => ({
    visible: state.getIn(['kg', 'eDetailVisible']),
    eDetail: state.getIn(['kg', 'eDetail']).toJS()
})

const mapDispatch = (dispatch) => ({
    changeEntityDetailVisible(value) {
        console.log('Success:', value);
        dispatch(actionCreators.changeDetailVisible(value))
    },
})

export default connect(mapStateToProps, mapDispatch)(EntityDetail);