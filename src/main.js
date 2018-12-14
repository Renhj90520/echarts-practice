// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'normalize.css';
import * as echarts from 'echarts';
import 'echarts-gl';
Vue.config.productionTip = false;

Object.defineProperty(Vue.prototype, '$echarts', { value: echarts });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
