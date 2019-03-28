import axios from "axios";
import qs from "qs";
import md5 from 'js-md5';
import router from '@/router/index'
import {
  API_ROOT
} from './config.js';

export const Request = {};
// 响应拦截
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
axios.interceptors.response.use((response) => {
  if (response.data.code === 405) {
    alert('登录失效');
    router.push('/login');
    return;
  }
  // 这里返回的 response.data 是被 axios 包装过的一成，所以在这里抽取出来
  return response.data;
}, (error) => {
  return Promise.reject(error);
});
var request = options => {
  options.headers = options.headers || {}
  options.body = options.body || {};
  //参数格式化
  if (Object.prototype.toString.call(options.body) === "[object Object]") {
    options.body = qs.stringify(options.body);
  }
  return axios
    .request({
      headers: options.headers,
      url: options.action,
      method: options.method,
      data: options.body,
      params: options.params,
      emulateJSON: true
    })
    .then(response => {
      //请求结束
      return response;
    })
    .catch(e => {
      //抛出异常
      throw e;
    });
};
//http请求方式
const http = {};
["get", "post", "put", "delete"].forEach(method => {
  http[method] = (action,
    params,
    types,
    extra = {
      headers: {},
      loadig: false,
      includeToken: false
    }) => {
    method = method.toUpperCase();
    let api = API_ROOT
    if (types) {
      // http://proxy.aibet.com/api/gl/report/station
      if (types === 1) action = `http://proxy.aibet.com/api/gl/report/station`;
      if (types === 2) action = `http://proxy.aibet.com/api/gl/report/station` + action
    } else {
      action = api + action;
    }
    let header = types ? _setAxiosHeader(maid_Headers(params)) : Object.assign(_setAxiosHeader(_addSign()), extra.headers);
    if (method === "GET") {
      return request({
        action,
        params,
        method,
        headers: extra.headers,
        loading: extra.loading,
        includeToken: extra.includeToken
      });
    }
    // console.log(headers);
    return request({
      action,
      body: !types ? params : {},
      method,
      // headers: extra.headers,
      headers: header,
      loading: extra.loading,
      includeToken: extra.includeToken
    });
  };
});


function _addSign() {
  const timestamp = Date.parse(new Date());
  const signParams = [];
  signParams['device_id'] = '1.0';
  signParams['os_type'] = 0;
  signParams['timestamp'] = timestamp;
  signParams['version'] = '1.0';
  const urlStr = urlEncode(signParams).substr(1);
  if (JSON.parse(localStorage.getItem('profile'))) {
    signParams['token'] = JSON.parse(localStorage.getItem('profile')).token
    signParams['uid'] = JSON.parse(localStorage.getItem('profile')).id
  } else {
    signParams['token'] = ''
    signParams['uid'] = ''
  }
  signParams['sign'] = md5(urlStr + 'global');
  return signParams;
}

function _setAxiosHeader(headers) {
  // const axiosCommom = axios.defaults.headers.common || {};
  const axiosCommom = {};
  return Object.assign(axiosCommom, headers);
}

function urlEncode(param, key, encode) {
  if (param == null) return '';
  var paramStr = '';
  var t = typeof (param);
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
  } else {
    for (var i in param) {
      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
      paramStr += urlEncode(param[i], k, encode);
    }
  }
  return paramStr;
}

Request.http = http;

function SplicingStr(arr) {
  let str = '';
  if (arr.length !== 0) {
    for (let i in arr) {
      if (typeof arr[i] == 'object') {
        arr[i] = JSON.stringify(arr[i]);
      }
      str += (i + '=' + arr[i]);
    }
  }
  return str;
}

function maid_Headers(params) {
  const signParams = {};
  const timestamp = new Date().getTime();
  signParams['appid'] = 1;
  signParams['event'] = params.event;
  signParams['metrics'] = params.metrics;
  signParams['platform'] = 1;
  signParams['ts'] = timestamp;
  signParams['uuid'] = timestamp;
  signParams['version'] = 1;
  const urlStr = '0a74991153ad7b57' + SplicingStr(signParams);
  signParams['sign'] = md5(urlStr);
  return signParams;
}