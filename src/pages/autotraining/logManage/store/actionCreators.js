import * as constants from './constants'
import { get, deleteMethod } from '../../../../services/ajax'

const changeTableData = value =>({
    type:constants.CHANGE_TABLEDATA,
    value
})

export const handleInitTableData=()=>{
    return (dispatch)=>{
        // let url = 'api/v1/auto-lm/lm-env/'
        // get({url}).then(res=>{
        //     console.log(res.data.env)
        //     let result = []
        //     ;(async () => {
        //         await Promise.all(res.data.env.map(item=>
        //             getEnvDetail('api/v1/auto-lm/lm-env/'+item.name)
        //         )).then(arr=>{
        //             arr.forEach(arrItem=>{
        //                 result.push(arrItem.data)
        //             })
        //         })
        //         dispatch(changeTableData(result))
        //     })()
        // }).catch(res=>{

        // })
    }
}

const getEnvDetail=(url)=> new Promise((resolve,reject)=>{
    console.log(url)
    get({url}).then(res=>{
        console.log(res)
        resolve(res)
    }).catch(res=>{
        reject(res)
    })
})


const deleteTableItem = value =>({
    type:constants.DELETE_TABLEITEM,
    value
})

export const handleDeleteTableItem=(index,data)=>{
    return (dispatch)=>{
        // delete 操作
        // let url = 'api/v1/auto-lm/lm-env/'+data.env_name
        // deleteMethod({url,params:{env_name:data.env_name}}).then(res=>{
            dispatch(deleteTableItem(index))
        // })
    }
}
