// 关系查询页
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button, Form, Select } from 'antd';
import { actionCreators } from '../../../components/kg/store'
import { ContentWapper, ContentBox, SearchInput } from './style'
import PowerKG from '../../../components/kg'


const data = {
  nodes: [],
  edges: []
}


function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

function handleSearchBtn() {

}

class Punctuationpred extends Component {
  state = {
    relation: '',
    entity: ''
  }
  onChange(value) {
    console.log(`selected ${value}`);
  }

  onFinish = values => {
    console.log('Finish:', values);
    // let relation = values.relation
    let entity1 = values.entity1
    let entity2 = values.entity2
    console.log(entity1, entity2)
    if (entity1 && entity2) {
      this.props.getRelationPath(entity1, entity2)
    }
    else { alert('请填写实体后查询') }
  }

  render() {
    return (
      <ContentWapper>
        <ContentBox>
          <SearchInput>
            <Form name="horizontal_login" layout="inline" onFinish={this.onFinish}>
              <Form.Item
                name="entity1"
              >
                <Input size="large" placeholder="实体1" />
              </Form.Item>
              <Form.Item
                name="entity2"
              >
                <Input size="large" placeholder="实体2" />
              </Form.Item>
              {/* <Form.Item
                            name="relation"
                        >
                            <Select
                              size="large"
                              showSearch
                              style={{ width: 200 }}
                              placeholder="选择关系"
                              optionFilterProp="children"
                              onChange={this.props.changeRelation}
                              onFocus={onFocus}
                              onBlur={onBlur}
                              onSearch={onSearch}
                              filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              <Select.Option value="注意现象">注意现象</Select.Option>
                              <Select.Option value="部件">部件</Select.Option>
                              <Select.Option value="相关规定">相关规定</Select.Option>
                            </Select>
                            {/* <Input size="large" placeholder="实体2"/> */}
              {/* </Form.Item> */}
              <Form.Item>
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                >
                  查询
                            </Button>
              </Form.Item>
            </Form>
          </SearchInput>
          <PowerKG nodes={this.props.graph.nodes || []} edges={this.props.graph.edges || []} />
        </ContentBox>
      </ContentWapper>
    )
  }
  componentDidMount() {
    this.props.inieData()
    console.log(this.props.graph)
  }
}
const mapStateToProps = (state) => ({
  graph: state.getIn(['kg', 'graph']).toJS()
})

const mapDispatch = (dispatch) => ({
  inieData() {
    dispatch(actionCreators.getKG({}))
  },
  getRelationPath(e1, e2) {
    dispatch(actionCreators.handleSearchRelation(e1, e2))
  }

})

export default connect(mapStateToProps, mapDispatch)(Punctuationpred);