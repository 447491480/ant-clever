// 引入reducer
import {routerReducer} from 'react-router-redux';
import rootReducer from './rootReducer';

// 合并到主reducer
const reducer = {
    root: rootReducer,
    routing: routerReducer,
};

export default reducer;