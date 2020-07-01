<template>
    <div>
        <button @click="request">
            请求后台接口
        </button>
        <div>
            配置文件中的内容: {{ data }}
        </div>
        <div
            class="content"
            ref="aa"
        >
            内容
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return window.CONFIG;
    },
    methods: {
        request() {
            axios.get('http://localhost:9099/api/cookie').then((data) => {
                this.$refs.aa.textContent = JSON.stringify(data);
            });
        },
    },
};
</script>

<style  scoped>
.content{
    background-color: red;
}
</style>
