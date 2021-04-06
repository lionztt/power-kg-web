import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './style.js';
import 'antd/dist/antd.css';
import './assets/fonts/iconfont.css'

ReactDOM.render(
    <Fragment>
      <GlobalStyle/>
      <App />
    </Fragment>
  ,
  document.getElementById('root')
);
