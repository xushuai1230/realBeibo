import {
    Request
} from '../api';


/**
 * @method post
 * @param {startDate,endDate}
 * @todo 获取红利返水 or 获取财务总报表  每日输赢报表
 */
export function totaldailyAPI(params) {
    return Request.http.post("/gl/proxy/report/daily", params);
}
/**
 * @method post
 * @param {startDate,endDate}
 * @todo 获取游戏输赢报表
 */
export function gamedailyAPI(params) {
    return Request.http.post("/gl/proxy/report/game", params);
}
//获取佣金报表
export function commissiondailyAPI(params) {
    return Request.http.post("/gl/proxy/report/commission", params);
}
/**
 * @method post
 * @param {startTime,endTime,username,page,size}
 * @todo 获取上分记录
 */
export function creditListAPI(params) {
    return Request.http.post("/gl/proxy/credit/list", params);
}