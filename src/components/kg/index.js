import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Fragment } from 'react'
import { actionCreators } from './store'
import { message } from 'antd';
import Graphin from '@antv/graphin';
import '@antv/graphin/dist/index.css'; // 引入Graphin CSS
import { Toolbar, ContextMenu, Legend } from '@antv/graphin-components';
import '@antv/graphin-components/dist/index.css'; // Graphin 组件 CSS
import EntityBox from '../entityComps/entityBox';
import { legendOptions } from './config'
import downloadImg from '../../utils/blob'

const { Menu } = ContextMenu;

class PowerKG extends Component {

  constructor(props) {
    super(props)
    this.state = {
      img: ''
    }
  }

  handleLegend = (checked, options, LegendProps) => {
    const { apis } = LegendProps;
    // Highlight 逻辑
    const optionsMap = options.reduce((acc, curr) => {
      acc[curr.value] = curr;
      return acc;
    }, {})
    const filterNodes = this.props.nodes.filter(node => {
      return optionsMap[node.data.type].checked;
    });
    const nodeIds = filterNodes.map(c => c.id);
    console.log(filterNodes, nodeIds);

    apis.highlight(nodeIds);

    // Hide逻辑
  };

  handleChange = (menuItem, menuData) => {
    console.log('a')
    console.log(`元素：${menuData.id}，动作：${menuItem.name}`);
  }

  handleImgDown = async (url) => {
    if (url) {
      return await downloadImg(url)
    }
  }

  render() {
    const nodes = this.props.nodes.map((node) => {
      return {
        data: node,
        shape: 'CircleNode',
        id: node.id,
        label: node.properties.name,
        type:node.label,
        style: {
          icon: node.label,
          fontFamily: 'graphin',
          nodeSize: 16,
        },
      };
    });

    const edges = this.props.edges.map((edge) => {
      return {
        data: edge,
        source: edge.outV,
        target: edge.inV,
        shape: 'LineEdge',
        label: edge.label,
      };
    });

    // const colors = ['#873bf4', '#f79e26', '#f50', '#2db7f5', '#87d068', '#108ee9', '#eb2f96', '#fa541c', '#fa8c16', '#faad14', '#52c41a', '#13c2c2']
    // const nodeTypes = ['部件', '现象', '一次设备', '二次设备', '实验', '其他电力实体', '操作', '设备']
    nodes.forEach((node, index) => {
      let colorIndex = legendOptions.findIndex(x=>x.label==node.type)
      let nodeColor = "#873bf4"
      if(colorIndex!=-1){
        // console.log(node,colorIndex)
        nodeColor = legendOptions[colorIndex]['color']
      }
      node.style = {
        ...node.style,
        fontFamily: 'graphin',
        // icon: isCompany ? 'company' : 'user',
        primaryColor: nodeColor,
      };
      // node.data.type = isCompany ? '部件' : '现象';
    });

    const entityOptions = [
      {
        key: 'detail',
        title: '详细信息',
        visible: true,
        onClick: (e) => {
          const nodes = e.graph.findAllByState('node', 'selected');
          const nodeIds = nodes.map((node) => node.get('id'));
          console.log('你点击详细信息', nodes)
          if (nodes.length == 0) {
            alert('请选择节点后查看详细信息')
          } else {

            const node = nodes[0]._cfg ? nodes[0]._cfg.model.data || {} : {}
            if (node.properties.img && node.properties.img.indexOf("blob:") == -1) {
              this.handleImgDown(node.properties.img).then((url) => {
                console.log('aaaaaa', url)
                node.properties.img = url
                this.props.changeEntityDetail(node)
              })
            } else {
              this.props.changeEntityDetail(node)
            }
            if (this.props.eEditVisible) {
              this.props.changeEntityEditVisible(false)
            }
            this.props.changeEntityDetailVisible(true)
          }

        },
      },
      {
        key: 'edit',
        title: '编辑实体',
        visible: true,
        onClick: () => {
          console.log('你点击编辑实体')
          if (this.props.eDetailVisible) {
            this.props.changeEntityDetailVisible(false)
          }
          this.props.changeEntityEditVisible(true)
        },
      },
      {
        key: 'delete',
        title: '删除实体',
        visible: true,
        onClick: () => { },
      },
      {
        key: 'relation1',
        title: '一度关系',
        visible: true,
        onClick: (e) => { 
          const nodes = e.graph.findAllByState('node', 'selected');
          const nodeIds = nodes.map((node) => node.get('id'));
          console.log('你点击详细信息', nodes)
          if (nodes.length == 0) {
            alert('请选择节点后查看详细信息')
          } else {
            const node = nodes[0]._cfg ? nodes[0]._cfg.model.data || {} : {}
            this.props.getEntityOne(node.id)
          }
        },
      },
      {
        key: 'relation2',
        title: '二度关系',
        visible: true,
        onClick: (e) => { 
          const nodes = e.graph.findAllByState('node', 'selected');
          const nodeIds = nodes.map((node) => node.get('id'));
          console.log('你点击详细信息', nodes)
          if (nodes.length == 0) {
            alert('请选择节点后查看详细信息')
          } else {
            const node = nodes[0]._cfg ? nodes[0]._cfg.model.data || {} : {}
            this.props.getEntityTwo(node.id)
          }
        },
      }
    ];

    return (
      <Fragment>
        <Graphin data={{ nodes, edges }} layout={{ name: 'force', options: { preset: 'concentric' } }}>
          <Toolbar direction="vertical" />
          <ContextMenu options={entityOptions} onChange={this.handleChange} bindType="node" />
          {/* <ContextMenu style={{ width: '80px' }} bindType="canvas">
            <CanvasMenu />
          </ContextMenu> */}
          <Legend options={legendOptions} onChange={this.handleLegend} />
        </Graphin>
        <EntityBox />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  eDetailVisible: state.getIn(['kg', 'eDetailVisible']),
  eEditVisible: state.getIn(['kg', 'eEditVisible']),
})

const mapDispatch = (dispatch) => ({
  changeEntityDetailVisible(value) {
    dispatch(actionCreators.changeDetailVisible(value))
  },
  changeEntityDetail(value) {
    dispatch(actionCreators.changeEntityDetail(value))
  },
  searchEntityOne(value) {
    dispatch(actionCreators.handleSearchEntityOne(value))
  },
  changeEntityEditVisible(value) {
    dispatch(actionCreators.changeEditVisible(value))
  },
  changeRelation(value) {
    dispatch(actionCreators.changeRelation(value))
  },
  changeEntity(value) {
    dispatch(actionCreators.changeEntity(value))
  },

  getEntityOne(value) {
    dispatch(actionCreators.handleSearchEntityShip(value,'1'))
  },
  getEntityTwo(value) {
    dispatch(actionCreators.handleSearchEntityShip(value,'2'))
  }

})

export default connect(mapStateToProps, mapDispatch)(PowerKG);