import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
  baseURL: 'http://localhost:8090/'
})

// 给http请求添加拦截器，用于添加用户信息token请求头
http.interceptors.request.use(config => {
  if (localStorage.token || sessionStorage.token) {
    config.headers.Authorization = 'Bearer ' + (localStorage.token || '')
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 给http响应添加拦截器，用于处理错误信息
http.interceptors.response.use(res => {
  Vue.prototype.$message({
    type: 'success',
    message: res.data.message
  })
  return res
}, err => {
  if (err.response.data.message) {
    console.log(err.response.data.message)
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
    if (err.response.status === 401) {
      router.push('/login')
    }
  }
  return Promise.reject(err)
})

export default http