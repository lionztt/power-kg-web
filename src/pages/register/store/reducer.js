import * as constants from './constants'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    services:[],
    defaultList:[]
})

export default (state = defaultState, action)=>{
    switch(action.type){
        case constants.GET_SERVICES:
            return state.set('services',action.services);
        case constants.CHANGE_DEFAULTKEYS:
            return state.set('defaultList',action.value);
        default:
            return state;
    }
}