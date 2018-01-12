import {message} from 'antd'
import moment from 'moment'

message.config({
    top: '45%',
    duration: 2,
});

export default class CommonUtil {
    static toast(msg) {
        setTimeout(()=>{
            message.info(msg, 3, null);
        },500)
    }

    static showLoading(msg = '正在加载，请稍候...') {
        message.loading(msg, 0, null);
    }

    static hideLoading() {
        message.destroy();
    }

    static parseTime(t, fmt = 'YYYY-MM-DD HH:mm:ss') {
        return moment(t).format(fmt);
    }

    static parseObj(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    static convertBase(value, from_base, to_base) {
        value = value.toString();
        let range = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('');
        let from_range = range.slice(0, from_base);
        let to_range = range.slice(0, to_base);

        let dec_value = value.split('').reverse().reduce(function (carry, digit, index) {
            if (from_range.indexOf(digit) === -1) throw new Error('Invalid digit `'+digit+'` for base '+from_base+'.');
            return carry += from_range.indexOf(digit) * (Math.pow(from_base, index));
        }, 0);

        let new_value = '';
        while (dec_value > 0) {
            new_value = to_range[dec_value % to_base] + new_value;
            dec_value = (dec_value - (dec_value % to_base)) / to_base;
        }
        return new_value || '0';
    }

    static sliceArray(array, size) {
        let result = [];
        for (let x = 0; x < Math.ceil(array.length / size); x++) {
            let start = x * size;
            let end = start + size;
            result.push(array.slice(start, end));
        }
        return result;
    }

    static checkEmail(string){
        return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(string)
    }

    static arrayToTree = (array, id = 'id', pid = 'pid', children = 'children') =>{
        id = id || 'id';
        pid = pid || 'pid';
        children = children || 'children';

        let data = array;
        let result = [];
        let hash = {};
        data.forEach((item, index) => {
            hash[data[index][id]] = data[index]
        });

        data.forEach((item) => {
            let hashVP = hash[item[pid]];
            if (hashVP) {
                !hashVP[children] && (hashVP[children] = []);
                hashVP[children].push(item)
            } else {
                result.push(item)
            }
        });
        return result
    };

    static getQueryString(name,search) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");

        let r = decodeURIComponent(search).substr(1).match(reg);
        if (r != null) return r[2];
        return null;
    }

    static windowScrollTop(top=0){
        window.scrollTo(0,top);
    }
}
