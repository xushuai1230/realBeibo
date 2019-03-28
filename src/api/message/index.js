import {
    Request
} from '../axios';


/**
 * @todo 获取系统公告列表
 * @method post 
 * @param {object}   page{页码} size{单页记录条数}
 * @requires all
 */
export function system_notice_Api(params) {
    return Request.http.post("/gl/system/notice/list", params);
}

 /**
  * @todo 获取用户消息通知
  * @param {page,size}
  * @returns {Object}
  * @method post
  */
//查询用户消息通知
export function usernoticeApi(params) {
  return Request.http.post("/gl/user/notice/list", params);
}
/**
 * @export 
 * @todo 全部已读
 * @param {*}
 * @returns
 */
export function notice_allread_Api(params) {
  return Request.http.post("/gl/system/notice/allread", params);
}
/**
 * @export 
 * @todo 删除系统消息的接口
 * @param {*} [noticeId]
 * @returns
 */
export function delete_notice_Api(params) {
  return Request.http.post("/gl/user/notice/delete", params);
}
/**
 * @export 
 * @todo 获取用户系统消息详情的接口
 * @param {*} [noticeId]
 * @returns
 */
export function notice_detail_Api(params) {
  return Request.http.post("/gl/system/notice/detail", params);
}
/**
 * @export 
 * @todo 阅读系统公告
 * @param {*} [id]
 * @returns
 */
export function read_notice_Api(params) {
  return Request.http.post("/gl/system/notice/read", params);
}