import * as constants from './constants'
import { get } from '../../../services/ajax'
import { createTreeData, getTreeDataDefault } from '../config'

export const handlePageInit = () =>{
    return (dispatch) => {
        let url = 'api/v1/user/services-list/'
        get({ url }).then(res=>{
            console.log(res)
            dispatch(changeDefaultKeys(getTreeDataDefault(res.data)))
            dispatch(getServices(createTreeData(res.data)))
        }).catch(res=>{
            console.log(res)
        })
    } 
}

const getServices = services =>({
    type:constants.GET_SERVICES,
    services // treeData
})

export const changeDefaultKeys = defaultList=>({
    type:constants.CHANGE_DEFAULTKEYS,
    value:defaultList
})

