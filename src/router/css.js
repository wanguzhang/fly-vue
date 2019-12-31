import CSS from '@/views/CSS.vue';

const arrCss = require.context('@/components/css', false, /\.vue$/);
const cssChildren = [];
arrCss.keys().forEach((component) => {
    const cssComponentEntity = arrCss(component).default;
    cssChildren.push({ path: cssComponentEntity.name, component: cssComponentEntity });
});
export default {
    path: '/css', name: 'css', component: CSS, children: cssChildren,
};
