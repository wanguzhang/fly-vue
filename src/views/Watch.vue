<template>
    <div>
        深入监听：{{ obj1.a }}

        没有深入监听：{{ obj2.c }}

        <button @click="changea">
            改变 obj1.a
        </button>
        <button @click="changec">
            改变 obj2.c
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            obj1: { a: 1, b: 1 },
            obj2: { c: 1, d: 1 },
        };
    },
    created() {
    },
    watch: {
        obj1: {
            immediate: true,
            deep: true,
            // handler(newaVal, oldVal) {
            //     console.log('showObje-newaVal', newaVal);
            //     console.log('showObje-oldVal', oldVal);
            // },
            handler: 'showObje',
        },
        obj2: {
            immediate: true,
            deep: true,
            handler: 'showObj2',
        },
    },
    methods: {
        showObje(newaVal, oldVal) {
            // new old 里面数值是一样的
            console.log('showObje-newaVal', newaVal);
            console.log('showObje-oldVal', oldVal);
        },
        showObj2(val) {
            console.log('showObj2', val);
        },
        changea() {
            this.obj1.a += 1;
        },
        changec() {
            this.obj2.c += 1;
        },
    },
};
</script>
<style>
</style>
