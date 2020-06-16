/*
封装一个request请求模块
*/
import axios from 'axios'
// import store from '@/store'
// 同过create方法复制一个axios
const requset = axios.create({

})
// 添加一个请求拦截器
requset.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 添加一个相应拦截器
requset.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})
export default requset
