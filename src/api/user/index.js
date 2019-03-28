import {
    Request
} from '../axios';


//查询个人资料
export function userDetailApi(params) {
    return Request.http.post("/gl/user/detail", params);
}

/**
 * @todo 更新个人资料
 * @method post
 * @param {nickName,birthday,sex}
 * 
 *
 */
export function updateUserApi(params) {
    return Request.http.post("/gl/user/update", params);
}
/** 
 * @todo 修改登录密码
 * @method post
 * @param {Object} oldPwd 旧密码   newPwd 新密码
 * @requires true
 */
export function updatePassApi(params) {
    return Request.http.post("/gl/user/update/password", params);
}
//获取手机短信验证码
export function mobileCodeApi(params) {
    return Request.http.post("/gl/user/mobile/code", params);
}
//验证手机号码并且绑定
export function mobilevalidateApi(params) {
    return Request.http.post("/gl/user/mobile/validate", params);
}
//检查邮箱是否存在
export function existEmailApi(params) {
    return Request.http.post("/gl/user/exist/email", params);
}
/** 
 * @todo 获取邮箱验证码
 * @method post
 * @param {Object} [email],[type]
 * @requires true
 */
export function EmailCodeApi(params) {
    return Request.http.post("/gl/user/email/code", params);
}
/** 
 * @todo 确认绑定邮箱
 * @method post
 * @param {Object} [email],[type],[code]
 * @requires true
 */
export function EmailvalidateApi(params) {
    return Request.http.post("/gl/user/email/validate", params);
}
/**
 * @todo 更改头像
 * @method post 
 * @param {object} avatar 头像
 * @requires true
 */
export function updateAvatarApi(params) {
    return Request.http.post("/gl/user/update/avatar", params);
}