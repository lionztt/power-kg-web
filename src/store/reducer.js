import { combineReducers } from 'redux-immutable'
// import {reducer as headerReducer } from '../common/header/store'
import {reducer as correctionReducer } from '../pages/aftertreatment/correction/store'
import {reducer as kgReducer } from '../components/kg/store'
import {reducer as puncReducer } from '../pages/aftertreatment/punctuationpred/store'
import {reducer as textSplitReducer } from '../pages/aftertreatment/textsegmentation/store'
import {reducer as envReducer } from '../pages/autotraining/env/store'
import {reducer as logManageReducer } from '../pages/autotraining/logManage/store'
import {reducer as audioModelReducer } from '../pages/autotraining/audioModel/store'
import {reducer as loginReducer } from '../pages/login/store'
import {reducer as registerReducer } from '../pages/register/store'

const reducer = combineReducers({
    correction:correctionReducer,
    punc: puncReducer,
    kg: kgReducer,
    textSplit: textSplitReducer,
    env:envReducer,
    audioModel:audioModelReducer,
    logManage:logManageReducer,
    login:loginReducer,
    register:registerReducer
})

export default reducer;