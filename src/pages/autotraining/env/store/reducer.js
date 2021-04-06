import * as constants from './constants'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    tableData:[
        {
            id: '1',
            role_name: '超级管理员',
            role_desc: '拥有所有管理权',
            role_list:['users','user','kg-search','kg-manage','log','roles'],
            user_name:'admin',
            create_time: '2020/11/10'
        },
        {
            id: '2',
            role_name: '图谱管理员',
            role_desc: '拥有图谱查询和管理的权限',
            role_list:['user','kg-search','kg-manage'],
            user_name:'admin',
            create_time: '2020/11/10'
        },
        {
            id: '3',
            role_name: '普通用户',
            role_desc: '拥有图谱查询的权限',
            role_list:['user','kg-search'],
            user_name:'admin',
            create_time: '2020/11/10'
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