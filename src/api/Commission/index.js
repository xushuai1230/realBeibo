import {
    Request
} from '../axios';


/**
 * @method post
 * @todo 获取用户提现信息
 * @param {}
 * @returns {object}
 *
 */
export function userWithdrawAPI(params) {
    return Request.http.post("/gl/withdraw/info", params);
}
/**
 * @method post
 * @todo 提交提现申请
 * @param {name,cardNo,cardId,amount,code}
 * @requires amount
 *
 *
 */
export function submitWithdrawAPI(params) {
    return Request.http.post("/gl/withdraw/submit", params);
}
/**
 * @method post
 * @todo 查看资金明细
 * @returns {Object}
 * @param {orderType,startTime,endTime,status,page,size}
 *
 */
export function historyAPI(params) {
    return Request.http.post("/gl/balance/history", params);
}


/**
 *
 *
 * @export
 * @todo 
 * @param {*} [orderId]
 * @returns
 */
export function withdraw_deatil_API(params) {
    return Request.http.post("/gl/withdraw/detail", params);
}
