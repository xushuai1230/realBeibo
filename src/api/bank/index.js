import {
    Request
} from '../axios';
/**
 * @todo 查询用户已经绑定的银行卡
 * @method post
 * @param {String} token
 * @requires true
 */
export function user_bank_card_API(params) {
    return Request.http.post("/gl/userbankcard/list", params);
}
/**
 * @todo 验证银行卡是否存在
 * @param {name,cardNo}
 * @method post
 * @requires true
 */
export function validateUserbankcardApi(params) {
    return Request.http.post("/gl/userbankcard/validate", params);
}
/**
 * @todo 确定绑定银行卡
 * @param {name,cardNo}
 * @method post
 *
 */
export function bindcardUserbankcardApi(params) {
    return Request.http.post("/gl/userbankcard/bindcard", params);
}

/** 
 * @todo 解绑银行卡
 * @param {object} code	短信验证码 cardId 银行卡ID
 * @method post
 * @requires code,cardId
 */
export function unbindUserbankcardApi(params) {
    return Request.http.post("/gl/userbankcard/delete", params);
}
/** 
 * @todo 用户修改银行卡选中状态
 * @param {object}  cardId 银行卡ID
 * @method post
 * @requires token,cardId
 */
export function updateUserbankcardApi(params) {
    return Request.http.post("/gl/userbankcard/update", params);
}