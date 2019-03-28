import {
    Request
} from '../axios';
/** 
 * @todo 注册
 * @method post
 * @param {object} [username],[mobile],[code],[password]
*/
export function acountRegAPI(params) {
    return Request.http.post("/gl/register/proxy/mobile", params);
}
/**
 * @todo 检查手机号是否存在
 * @method post
 * @param {object} [telephone]
 * @requires true
 */
export function existMobileAPI(params) {
    return Request.http.post("/gl/user/exist/telephone", params);
}
//验证手机验证码
export function mobileCodeAPI(params) {
    return Request.http.post("/gl/register/code/validate", params);
}
/**
 * @todo 获取手机验证码
 * @method post
 * @param {object} [mobile]
 * @requires true
 *
 */
export function getMobileCodeAPI(params) {
    return Request.http.post("/gl/register/code", params);
}
//用户名密码注册
export function registerApi(params) {
    return Request.http.post("/gl/register/proxy/username", params);
}
//检查用户名是否存在
export function existUserNameAPI(params) {
    return Request.http.post("/gl/user/exist/username", params);
}