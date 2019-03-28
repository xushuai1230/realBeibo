import {
    Request
} from '../axios';

/** 
 * @todo 找回密码时获取绑定信息的接口
 * @param {any}   username{账号} code{验证码} uuid {图片验证码唯一ID}
 * @method post

*/
export function User_Forget_Info_Api(params) {
    return Request.http.post("/gl/forget/info", params);
}
/** 
 * @todo 密码找回验证码验证接口
 * @param {any}   username{账号} type{找回方式 } uuid {图片验证码唯一ID} code 验证码 imgCode 图片验证码
 * @method post

*/
export function User_validate_Api(params) {
    return Request.http.post("/gl/forget/validate", params);
}
/** 
 * @todo 密码找回获取验证码接口
 * @param {any}   username{账号} type{找回方式 } uuid {图片验证码唯一ID}
 * @method post

*/
export function forget_code_Api(params) {
    return Request.http.post("/gl/forget/code", params);
}
/** 
 * @todo 密码找回获取验证码接口
 * @param {any}   username{账号} type{找回方式 } uuid {图片验证码唯一ID}
 * @method post

*/

/**
 * @todo 确认修改密码
 * @method post
 * @param {username,type,code}
 */
export function ResetPassApi(params) {
    return Request.http.post('/gl/forget/reset/password', params);
}