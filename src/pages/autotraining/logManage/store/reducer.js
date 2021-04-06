import * as constants from './constants'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    tableData:[
        {
            key: '1',
            role_name: 'test1.txt',
            role_email: '包含xx',
            createTime: '2020/7/23'
        },
        {
            key: '2',
            role_name: 'test2.txt',
            testSetDesc: '包含xx',
            createTime: '2020/7/23'
        },
        {
            key: '3',
            role_name: 'test3.txt',
            testSetDesc: '包含xx',
            createTime: '2020/7/23'
        }
      ]
})

export default (state = defaultState, action)=>{
    switch(action.type){
        case constants.CHANGE_TABLEDATA:
            return state.set('tableData',action.value);
        case constants.DELETE_TABLEITEM:
            let tableData = state.get('tableData')
            tableData.splice(action.value,1)
            tableData = Object.assign([],tableData)
            return state.set('tableData',tableData);
        default:
            return state;
    }
}