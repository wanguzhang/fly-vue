<template>
    <div>
        11
        <emit @title="parentEvent" />
    </div>
</template>
<script>
import Emit from '@/components/tongxin/Emit.vue';

export default {
    components: { Emit },
    methods: {
        parentEvent(val) {
            console.log('子传父参数', val);
        },
    },
};
</script>
<style>
</style>
