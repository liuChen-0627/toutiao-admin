/*
 * @Author: your name
 * @Date: 2020-12-27 15:03:46
 * @LastEditTime: 2020-12-27 15:31:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \toutiao-admin\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
