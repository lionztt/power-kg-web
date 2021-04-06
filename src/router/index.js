import React from 'react'
import { Switch,Redirect,Route } from 'react-router-dom'
import Home from '../pages/home'
import * as MyPages from './config'

function Routes(){
    return(
        <Switch>
            <Route exact path='/'>
                <Redirect exact from='/' to='/home'/>
            </Route>
            <Route exact path='/home'  component={Home}  key="/home"/>
            <Route  path='/aftertreatment/correction' exact component={MyPages.Correction} key="/aftertreatment/correction"/>
            <Route  path='/aftertreatment/textsegmentation' exact component={MyPages.Textsegmentation}  key="/aftertreatment/textsegmentation"/>
            <Route  path='/aftertreatment/punctuationpred' exact component={MyPages.Punctuationpred}  key="/aftertreatment/punctuationpred"/>
            <Route  path='/autotraining/env' exact component={MyPages.Env}  key="/autotraining/env"/>
            <Route  path='/autotraining/audiomodel' exact component={MyPages.AudioModel}  key="/autotraining/audiomodel"/>
            <Route  path='/autotraining/logManage' exact component={MyPages.LogManage}  key="/autotraining/logManage"/>
            <Route exact path="/*">
                <Redirect to="/home"/>
            </Route>
        </Switch>
    )
}
export default Routes;
