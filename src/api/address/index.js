import {
    Request
} from '../axios';

/**
 * @todo 获取我的收货地址
 * @method post
 * @param {String} token
 * @requires true
 */
export function get_adress_API(params) {
    return Request.http.post("/gl/adress/list", params);
}

/**
 * @todo 获取省级列表
 * @method post
 * @param {}
 * @requires true
 */
export function get_adress_province_API(params) {
    return Request.http.post("/gl/adress/province/list", params);
}
/**
 * @todo 获取城市列表
 * @method post 
 * @param {} provinceId 省份id
 * @requires true
 */
export function get_adress_city_API(params) {
    return Request.http.post("/gl/adress/city/list", params);
}
/**
 * @todo 获取区县列表
 * @method post 
 * @param {} [cityId]
 * @requires true
 */
export function get_adress_area_API(params) {
    return Request.http.post("/gl/adress/area/list", params);
}
/**
 * @todo 添加收货地址
 * @method post 
 * @param {object} name {收货人姓名} mobile {收货人手机号}   cityId{城市ID} street {详细地址 }
 * @requires true
 */
export function add_adress_API(params) {
    return Request.http.post("/gl/adress/add", params);
}
/**
 * @todo 修改默认收货地址
 * @method post 
 * @param {object} id {地址id}
 * @requires true
 */
export function adress_default_API(params) {
    return Request.http.post("/gl/adress/def", params);
}
/**
 * @todo 删除收货地址
 * @method post 
 * @param {object} id {地址id}
 * @requires true
 */
export function adress_delete_API(params) {
    return Request.http.post("/gl/adress/delete", params);
}
/**
 * @todo 修改收货地址
 * @method post 
 * @param {object} name {收货人姓名} mobile {收货人手机号}   cityId{城市ID} street {详细地址 }
 * @requires true
 */
export function adress_update_API(params) {
    return Request.http.post("/gl/adress/update", params);
}