import {
    Request
} from '../api';


/** 
 * @todo 获取手机验证码
 * @method post
 * @param {object} mobile 手机号码    type 类型
 * @requires type type 为绑定必须传手机号
 */
export function getMobileCodeAPI(params) {
    return Request.http.post("/gl/user/mobile/code", params);
}
/** 
 * @todo 获取用户个人信息
 * @method post
 * @param {object}
 * @requires token 
 */
export function getUserDetailAPI(params) {
    return Request.http.post("/gl/user/detail", params);
}
/** 
 * @todo 获取用户提现信息
 * @method post
 * @param {object}
 * @requires token 
 */
export function UserWithdrawInfoAPI(params) {
    return Request.http.post("/gl/withdraw/info", params);
}