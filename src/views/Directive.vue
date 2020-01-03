<template>
    <div v-pin="'red'">
        1111
    </div>
</template>
<script>
export default {
    directives: {
        pin: {
            bind(el, binding, vnode, oldVnode) {
                const color = binding.value;
                el.style.color = color;
                console.log('el:', el);
                console.log('binding:', binding);
                console.log('vnode:', vnode);
                console.log('oldVnode:', oldVnode);
            },
        },
    },
};
</script>
<style>
</style>
