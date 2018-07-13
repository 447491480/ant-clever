import React from 'react';
import Screen from '../Base/Screen';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Icon, Dropdown, Badge, Avatar, Divider, Menu} from 'antd';
import Immutable from 'immutable'
import * as Img from '../../resources/index';

import {getMainNav,SystemConfig} from '../../router/router';

import styles from './index.module.css';

const mainNav = getMainNav();

console.log(mainNav);

const menu02 = (
    <div className="clearfix header-drop-list">
        <div className="clearfix header-drop-tit">
            <div className="nav-tit fl">
                常用菜单
            </div>
            <a href="javascript:;" className="fr">
                设置菜单
            </a>
        </div>
        <ul className="clearfix header-drop-info">
            <li><a href="javascript:;">添加商标</a></li>
            <li><a href="javascript:;">商标列表</a></li>
            <li><a href="javascript:;">订单列表</a></li>
            <li><a href="javascript:;">用户管理</a></li>
            <li><a href="javascript:;">交易统计</a></li>
            <li><a href="javascript:;">广告管理</a></li>
            <li><a href="javascript:;">活动促销</a></li>
            <li><a href="javascript:;">部门管理</a></li>
        </ul>
    </div>
);

const menu04 = (
    <div className="clearfix header-drop-list">
        <div className="clearfix header-drop-tit">
            <div className="nav-tit fl">
                账户信息
            </div>
            <a href="javascript:;" className="fr">
                账户信息
            </a>
        </div>
        <ul className="clearfix header-drop03-info">
            <li><span>• 所在部门：</span>客服部</li>
            <li><span>• 本次登录：</span>2018-12-12 12:12:12</li>
            <li><span>• 登录地区：</span>安徽省合肥市 (IP：183.14.135.1)</li>
            <li><span>• 上次登录：</span>2018-12-12 12:12:12 <a href="javascrip:void(0)">查看登录日志</a></li>
        </ul>
        <div className="out-login">
            <button className="ant-btn ant-btn-primary">退出</button>
        </div>
    </div>
);
const menu03 = (
    <div className="clearfix header-drop-list">
        <div className="clearfix header-drop-tit">
            <div className="nav-tit fl">
                订单提示
            </div>
        </div>
        <ul className="clearfix header-drop02-info">
            <li><a href="javascript:;">待付定金订单</a><span>(<span className="main-color">0</span>)</span></li>
            <li><a href="javascript:;">待付尾款订单</a><span>(<span className="main-color">0</span>)</span></li>
            <li><a href="javascript:;">已付定金待受理订单</a><span>(<span className="main-color">0</span>)</span></li>
            <li><a href="javascript:;">广告位提示</a><span>(<span className="main-color">0</span>)</span></li>
            <li><a href="javascript:;">广告位即将到期</a><span>(<span className="main-color">0</span>)</span></li>
            <li><a href="javascript:;">广告管理</a><span>(<span className="main-color">0</span>)</span></li>
        </ul>
    </div>
);


const NavMenu = (
    <div className="besidermin">
        <ul className="beside-min-list besidemin-leve1">
            <li>
                <span>首页</span>
                <div className="besidemin-leve2">
                    <ul>
                        <li>系统首页</li>
                        <li>账户设置</li>
                        <li>登录日志</li>
                    </ul>
                </div>
            </li>
            <li>
                <span>商标</span>
                <div className="besidemin-leve2">
                    <ul>
                        <li>商标列表</li>
                        <li>添加商标</li>
                        <li>商标审核</li>
                        <li>商标回收站</li>
                        <li>商标分类</li>
                    </ul>
                </div>
            </li>
            <li>
                <span>订单</span>
                <div className="besidemin-leve2">
                    <ul>
                        <li>商标订单</li>
                        <li>服务订单</li>
                    </ul>
                </div>
            </li>
            <li>
                <span>会员</span>
                <div className="besidemin-leve2">
                    <ul>
                        <li>用户列表</li>
                    </ul>
                </div>
            </li>
            <li>
                <span>促销</span>
                <div className="besidemin-leve2">
                    <span>秒杀专区</span>
                    <ul>
                        <li>秒杀专区</li>
                    </ul>
                    <span>活动管理</span>
                    <ul>
                        <li>活动列表</li>
                        <li>添加活动</li>
                    </ul>
                </div>
            </li>
            <li>
                <span>运营</span>
                <div className="besidemin-leve2">
                    <ul>
                        <li>系统消息</li>
                        <li>短信消息</li>
                        <li>站内信消息</li>
                    </ul>
                </div>
            </li>
            <li>
                <span>首页内容</span>
                <div className="besidemin-leve2">
                    <span>导航管理</span>
                    <ul>
                        <li>类别导航</li>
                        <li>轮播图管理</li>
                        <li>热搜词管理</li>
                        <li>栏目管理</li>
                    </ul>
                    <span>首页推荐</span>
                    <ul>
                        <li>精品商标推荐</li>
                        <li>热门分类商标转让</li>
                    </ul>
                    <span>关于我们</span>
                    <ul>
                        <li>关于我们</li>
                    </ul>

                </div>
            </li>
            <li>
                <span>统计</span>
                <div className="besidemin-leve2">
                    <ul>
                        <li>交易统计</li>
                        <li>流量统计</li>
                        <li>商品统计</li>
                        <li>会员统计</li>
                        <li>搜索统计</li>
                    </ul>
                </div>
            </li>
            <li>
                <span>设置</span>
                <div className="besidemin-leve2">
                    <ul>
                        <li>平台信息</li>
                        <li>基本设置</li>
                        <li>消息提醒</li>
                    </ul>
                </div>
            </li>
            <li>
                <span>顾问</span>
                <div className="besidemin-leve2">
                    <ul>
                        <li>顾问管理</li>
                        <li>操作日志</li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
)

