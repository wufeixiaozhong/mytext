import request from '@/utils/request.js'
// 用户登录
export function login (data) {
  return request({
    url: '/api/user/login/',
    method: 'post',
    data
  })
}
// 获取验证码
export function code (data) {
  return request({
    url: 'http://localhost:8080/api/user/sendsms/',
    method: 'post',
    data
  })
}
