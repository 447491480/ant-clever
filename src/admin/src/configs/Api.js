/**
 * Created by chang on 2017/7/11.
 */

const HOST = '/';

export default class Api {
    static SUCCESS_CODE = 0;

    // 用户登录
    static USER_LOGIN = {
        url: HOST + 'admin/user/check-user-login',
        method: 'get'
    };
}

