<template>
    <div>
        11
        <button @click="change">
            点击子组件，触发父组件事件
        </button>
    </div>
</template>
<script>
export default {
    name: 'Emit',
    methods: {
        change() {
            this.$emit('title', { title: '子组件内容' });
        },
    },
};
</script>
<style>
</style>
