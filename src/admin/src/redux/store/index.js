// 创建唯一 store 并输出
import {configureStore} from './configureStore';
import reducers from '../reducers';

// store 持久化
import { persistReducer,persistStore,persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import immutableTransform from 'redux-persist-transform-immutable'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['root'],
    transforms:[immutableTransform()]
};

const reducer = persistCombineReducers(persistConfig, reducers);

// 给增强后的store传入reducer
export const store = configureStore(reducer);
export const persist = persistStore(store);

// store 支持 mhr
if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers');
        // store.replaceReducer(nextRootReducer);

        store.replaceReducer(
            persistReducer(persistConfig, nextRootReducer.default)
        )
    });
}