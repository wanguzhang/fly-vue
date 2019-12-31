import Vue from 'vue';
import VueRouter from 'vue-router';
import progress from 'nprogress';
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
router.beforeEach((to, from, next) => {
    progress.start();
    next();
});
export default router;
