import * as constants from './constants'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    eDetailVisible:false,
    eEditVisible:false,
    chosedRelation:'',
    chosedEntity:'',
    eDetail:{
        id:'',
        label:'',
        properties:{
            name:'',
            img:'',
            baike:'',
            properties:'{}'
        }
    },
    graph:{
        nodes: [],
        edges: []
    }
})

export default (state = defaultState, action)=>{
    switch(action.type){
        case constants.CHANGE_DETAIL:
            return state.set('eDetail',fromJS(action.value));
        case constants.CHANGE_DETAILVISIBLE:
            return state.set('eDetailVisible',action.value);
        case constants.CHANGE_EDITVISIBLE:
            return state.set('eEditVisible',action.value);
        case constants.CHANGE_RELATION:
            return state.set('chosedRelation',action.value);
        case constants.CHANGE_ENTITY:
            return state.set('chosedEntity',action.value);
        case constants.GET_KG:
            return state.set('graph',fromJS(action.value));
        case constants.GET_ENTITY:
            return state.set('graph',fromJS(action.value));
        default:
            return state;
    }
}