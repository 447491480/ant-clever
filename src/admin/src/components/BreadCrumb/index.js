import React from 'react';
import BaseComponent from '../Base/BaseComponent';

import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import Immutable from 'immutable'

const { SubMenu } = Menu;
const {  Content, Footer, Sider } = Layout;

class BreadCrumb extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>系统首页</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}

export default BreadCrumb;