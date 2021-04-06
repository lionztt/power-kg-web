// 实体查询页
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Divider, Tag } from 'antd';
import { actionCreators } from '../../../components/kg/store'
import { ContentWapper, ContentBox, SearchInput, Answer, TextAnswer } from './style'
import PowerKG from '../../../components/kg'


const { Search } = Input;
const data = {
    nodes: [],
    edges: []
}

class TextSegmentation extends Component {
    handleSearch = (value) => {
        console.log(value)
        this.props.getEntity(value)
    }
    render() {
        console.log(this.props)
        return (
            <ContentWapper>
                <ContentBox>
                    <SearchInput>
                        <Search
                            placeholder="请输入要查询的电力实体"
                            enterButton
                            size="large"
                            onSearch={v => this.handleSearch(v)}
                        />
                    </SearchInput>
                    <Answer>
                        <PowerKG nodes={this.props.graph.nodes || []} edges={this.props.graph.edges || []} />
                        <TextAnswer>
                            <Divider orientation="left">实体示例</Divider>
                            <div>
                                <Tag color="magenta">电力变压器</Tag>
                                <Tag color="red">真空压力表</Tag>
                                <Tag color="volcano">变电器</Tag>
                                <Tag color="orange">绝缘子</Tag>
                                <Tag color="gold">低压配电屏</Tag>
                                <Tag color="lime">电压互感器</Tag>
                                <Tag color="green">隔离开关</Tag>
                                <Tag color="cyan">并联电容器</Tag>
                                <Tag color="blue">高低压开关柜</Tag>
                                <Tag color="geekblue">电解式湿度计</Tag>
                                {/* <Tag color="purple">purple</Tag> */}
                            </div>
                        </TextAnswer>
                    </Answer>
                </ContentBox>
            </ContentWapper>
        )
    }
    componentDidMount(){
        this.props.inieData()
        console.log(this.props.graph)
    }
    
    reload = () => {
        console.log(this)
        this.componentDidMount()
    }
}

const mapStateToProps = (state) => {
    return {
        graph: state.getIn(['kg', 'graph']).toJS()
    }
}

const mapDispatch = (dispatch) => ({

    inieData() {
        dispatch(actionCreators.getKG({}))
    },
    getEntity(value) {
        dispatch(actionCreators.handleSearchEntity(value))
    }
})

export default connect(mapStateToProps, mapDispatch)(TextSegmentation);