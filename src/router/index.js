import Vue from 'vue';
import VueRouter from 'vue-router';
import progress from 'nprogress';

import Home from '@/views/Home.vue';
import Bar from '@/views/Bar.vue';
import Foo from '@/views/Foo.vue';
import Route from '@/views/Route.vue';
import Watch from '@/views/Watch.vue';
import TongXinEmit from '@/views/TongXinEmit.vue';
import TongXinProps from '@/views/TongXinProps.vue';
import WatchTest from '@/views/WatchTest.vue';
import Freeze from '@/views/Freeze.vue';
import Dynamic from '@/views/Dynamic.vue';
import Directive from '@/views/Directive.vue';
import VueAttribute from '@/views/VueAttribute.vue';
import Slot from '@/views/Slot.vue';
import Svg from '@/views/Svg.vue';
import TestPlugin from '@/views/TestPlugin.vue';
import Websocket from '@/views/Websocket.vue';
import Cors from '@/views/Cors.vue';
import ScrollBehavior from './ScrollBehavior';
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
        { path: '/cors', component: Cors },
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar, meta: { scrollToTop: true } },
        { path: '/route', component: Route },
        { path: '/watch', component: Watch },
        { path: '/tongxinemit', component: TongXinEmit },
        { path: '/TongXinProps', component: TongXinProps },
        { path: '/Dynamic', component: Dynamic },
        { path: '/Freeze', component: Freeze },
        { path: '/Svg', component: Svg },
        { path: '/Directive', component: Directive },
        { path: '/VueAttribute', component: VueAttribute },
        { path: '/Slot', component: Slot },
        { path: '/TestPlugin', component: TestPlugin },
        { path: '/WatchTest', component: WatchTest },
        { path: '/Websocket', component: Websocket },
    ],
});
// 全局导航守卫
router.beforeEach((to, from, next) => {
    progress.start();
    next();
});
export default router;
