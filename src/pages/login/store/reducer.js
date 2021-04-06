import * as constants from './constants'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    loginStatus:true,
    username:'zhutingting',
    authorities:['rules-correct','wfst-correct','punc-predict','text-split','nlp','auto-lm']
})

export default (state = defaultState, action)=>{
    switch(action.type){
        case constants.CHANGE_LOGIN:
            return state.set('loginStatus',action.value);
        case constants.CHANGE_AUTHORITIES:
            return state.set('authorities',action.authorities);
        case constants.CHANGE_USERNAME:
            return state.set('username',action.username);
        case constants.LOGOUT:
            return state.set('loginStatus',action.value);
        case constants.REMOVE_USERNAME:
            return state.set('username',action.username);
        case constants.REMOVE_AUTHORITIES:
            return state.set('authorities',action.authorities);
        default:
            return state;
    }
}