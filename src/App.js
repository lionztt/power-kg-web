import React from 'react';
import {Provider} from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import Routers from './router';
import Layout from './layout';

import store from './store'


function App() {
  return (
    <Provider store={store}>
        <HashRouter>
          <ConfigProvider locale={zhCN}>
            <Layout>
              <Routers/>
            </Layout>
          </ConfigProvider>
        </HashRouter>
      </Provider>
  );
}

export default App;
