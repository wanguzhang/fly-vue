<template>
    <div>
        首页
        <div>{{ addCount }}</div>
        <div>{{ addCount1 }}</div>
        <button @click="add1(1)">
            点击加
        </button>
    </div>
</template>
<script>
import progress from 'nprogress';
import { mapMutations, mapActions } from 'vuex';

export default {
    beforeRouteEnter(from, to, next) {
        next(() => {
            progress.done();
        });
    },
    computed: {
        addCount() {
            return this.$store.state.count + 1;
        },
        addCount1() {
            return this.$store.getters.countAdd1;
        },
    },
    methods: {
        addCountEvent() {
            this.$store.state.count = this.$store.state.count + 1;
            return this.$store.state.count;
        },
        ...mapMutations(['Add_Count']),
        ...mapActions({ add1: 'Add_Count' }),
    },
};
</script>
<style>
</style>
