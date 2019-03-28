import {
    Request
} from '../api';


//获取下级代理
export function proxyListApi(params) {
    return Request.http.post("/gl/proxy/list/proxy", params);
}

/**
 * @method post
 * @param {startDate,endDate,username,status,orderField,orderType,page,size}
 * @requires startDate,endDate,orderField,orderType,page,size
 * @todo 获取下级会员列表
 *
 */
export function userListApi(params) {
    return Request.http.post("/gl/proxy/list/user", params);
}
//查询会员佣金详情
export function detailListApi(params) {
    return Request.http.post("/gl/proxy/report/commission/detail", params);
}
/**
 * @param {}
 * @todo 获取代理上分信息
 * @requires {}
 * @method post
 *
 */
export function infoListApi(params) {
    return Request.http.post("/gl/proxy/credit/info", params);
}
//提交上分操作
export function submitCreditApi(params) {
    return Request.http.post("/gl/proxy/credit/submit", params);
}

/**
 * @todo 新建下级代理
 * @method post
 * @param {object} username password
 * @requires username,password
 */

export function add_proxy_API(params) {
    return Request.http.post('/gl/proxy/add', params);
}

/**
 * @todo 查询自己创建的下级列表
 * @method post
 * @param {object} [type],[page],[size]
 * @requires true
 */

export function created_list_proxy_API(params) {
    return Request.http.post('/gl/proxy/list/created', params);
}