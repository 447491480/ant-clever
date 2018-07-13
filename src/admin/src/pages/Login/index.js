import React from 'react'
import {withRouter} from 'react-router-dom'
import {Form, Icon, Input, Button, Tabs, Row, Col} from 'antd';
import {connect} from 'react-redux';
import Immutable from 'immutable';

import './index.css';
import Screen from '../../components/Base/Screen'
import * as Img from '../../resources/index';
import Api from "../../configs/Api";
import CommonUtil from "../../utils/CommonUtil"
import {SystemConfig} from "../../router/router";


const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class Login extends Screen {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                // let req = await this.request(Api.USER_LOGIN,values);
                // if(req.statu、s !== Api.SUCCESS_CODE) return CommonUtil.toast(req.msg);

                // 登录成功
                // this.onSetValueToStore(['root','user'],Immutable.fromJS(req.data));
                this.onReplaceScreen('/');
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <div className="admin-header">
                    <div className="admin-header-wrap">
                        <div className="admin-logo">
                            {/*<img src={Img.Logo02} alt="" className="admin-logo-img" height="63"/>*/}
                        </div>
                        <ul className="admin-nav logo-right-space">
                            <li className="admin-nav-item">
                                <a href="javascript:void(0);" className="admin-active" style={{fontSize: '24px'}}>
                                    {SystemConfig.systemName}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="admin-login ">
                    <div className="admin-login-wrap" style={{backgroundImage: `url(${Img.loginBg})`}}>
                        <div className="admin-login-right card-container">

                            <Tabs type="card">
                                <TabPane tab="用户账号登录" key="1">
                                    <Form onSubmit={this.handleSubmit} className="login-form">
                                        <FormItem>
                                            {getFieldDecorator('account', {
                                                rules: [{required: true, message: '账号不能为空!'}],
                                            })(
                                                <Input prefix={<Icon type="user"
                                                                     style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                       size={'large'}
                                                       placeholder="账号"/>
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            {getFieldDecorator('password', {
                                                rules: [{required: true, message: '密码不能为空!'}],
                                            })(
                                                <Input prefix={<Icon type="lock"
                                                                     style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                       size={'large'}
                                                       type="password" placeholder="密码"/>
                                            )}
                                        </FormItem>

                                        <FormItem>
                                            <div className={'loginBtnBox'}>
                                                <Button size={'large'} type="primary" htmlType="submit"
                                                        className="login-form-button">
                                                    登录
                                                </Button>
                                            </div>
                                        </FormItem>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect()(Form.create()(Login)))

