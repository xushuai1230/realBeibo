import {
    Request
} from '../api';
//埋点
export function maidianAPI(params) {
    return Request.http.post("", params, 1);
}