// 图谱全貌页
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { actionCreators } from '../../../components/kg/store'
// import { post } from '../../../services/ajax.js'
import { ContentWapper, ContentBox} from './style'
import PowerKG from '../../../components/kg'

import xianxiang from '../../../assets/nodes/xianxiang'
import powerEntities from '../../../assets/nodes/电力实体'
import zhuyixianxiang from '../../../assets/edges/注意现象';
import otherName from '../../../assets/edges/别名'
import baohan from '../../../assets/edges/包含'

const data = {
  nodes:xianxiang.concat(powerEntities),
  edges:zhuyixianxiang.concat(otherName).concat(baohan)
}

class Correction extends Component{

    render(){
        return(
            <ContentWapper>
                <ContentBox>
                  <PowerKG nodes={this.props.graph.nodes||[]} edges={this.props.graph.edges||[]}/>
                </ContentBox>
            </ContentWapper>
        )
    }

    componentDidMount(){
        this.props.handleInitData()
        console.log(this.props.graph)
    }
    
    reload = () => {
        console.log(this)
        this.componentDidMount()
    }
}

const mapStateToProps = (state)=>{
    return {
        graph: state.getIn(['kg','graph']).toJS()
    }
}

const mapDispatch = (dispatch) =>({
    handleInitData(){
        dispatch(actionCreators.handleInitData())
    }
})

export default connect(mapStateToProps,mapDispatch)(Correction);