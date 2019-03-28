// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/components/index'
import store from './vuex'
import VCharts from 'v-charts'
import '@/filter';
import {
    install
}
from 'element-ui/src/index';
install(Vue);
import '@/theme-chalk/src/index.scss';
import '@/theme-chalk/common/style.scss';
import './style/index.scss';
import echarts from 'echarts';
import common from './common/index.js'

Vue.use(VCharts)

Vue.config.silent = true
Vue.config.productionTip = false


Vue.prototype.$echarts = echarts 
Vue.prototype.$common = common
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})