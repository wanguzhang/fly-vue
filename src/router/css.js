import CSS from '@/views/CSS.vue';

import B from '@/components/B.vue';

const arrCss = require.context('@/components/css', false, /\.vue$/);
const cssChildren = [];
arrCss.keys().forEach((component, index) => {
    const cssComponentEntity = arrCss(component).default;
    cssChildren.push({
        path: cssComponentEntity.name.toLowerCase(),
        components: {
            default: cssComponentEntity,
            b: B,
        },
        alias: `${cssComponentEntity.name}${index}`,
    });
});
export default {
    path: '/css',
    name: 'css',
    component: CSS,
    children: cssChildren,
    alias: '/foo',
};
