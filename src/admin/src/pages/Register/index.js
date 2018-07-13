import React from 'react'
import {withRouter} from 'react-router-dom'
import {Row, Col, Input, Button, Modal} from 'antd'
import {connect} from 'react-redux'

import styles from './index.module.css'
import Screen from '../../components/Base/Screen'


class Register extends Screen {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <div>reg</div>
        )
    }
}

export default withRouter(connect(

)(Register))

