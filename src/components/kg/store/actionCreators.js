import * as constants from './constants'
import {get,post} from '../../../services/ajax'

export const changeEditVisible = value =>({
    type:constants.CHANGE_EDITVISIBLE,
    value
})

export const changeEntityDetail = value =>({
    type:constants.CHANGE_DETAIL,
    value
})

export const changeDetailVisible = value =>({
    type:constants.CHANGE_DETAILVISIBLE,
    value
})

export const changeRelation = value =>({
    type:constants.CHANGE_RELATION,
    value
})

export const changeEntity = value =>({
    type:constants.CHANGE_ENTITY,
    value
})

export const getKG = graph => ({
    type: constants.GET_KG,
    value: graph
})

export function handleInitData() {
    return (dispatch) => {
        let url = 'api/kg/'
        get({ url }).then(res => {
            dispatch(getKG(res.data.graph))
        }).catch(res => {
            console.log(res)
        })
    }
}

export function handleSearchEntity(entityName) {
    return (dispatch) => {
        let url = `api/kg/entity?entity=${entityName}`
        get({ url }).then(res => {
            console.log(res)
            dispatch(getKG(res.data.graph || { nodes: [], edges: [] }))
        }).catch(res => {
            console.log(res)
        })
    }
}

export function handleSearchEntityShip(entityName,type) {
    return (dispatch) => {
        let url = `api/kg/entity?entity=${entityName}&type=${type}`
        get({ url }).then(res => {
            console.log(res)
            dispatch(getKG(res.data.graph || { nodes: [], edges: [] }))
        }).catch(res => {
            console.log(res)
        })
    }
}

export function handleSearchRelation(e1,e2) {
    return (dispatch) => {
        let url = `api/kg/relation?e1=${e1}&e2=${e2}`
        get({ url }).then(res => {
            console.log(res)
            dispatch(getKG(res.data.graph || { nodes: [], edges: [] }))
        }).catch(res => {
            console.log(res)
        })
    }
}
