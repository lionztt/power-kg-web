import * as constants from './constants'
import { get, post } from '../../../../services/ajax'

const getKG = graph =>({
    type:constants.GET_KG,
    value:graph
})

export function handleInitData(){
    return (dispatch) => {
        let url = 'api/kg/'
        get({ url }).then(res=>{
            dispatch(getKG(res.data.graph))
        }).catch(res=>{
            console.log(res)
        })
    } 
}
