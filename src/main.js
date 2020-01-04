import Vue from 'vue';
// import fps from 'fps-indicator';
import App from './App.vue';
import store from './store';
import 'nprogress/nprogress.css';
import router from '@/router/index';
import CompleteProgress from '@/plugins/CompleteProgress';
import '@/icons';

// fps({
//     position: 'top-right',
//     style: `
//     font-size: 24px;
//   `,
// });
Vue.use(CompleteProgress);
Vue.config.productionTip = false;
window.vm = new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
