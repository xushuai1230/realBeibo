import {
    Request
} from '../axios';


/**
 * @method post
 * @param {object} materialType,materialSize
 * @type {number}
 * @todo 获取推广素材
 *
 */
export function materialApi(params) {
    return Request.http.post("/gl/proxy/list/material", params);
}
/** 
 * @todo 获取推广域名
 * @param {object} token
 * @method post
 */
export function proxyInfoApi(params) {
    return Request.http.post("/gl/proxy/list/domain", params);
}
/** 
 * @todo 添加代理域名
 * @param {object} token name
 * @method post
 * @requires token,name
 */
export function add_domain_Api(params) {
    return Request.http.post("/gl/proxy/add/domain", params);
}

/** 
 * @todo 修改域名编号（ 名称）

 * @param {object} [domainId],[name]
 * @method post
 * @requires token,name
 */
export function update_domain_Api(params) {
    return Request.http.post("/gl/proxy/update/domain", params);
}

