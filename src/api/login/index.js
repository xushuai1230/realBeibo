import { Request } from '../axios';


/**
 *   @todo 代理登录
 *   @param {username,password}
 *   @method post
 *   @type {string}
 *
 */
export function login_Api(params) {
    return Request.http.post("/gl/login/username", params);
}

/**
 *   @todo 手机短信登录
 *   @param {object} [mobile],[code]
 *   @method post
 *   @type {string}
 *
 */
export function tel_login_Api(params) {
    return Request.http.post("/gl/login/mobile", params);
}
/**
 *   @todo 获取手机短信验证码
 *   @param {object} [mobile]
 *   @method post
 *   @type {string}
 *
 */
export function tel_code_Api(params) {
    return Request.http.post("/gl/login/code", params);
}


//获取用户绑定信息
export function BindInfoApi(params) {
    return Request.http.post("/gl/user/bindinfo", params);
}
//或者用户绑定信息
export function CodeApi(params) {
    return Request.http.post("/gl/user/find/password", params);
}

//验证验证码
export function valiCodeApi(params) {
    return Request.http.post('/gl/user/find/password/validate', params);
}