<template>
    <div>
        {{ data.a }}<br>
        {{ data.b }}<br>
        <button @click="change">
            改变A 的值
        </button>
    </div>
</template>
<script>
// const data = Object.freeze(Object.assign({}, { a: 1, b: 2 }));
const data = { a: 1, b: 2 };
export default {
    data() {
        return { data };
    },
    methods: {
        change() {
            console.log(this.data);
            this.data.a = Math.random();
        },
    },
};
</script>
<style>
</style>
