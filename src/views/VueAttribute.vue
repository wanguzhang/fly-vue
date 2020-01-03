<template>
    <div id="111">
        1111<br>
        data: {{ this.$data }}
        <span ref="s1" />
        <button @click="$emit('test','sdfas')">
            测试事件
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return { a: 2 };
    },
    mounted() {
        console.log('data', this.$data);
        console.log('el', this.$el.id);
        console.log('options', this.$options);
        console.log('refs:', this.$refs);
        this.$on('test', (msg) => {
            console.log(msg);
        });
    },
};
</script>
<style>
</style>
