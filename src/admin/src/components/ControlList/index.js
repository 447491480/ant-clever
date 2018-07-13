import React from 'react';
import BaseComponent from '../Base/BaseComponent';
import Besidermin from "../../components/Besidermin";

import {Layout, Menu, Breadcrumb, Icon, Col,Tabs,Pagination,Row } from 'antd';
import Immutable from 'immutable'
import * as Img from '../../resources/index';
import styles from './index.module.css'


const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class ControlList extends BaseComponent {
    constructor() {
        super();
    }
    state = {
        current: 3,
    }
    onChange = (page) => {
        console.log(page);
        this.setState({
        current: page,
        });
    }

    render() {
        return (
             <ul className="contro-list-box">
                <Row gutter={20} > 
                    <Col xs={{ span:12, offset: 0}} sm={{ span:8}} md={{ span:6}} lg={{ span:3 }}>
                        <li>
                            <a href="javascript:;">
                                <Icon type="plus-square-o" />
                            </a>
                            <p>添加商品</p>
                        </li>
                    </Col>
                    <Col xs={{ span:12, offset: 0}} sm={{ span:8}} md={{ span:6}} lg={{ span:3 }}>
                        <li>
                            <a href="javascript:;">
                                <Icon type="profile" />
                            </a>
                            <p>订单中心</p>
                        </li>
                    </Col>
                    <Col xs={{ span:12, offset: 0}} sm={{ span:8}} md={{ span:6}} lg={{ span:3 }}>
                        <li>
                            <a href="javascript:;">
                                <Icon type="idcard" />
                            </a>
                            <p>会员管理</p>
                        </li>
                    </Col>
                    <Col xs={{ span:12, offset: 0}} sm={{ span:8}} md={{ span:6}} lg={{ span:3 }}>
                        <li>
                            <a href="javascript:;">
                                <Icon type="line-chart" />
                            </a>
                            <p>交易统计</p>
                        </li>
                    </Col>
                    <Col xs={{ span:12, offset: 0}} sm={{ span:8}} md={{ span:6}} lg={{ span:3 }}>
                        <li>
                            <a href="javascript:;">
                               <Icon type="shake" />
                            </a>
                            <p>短信营销</p>
                        </li>
                    </Col>
                  <Col xs={{ span:12, offset: 0}} sm={{ span:8}} md={{ span:6}} lg={{ span:3 }}>
                        <li>
                            <a href="javascript:;">
                                <Icon type="desktop" />
                            </a>
                            <p>首页轮播图管理</p>
                        </li>
                    </Col>
                    <Col xs={{ span:12, offset: 0}} sm={{ span:8}} md={{ span:6}} lg={{ span:3 }}>
                        <li>
                            <a href="javascript:;">
                                <Icon type="gift" />
                            </a>
                            <p>活动专题</p>
                        </li>
                    </Col>
                    <Col xs={{ span:12, offset: 0}} sm={{ span:8}} md={{ span:6}} lg={{ span:3 }}>
                        <li>
                            <a href="javascript:;">
                                <Icon type="clock-circle-o" />
                            </a>
                            <p>特价秒杀</p>
                        </li>
                    </Col>
                 </Row>   
                
             </ul>            
        )
    }
}

export default ControlList;