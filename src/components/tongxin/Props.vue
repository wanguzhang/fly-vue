<template>
    <div>
        name:{{ name }}<br>

        父组件定义 sync ：{{ this.$attrs.sync }}<br>
        attrs:{{ this.$attrs }}<br>

        <button @click="changNameFromParent">
            改变name 值
        </button><br>

        <button @click="changNameFromSon">
            在子组件改变父组件数值
        </button>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: '默认值',
        },
    },
    data() {
        return { son: 'son' };
    },
    mounted() {
        console.log(this.$attrs);
    },
    methods: {
        changNameFromParent() {
            console.log('$listeners', this.$listeners);
            this.$listeners.change();
        },
        changNameFromSon() {
            this.$emit('update:sync', '子组件改变的 sync');
        },
    },
};
</script>
<style>
</style>
