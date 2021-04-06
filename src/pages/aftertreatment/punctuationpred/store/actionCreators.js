import * as constants from './constants'
import { get, post } from '../../../../services/ajax'

const getEntity = entities => ({
    type: constants.GET_ENTITY,
    value: entities
})

export function handleSearchEntity(entityName) {
    return (dispatch) => {
        let url = `api/kg/entity?entity=${entityName}`
        get({ url }).then(res => {
            dispatch(getEntity(res.data.graph))
        }).catch(res => {
            console.log(res)
        })
    }
}


