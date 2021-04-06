import * as constants from './constants'
import { get } from '../../../../services/ajax'
import axios from 'axios'

const changeTableData = value =>({
    type:constants.CHANGE_TABLEDATA,
    value
})

export const handleInitTableData=()=>{
    return (dispatch)=>{
        // let url = 'api/v1/auto-lm/acoustic-model/'
        // get({url}).then(res=>{
        //     dispatch(changeTableData(res.data))
        // }).catch(res=>{

        // })
    }
}

const deleteTableItem = value =>({
    type:constants.DELETE_TABLEITEM,
    value
})

export const handleDeleteTableItem=(index,data)=>{
    return (dispatch)=>{
        // delete 操作
        // const formData = new FormData();
        // formData.append('file_id', data.file_id);
        // formData.append('msg_type','delete')
        // formData.append('env_name',data.env_name)
        // let instance = axios.create({
        //     baseURL:'http://10.186.0.210:8001/',
        //     timeout:1000,
        //     headers:{"Content-Type":"multipart/form-data"}
        // })
        // let url = 'api/v1/auto-lm/acoustic-model/'
        // console.log(url)

        // instance.post(url,formData).then(res=>{
        //     console.log(res)
        //     dispatch(deleteTableItem(index))
        // })
        
    }
}
