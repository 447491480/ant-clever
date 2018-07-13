import React from 'react';
import Screen from '../Base/Screen';

import {Layout, Menu, Icon} from 'antd';
import {connect} from 'react-redux';
import Immutable from 'immutable';
import {withRouter} from 'react-router-dom';
import {SystemConfig} from '../../router/router';
import {FaCircle} from 'react-icons/lib/fa';

const SubMenu = Menu.SubMenu;
const {Sider} = Layout;

class SiderMenu extends Screen {
    constructor() {
        super();
    }

    genNavItem = (nav) => {
        if (nav.subMenu && nav.subMenu.length > 0) {
            return (
                <SubMenu key={nav.path || nav.name}
                         title={<span>{!!nav.icon ? (<Icon type={nav.icon}/>) : (
                             <Icon><FaCircle/></Icon>)}<span>{nav.name}</span></span>}>
                    {
                        nav.subMenu.map(n => (
                            this.genNavItem(n)
                        ))
                    }
                </SubMenu>
            )
        } else {
            return (
                <Menu.Item key={nav.path} onClick={this.onPushScreen.bind(this, nav.path)}>
                    {!!nav.icon ? (<Icon type={nav.icon}/>) : (<Icon><FaCircle/></Icon>)}
                    <span>{nav.name}</span>
                </Menu.Item>
            )
        }
    };

    render() {
        return (
            <div className="besider">
                <Sider
                    width={256}
                    style={[{background: '#fff'}]}
                    trigger={null}
                    collapsible
                    breakpoint="lg"
                    collapsed={this.props.collapsed}
                    onCollapse={(collapsed, type) => {
                        this.onSetValueToStore(['root', 'app', 'collapsed'], collapsed);
                        this.onSetValueToStore(['root', 'app', 'collapsedType'], type)
                    }}
                >
                    <Menu
                        key="BesideMainMenu"
                        mode="inline"
                        theme="light"
                        inlineCollapsed={this.props.collapsed}
                    >
                        {
                            SystemConfig.menu[SystemConfig.menu.findIndex(m => m.path === this.props.mainMenuSelectedKey)].subMenu.map(nav => (
                                this.genNavItem(nav)
                            ))
                        }
                    </Menu>
                </Sider>
            </div>
        )
    }
}

export default withRouter(connect(
    state => ({
        mainMenuSelectedKey: state.root.app.get('mainMenuSelectedKey', '/system/'),
    })
)(SiderMenu));
