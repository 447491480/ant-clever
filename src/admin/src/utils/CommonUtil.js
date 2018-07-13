import {message} from 'antd'
import moment from 'moment';

import padStart from 'lodash/padStart';

message.config({
    top: 150,
    duration: 2,
});

export default class CommonUtil {
    static toast(msg) {
        message.info(msg, 3, null);
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

    static sliceArray(array, size, emptyAppend = false) {
        if (!Array.isArray(size)) {
            size = [size];
        }
        let result = [];

        let start = 0;
        let end = 0;

        while (end < array.length) {
            for (let s = 0; s < size.length; s++) {
                end = size[s] + start;
                if (end <= array.length) {
                    result.push(array.slice(start, end));
                    start = end;
                } else {
                    let slices = array.slice(start, array.length);
                    if (emptyAppend) {
                        for (let i = 0; i < end - array.length; i++) {
                            slices.push({emptyAppend: true})
                        }
                    }

                    result.push(slices);

                    break;
                }
            }
        }
        return result;
    }

    static arrayToTree = (array, id = 'id', pid = 'pid', children = 'children') => {
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

    static getQueryString(name, search) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");

        let r = decodeURIComponent(search).substr(1).match(reg);
        if (r != null) return r[2];
        return null;
    }

    static windowScrollTop(top = 0) {
        window.scrollTo(0, top);
    }


    static getExtType(file, hasDot = false) {
        let xp = file.lastIndexOf('.');
        return hasDot ? file.substring(xp, file.length).toLowerCase() : file.substring(xp + 1, file.length).toLowerCase();
    }

    static getFileName(file) {
        let xp = file.lastIndexOf('/');
        return file.substring(xp + 1, file.length).toLowerCase();
    }

    static fileType(filename) {
        let ext = this.getExtType(filename, true);
        if (!!~'.jpg,.jpeg,.png'.indexOf(ext)) {
            return 1;
        } else if (!!~'.mp3,.aac,.wav'.indexOf(ext)) {
            return 3;
        } else if (!!~'.avi,.wmv,.mpeg,.mp4,.mov,.mkv,.flv,.f4v,.m4v,.rmvb,.rm,.3gp,.dat,.ts,.mts,.vob'.indexOf(ext)) {
            return 2;
        } else if (!!~'.svg'.indexOf(ext)) {
            return 4;
        }
    }
}
