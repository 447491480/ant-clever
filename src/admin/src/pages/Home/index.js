import React from 'react'
import {withRouter} from 'react-router-dom'
import {Layout, Menu, Breadcrumb, Icon, Avatar, Col, Tabs, Pagination, Row} from 'antd'
import {connect} from 'react-redux'
import Screen from "../../components/Base/Screen";
import Header from "../../components/Header";
import Besider from "../../components/Besider";
import {renderRoutes} from 'react-router-config'
import {enquireScreen, unenquireScreen} from 'enquire-js';

import Login from "../../pages/Login";


const {Content, Sider} = Layout;

class Home extends Screen {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // if (this.props.user.isEmpty()) return this.onReplaceScreen('/login');

        this.enquireHandler = enquireScreen(mobile => {
            this.onSetValueToStore(['root', 'app', 'isMobile'], !!mobile);
        });
    }

    componentWillUnmount() {
        unenquireScreen(this.enquireHandler);
    }

    render() {
        return (
            <Layout style={{height: "100%"}}>
                <Header/>
                <Content style={{height: 'calc(100% - 1.3rem)'}}>
                    <Layout style={{height: '100%'}} className="page-box">
                        <Besider/>
                        <Content style={{minHeight: 280}}>
                            {
                                renderRoutes(this.props.route.routes)
                            }
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        )
    }
}

export default withRouter(connect(state => ({
    user: state.root.user,
}))(Home))

