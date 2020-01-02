<template>
    <div>
        <h2 class="hello">
            Hello <br>[组件 props.name] {{ name }} <br> [$attrs] {{ $attrs }} <br> [this.$route.params] {{ this.$route.params }}
        </h2>
        <button @click="count++">
            保存
        </button>
        <router-link to="/">
            跳转首页
        </router-link>
        <router-link :to="`/hello/${count}`">
            更换参数
        </router-link>
    </div>
</template>

<script>

export default {
    props: {
        name: {
            type: String,
            default: 'Vue!',
        },
    },
    data() {
        return { count: 1 };
    },
    watch: {
    // 如果路由有变化，会再次执行该方法
        '$route.params': (e) => {
            console.log('watch 监听：', e);
        },
    },
    // 组件还没有被创建
    beforeRouteEnter(from, to, next) {
        window.alert('组件激活调用');
        // next 中的回调，等渲染之后再调用
        next((vm) => {
            console.log('beforeRouteEnter:', vm.name);
        });
    },
    beforeRouteUpdate(to, from, next) {
        console.log('组件复用');
        next();
    },
    beforeRouteLeave(to, from, next) {
        if (this.count % 2 === 0) {
            next();
        } else {
            window.alert('请点击保存按钮之后推出');
            next(false);
        }
    },
};
</script>
