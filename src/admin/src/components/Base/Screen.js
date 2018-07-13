import React from "react";
import BaseComponent from './BaseComponent';
import axios from 'axios';
import NProgress from 'nprogress'

NProgress.configure({showSpinner: false});
axios.defaults.timeout = 10000;

class Screen extends BaseComponent {
    constructor() {
        super();

        this.cancel = null;
    }

    componentWillUnmount() {
        this.cancel && this.cancel();
    }

    // 导航到下一个页面
    onPushScreen = (path) => {
        this.props.history.push(path)
    };

    // 替换当前页面
    onReplaceScreen = (path) => {
        this.props.history.replace(path)
    };

    // ajax 请求
    async request(urlObj, args = {}, loading = true, auth = true) {
        let _self = this;
        try {
            const instance = axios.create();
            const CancelToken = axios.CancelToken;

            // cancel
            let config = {
                cancelToken: new CancelToken(function executor(c) {
                    _self.cancel = c;
                })
            };

            // header
            if (urlObj.headers) {
                for (let key in urlObj.headers) {
                    if (urlObj.headers.hasOwnProperty(key)) {
                        console.log(key);
                        instance.defaults.headers.common[key] = urlObj.headers[key];
                    }
                }
            }

            // merge args
            if (urlObj.args) {
                args = Object.assign(urlObj.args, args);
            }

            // url params replace
            let uri = urlObj.url;
            uri = uri.split('/').map(p => {
                for (let key in args) {
                    if (args.hasOwnProperty(key)) {
                        if (p === `:${key}`) {
                            let t = args[key];
                            delete args[key];
                            return t;
                        }
                    }
                }

                return p;
            }).join('/');

            if (loading) NProgress.start();

            let res = null;
            console.log('request args', urlObj.method, uri, args);
            if (urlObj.method === 'get') {
                config.params = args;
                res = await instance.get(uri, config);
            } else {
                config.method = urlObj.method;
                config.url = uri;
                config.data = args;
                res = await instance.request(config);
            }
            if (loading) NProgress.done();
            console.log('request data', urlObj.method, uri, res.data);

            return res.data;
        } catch (e) {
            if (loading) NProgress.done();
            console.log(e);
            return {status: -3, msg: '网络请求异常'};
        }
    }
}

export default Screen