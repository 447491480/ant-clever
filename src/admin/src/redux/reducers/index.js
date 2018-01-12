// 引入reducer
import {routerReducer} from 'react-router-redux';
import rootReducer from './rootReducer';
import userReducer from './userReducer';



// 合并到主reducer
const reducer = {
    root:rootReducer,
    routing: routerReducer,
    user:userReducer,
};

export default reducer;