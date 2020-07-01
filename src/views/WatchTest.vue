<template>
    <div>
        <div>{{ msg }}</div>
        <div>{{ obj.name }}</div>
        <button @click="plus">
            加以
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: '默认消息',
            obj: {
                name: 1,
            },
        };
    },
    methods: {
        plus() {
            this.obj.name = this.obj.name + 1;
        },
    },
    watch: {
        obj: {
            handler(newVal, oldVal) {
                console.log(`原来的值:${oldVal},新的值:${newVal}`);
            },
            deep: true,
        },
    },
};
</script>
<style>
</style>
