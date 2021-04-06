import * as constants from './constants'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    entities:[]
})

export default (state = defaultState, action)=>{
    switch(action.type){
        case constants.GET_ENTITY:
            return state.set('entities',action.value);
        default:
            return state;
    }
}