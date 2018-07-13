import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Screen from "../../../../components/Base/Screen";
import ContentWrap from "../../../../components/Base/ContentWrap";

import Immutable from 'immutable';


class ModelTool extends Screen {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ContentWrap>

            </ContentWrap>
        )
    }
}

export default withRouter(connect()(ModelTool))

