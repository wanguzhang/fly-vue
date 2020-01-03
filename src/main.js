import Vue from 'vue';
import App from './App.vue';
import store from './store';
import 'nprogress/nprogress.css';
import router from '@/router/index';
import CompleteProgress from '@/plugins/CompleteProgress';
import '@/icons';

Vue.use(CompleteProgress);
Vue.config.productionTip = false;
window.vm = new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
