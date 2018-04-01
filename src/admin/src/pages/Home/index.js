import React from 'react'
import BaseComponent from '../../components/BaseComponent'
import {Link, withRouter} from 'react-router-dom'
import {Row, Col, Input, Button, Modal} from 'antd'
import styles from './index.module.css'


import CommonUtil from "../../utils/CommonUtil"

import {connect} from 'react-redux'
import * as userAction from '../../redux/actions/userAction'
import Request from '../../utils/Request'

class Home extends BaseComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                home
            </div>
        )
    }
}

export default withRouter(connect(
    state => {
        return {
        }
    }
)(Home))

