/**
 * Created by chang on 14/12/6.
 */
export default class ValidationUtil {

    // 以1开头的11位数字
    static isCellPhone(n) {
        return /^1\d{10}$/.test(n);
    };

    // 验证规则：姑且把邮箱地址分成“第一部分@第二部分”这样
    // 第一部分：由字母、数字、下划线、短线“-”、点号“.”组成，
    // 第二部分：为一个域名，域名由字母、数字、短线“-”、域名后缀组成，
    // 而域名后缀一般为.xxx或.xxx.xx，一区的域名后缀一般为2-4位，如cn,com,net，现在域名有的也会大于4位
    static isEmail(n) {
        return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(n);
    };
}
