import router from '@/router/index';


const arrCss = require.context('./', true, /\.vue$/);
const dynamicComponent = [];
arrCss.keys().forEach((component) => {
    const obj = arrCss(component).default;
    // ./../vue/../vue/./vue.vue  path=vue/vue/vue
    const replacePath = component.replace(/(\.+\/)|(\.vue)/g, '').toLowerCase();
    const path = `/examples/${replacePath}`;
    const tempComponent = {
        name: obj.name,
        path,
        component: obj,
    };
    dynamicComponent.push(tempComponent);
});
router.addRoutes(dynamicComponent);
export default router;
