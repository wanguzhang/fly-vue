<template>
    <div>
        <button @click="change">
            动态组件切换
        </button>
        <!-- <transition> -->
        <keep-alive>
            <component :is="currentTabComponent" />
        </keep-alive>
        <!-- </transition> -->
    </div>
</template>
<script>
import TabA from '@/components/dynamic/a.vue';
import TabB from '@/components/dynamic/b.vue';
import TabC from '@/components/dynamic/c.vue';

export default {
    components: { TabA, TabB, TabC },
    data() {
        return { currentTab: 'a', data: ['a', 'b', 'c'] };
    },
    computed: {
        currentTabComponent() {
            return `tab-${this.currentTab}`;
        },
    },
    methods: {
        change() {
            this.currentTab = this.data[Math.floor(Math.random() * 3)];
        },
    },
};
</script>
<style>
</style>
