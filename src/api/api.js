import axios from 'axios';

let base = '';
let host = 'http://localhost:8080/api/rest';
// var rootIP = process.env.API_ROOT;
// 真实环境时，禁掉mock，请求真实后台地址
export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getList = params => { return axios.get(host + `/user/queryAllUser`); };

export const getList1 = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getList2 = params => { return axios.get(`/user/queryAllUser`); };
