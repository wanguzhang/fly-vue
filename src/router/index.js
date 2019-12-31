import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import CSS from './css';

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', name: 'home', component: Home },
        CSS,
    ],
});
export default router;
