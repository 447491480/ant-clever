import React from 'react';
import BaseComponent from '../BaseComponent';

import {Spin} from 'antd';

class Loading extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        return (
            <Spin tip={"请稍候..."} size="large" className={"globalSpin"}/>
        )
    }
}

export default Loading;