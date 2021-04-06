import * as constants from './constants'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    tableData:[
        {
            user_id: '1',
            user_name: 'admin',
            user_email: 'lionztt@163.com',
            user_phone: '17319111604',
            user_player:'超级管理员',
            create_time: '2020/11/10'
        },
        {
            user_id: '2',
            user_name: 'zhutingting',
            user_email: 'lionztt1@163.com',
            user_phone: '17319111604',
            user_player:'超级管理员',
            create_time: '2020/11/10'
        },
        {
            user_id: '3',
            user_name: 'zhutingting2',
            user_email: 'lionztt1@163.com',
            user_phone: '17319111604',
            user_player:'图谱管理员',
            create_time: '2020/11/10'
        },
        {
            user_id: '4',
            user_name: 'zhutingting3',
            user_email: 'lionztt2@163.com',
            user_phone: '17319111604',
            user_player:'用户',
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