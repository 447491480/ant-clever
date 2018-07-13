import {CommonAction} from "../actions/CommonAction";
import Immutable from 'immutable';

import app from '../state/app'

const initialState = {
    user: Immutable.fromJS({}),
    app: Immutable.fromJS(app),
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CommonAction.ROOT_SET_KEY:
            let {k, v, m} = action.payload;
            let key = k.shift();

            let nextState = {};
            if (!k.length && !v) {
                nextState[key] = initialState[key];

                return Object.assign({}, state, nextState);
            } else {
                nextState[key] = state[key][m](k, v);
                return Object.assign({}, state, nextState);
            }
        default:
            return state;
    }
}