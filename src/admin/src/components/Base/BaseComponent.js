import React, {Component} from 'react'
import {is} from 'immutable';

class BaseComponent extends Component {
    constructor() {
        super();
    }

    // 设置store
    onSetValueToStore(key, value, method = 'setIn') {
        method = method || 'setIn';
        console.log('onSetValueToStore', key, value, method);
        let reduce = key.shift();
        this.props.dispatch({
            type: `${reduce.toUpperCase()}_SET_KEY`,
            payload: {k: key, v: value, m: method}
        })
    }

    shouldComponentUpdate(nextProps, nextState = {}) {
        const state = this.state || {};

        return !(this.updateOnProps || Object.keys({...nextProps, ...this.props})).every((p) => is(nextProps[p], this.props[p]))
            || !(this.updateOnStates || Object.keys({ ...nextState, ...state})).every((s) => is(nextState[s], state[s]));
    }
}

export default BaseComponent