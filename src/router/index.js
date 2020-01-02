import Vue from 'vue';
import VueRouter from 'vue-router';
import progress from 'nprogress';
import ScrollBehavior from './ScrollBehavior';
import Home from '@/views/Home.vue';
import Bar from '@/views/Bar.vue';
import Foo from '@/views/Foo.vue';
import Route from '@/views/Route.vue';
import CSS from './css';

const Hello = () => import(/* webpackChunkName: "group-foo" */ '@/views/Hello.vue');
Vue.use(VueRouter);
function dynamicPropsFn() {
    const now = new Date();
    return {
        name: `${now.getFullYear()}`,
        years: 11,
    };
}
const router = new VueRouter({
    scrollBehavior: ScrollBehavior,
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', name: 'home', component: Home },
        CSS,
        { path: '/hello/:years', component: Hello, props: dynamicPropsFn },
        { path: '/', component: Home },
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar, meta: { scrollToTop: true } },
        { path: '/route', component: Route },
    ],
});
// 全局导航守卫
router.beforeEach((to, from, next) => {
    progress.start();
    next();
});
export default router;
