import {
    Request
} from '../axios';


// //获取首页数据概况
// export function dailyChartApi(params) {
//     return Request.http.post("/gl/proxy/report/daily/chart", params);
// }

// //获取首页游戏盈亏概况
// export function gameChartApi(params) {
//     return Request.http.post("/gl/proxy/report/game/chart", params);
// }

/**
 * @todo 最新存款会员
 * @method post
 * @param {object} page,size,proxyName
 * @requires true
 */

export function latestRecharge_API(params) {
    return Request.http.post('/proxy/latestRecharge', params,2);
}


/**
 * @todo 最新加入会员
 * @method post
 * @param {object} page,size,proxyName
 * @requires true
 */

export function latestRegister_API(params) {
    return Request.http.post('/proxy/latestRegister', params,2);
}



/**
 * @todo 新注册会员数
 * @method post
 * @param {}
 * @requires true
 */

export function newUserByHour_API(params) {
    return Request.http.post('/realtime/newUserByHour', params,2);
}


/**
 * @todo 在线用户数分时分布（登录会员数）
 * @method post
 * @param {}
 * @requires true
 */

export function online_API(params) {
    return Request.http.post('/realtime/online', params,2);
}
/**
 * @todo 活跃会员数
 * @method post
 * @param {}
 * @requires true
 */

export function actUserByHour_API(params) {
    return Request.http.post('/realtime/actUserByHour', params,2);
}



/**
 * @todo 基础信息
 * @method post
 * @param {}
 * @requires true
 */

export function basic_API(params) {
    return Request.http.post('/realtime/basic', params,2);
}



/**
 * @todo 充值金额分时分布(总存款)
 * @method post
 * @param {}
 * @requires true
 */

export function rechargeByHour_API(params) {
    return Request.http.post('/realtime/rechargeByHour', params,2);
}
/**
 * @todo 充值人数分时分布
 * @method post
 * @param {}
 * @requires true
 */

export function rechargeUserByHour_API(params) {
    return Request.http.post('/realtime/rechargeUserByHour', params,2);
}


/**
 * @todo 提现金额分时分布（总提款）
 * @method post
 * @param {}
 * @requires true
 */

export function withdrawByHour_API(params) {
    return Request.http.post('/realtime/withdrawByHour', params,2);
}



/**
 * @todo 提现人数分时分布
 * @method post
 * @param {}
 * @requires true
 */

export function withdrawUserByHour_API(params) {
    return Request.http.post('/realtime/withdrawUserByHour', params,2);
}
/**
 * @todo 总投注额分时分布
 * @method post
 * @param {}
 * @requires true
 */

export function bettingAmountByHour_API(params) {
    return Request.http.post('/realtime/bettingAmountByHour', params,2);
}


/**
 * @todo 佣金概况
 * @method post
 * @param {}
 * @requires true
 */

export function commission_API(params) {
    return Request.http.post('/proxy/commission', params,2);
}

/**
 * @todo 游戏盈亏汇总
 * @method post
 * @param {}
 * @requires true
 */

export function realtime_game_API(params) {
    return Request.http.post('/realtime/game', params,2);
}



/**
 * @todo 游戏盈亏汇总分时分布
 * @method post
 * @param {}
 * @requires true
 */

export function gameByTime_API(params) {
    return Request.http.post('/realtime/gameByTime', params,2);
}



