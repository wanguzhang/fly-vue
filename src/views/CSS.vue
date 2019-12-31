<template>
    <div>
        <router-link to="/">
            首页
        </router-link>
        <router-view />
        <router-view name="b" />
    </div>
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
