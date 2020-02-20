<template>
    <div>
        asdfasdfas
        <BB />
    </div>
</template>
<script>
import progress from 'nprogress';
import BB from '@/components/B.vue';

export default {
    components: { BB },
    beforeRouteEnter(from, to, next) {
        next(() => {
            progress.done();
        });
    },
};
</script>
<style>
</style>
