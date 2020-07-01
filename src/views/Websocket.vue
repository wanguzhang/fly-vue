<template>
    <div>
        <h2>实时数据</h2>
        <div ref="data">
            默认数据
        </div>
    </div>
</template>
<script>
export default {
    name: 'Websocket',
    data() {
        return {
            websocket: null,
        };
    },
    created() {
        this.websocket = new WebSocket('ws://localhost:10033/ws/data');
        this.websocket.onmessage = (ev) => {
            this.$refs.data.textContent = ev.data;
        };
    },
};
</script>
<style>
</style>