class Header extends Screen {
    constructor() {
        super();

        this.state = {
            isOpen: false,
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize.bind(this));
        this.onWindowResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize.bind(this))
    }

    onWindowResize = () => {
        const mobileWidth = 1250;
        if (window.innerWidth >= mobileWidth) {
            this.setState({
                isOpen: false,
            })
        } else if (window.innerWidth < mobileWidth) {
            this.setState({
                isOpen: true,
            })
        }
    };

    onMainMenuClick = (item) =>{
        this.onPushScreen(item.path);
        this.onSetValueToStore(['root','app','mainMenuSelectedKey'],item.path);
    };

    render() {
        return (
            <div className="header clearfix">
                <div className="logo flex-box fl" style={!this.props.collapsed ? {width: '2.56rem'} : {width: '.8rem'}}>
                    <div className={styles.logoInfor}>
                        <img className="logo-img" src={SystemConfig.systemLogo}/>
                        {
                            !this.props.collapsed ? (
                                <h2 className="logo-text">{SystemConfig.systemShortName}</h2>
                            ) : (
                                <Divider type="vertical" key="line" style={{margin: '0 3px'}}/>
                            )
                        }
                    </div>
                </div>

                {
                    !this.state.isOpen ? (
                        <Menu className="header-nav fl"
                              theme="light"
                              mode="horizontal"
                              defaultSelectedKeys={[mainNav[0].path]}
                        >
                            {
                                mainNav.map(item=>(
                                    !!~item.path.indexOf('http') ? (
                                        <Menu.Item key={item.path}><a target={'_blank'} href={item.path}>{item.name}</a></Menu.Item>
                                    ) : (
                                        <Menu.Item onClick={this.onMainMenuClick.bind(this,item)} key={item.path}>{item.name}</Menu.Item>
                                    )
                                ))
                            }
                        </Menu>
                    ) : (
                        <div style={{display: 'inline-block', marginLeft: '.1rem'}}>
                            <Dropdown overlay={NavMenu} className="navdrapdown">
                                <a className="ant-dropdown-link" href="javascript:;">
                                    <span style={{fontSize: '.18rem'}}> <Icon type="menu-fold"/></span>
                                </a>
                            </Dropdown>
                        </div>
                    )
                }

                <div className={styles.headerControl}>
                    <Dropdown overlay={menu02} className="mydrop">
                        <div className={styles.dropText}>
                            <Icon type="profile"/>
                        </div>
                    </Dropdown>
                    <Dropdown overlay={menu03}>
                        <div className={styles.dropText}>
                            <Badge count={5} className="notice">
                                <a href="javascript:;" className="head-example">
                                    <Icon type="bell" className={styles.message}/>
                                </a>
                            </Badge>
                        </div>
                    </Dropdown>
                    <Dropdown overlay={menu04}>
                        <div className={styles.dropText}>
                            <Avatar icon="user"/> <span className="header-admin-text">{this.props.user.get('nickname') || this.props.user.get('account') || ''}</span>
                        </div>
                    </Dropdown>
                </div>
            </div>

        )
    }
}

export default withRouter(connect(state => ({
    collapsed: state.root.app.get('collapsed'),
    user: state.root.user,
}))(Header));