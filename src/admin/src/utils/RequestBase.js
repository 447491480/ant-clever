import axios from 'axios'
import CommonUtil from './CommonUtil';
import {push, replace} from 'react-router-redux';
import {store} from '../redux/store';
import * as userAction from '../redux/actions/userAction';

// 网络请求基类
export default class RequestBase {

    static async base(url, method, args, showLoading = true, auth = true) {
        try {

            console.log(url, args);

            // args.__ = Math.random();

            if (showLoading) {
                CommonUtil.showLoading();
            }

            let config = {};

            config.method = method;
            config.url = url;
            if (config.method === 'get') {
                config.data = {};
                config.params = args;
            } else {
                config.data = args;
            }

            let res = await axios(config);

            if (showLoading) {
                CommonUtil.hideLoading();
            }

            console.log(res, res.data);

            if (res.status !== 200) {
                return {status: -3, msg: '网络请求异常'};
            }

            if (res.data.status === -999) {
                let location = CommonUtil.parseObj(window.location);

                setTimeout(() => {
                    store.dispatch(replace('/login?_from=' + encodeURIComponent(`${process.env.NODE_ENV === 'production' ? location.pathname : location.hash.substring(1)}${location.search}`)));
                    store.dispatch({type: userAction.LOGOUT});
                }, 1500);
                return {status: -3, msg: '登录失效，请重新登录'};
            }

            return res.data;
        } catch (e) {
            console.log(e);
            if (showLoading) {
                CommonUtil.hideLoading();
            }
            return {status: -3, msg: '网络请求异常'};
        }
    }

    static async get(url, args, showLoading, auth) {
        return await this.base(url, 'get', args, showLoading, auth);
    }

    static async post(url, args, showLoading, auth) {
        return await this.base(url, 'post', args, showLoading, auth);
    }
}