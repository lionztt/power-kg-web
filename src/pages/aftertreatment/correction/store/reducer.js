import * as constants from './constants'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    graph:{
        nodes: [],
        edges: []
    }
})

export default (state = defaultState, action)=>{
    switch(action.type){
        case constants.GET_KG:
            return state.set('graph',fromJS(action.value));
        default:
            return state;
    }
}