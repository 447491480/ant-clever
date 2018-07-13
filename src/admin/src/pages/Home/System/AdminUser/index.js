import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Screen from "../../../../components/Base/Screen";
import ContentWrap from "../../../../components/Base/ContentWrap";

import Immutable from 'immutable';


class OperaLog extends Screen {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ContentWrap>
                敬请期待
            </ContentWrap>
        )
    }
}

export default withRouter(connect()(OperaLog))

