/* eslint-disable no-unused-expressions */
import Vue from 'vue';
// import fps from 'fps-indicator';
import ElementUI from 'element-ui';
import CompleteProgress from '@/plugins/CompleteProgress';
import router from '@/router/index';
import App from './App.vue';
import store from './store';
import 'nprogress/nprogress.css';
import '@/icons';
import 'element-ui/lib/theme-chalk/index.css';

if (!window.CONFIG.data) {
    window.CONFIG.data = process.env.VUE_APP_URL;
}

if (process.env.NODE_ENV === 'development') {
    import('../examples/index');
}


// fps({
//     position: 'top-right',
//     style: `
//     font-size: 24px;
//   `,
// });
Vue.use(ElementUI);
Vue.use(CompleteProgress);
Vue.config.productionTip = false;
window.vm = new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
