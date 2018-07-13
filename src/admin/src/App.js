import React from 'react';
import BaseComponent from './components/Base/BaseComponent'

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react'

// 引入原始的配置模块
import {store,persist} from './redux/store/index';
import AppRouter from './router/AppRouter';

import Loading from './components/Loading';

// antd 中文支持
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN'

class App extends BaseComponent {
    constructor(props) {
        super(props);

        if (process.env.NODE_ENV === 'production') {
            global.console = {
                info: () => {
                },
                log: () => {
                },
                warn: () => {
                },
                debug: () => {
                },
                error: () => {
                },
            };
        }
    }

    store = store;

    render() {
        return (
            <Provider store={this.store}>
                <PersistGate persistor={persist} loading={<Loading/>}>
                    <LocaleProvider locale={zhCN}>
                        <AppRouter/>
                    </LocaleProvider>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;



