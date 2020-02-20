<template>
    <div>asdfasdfas</div>
</template>
<script>
import progress from 'nprogress';

export default {
    beforeRouteEnter(from, to, next) {
        next(() => {
            progress.done();
        });
    },
};
</script>
<style>
</style>
