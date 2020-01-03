<template>
    <div>
        11
        <props
            :name="name"
            :sync.sync="sync"
            height="500"
            url="1111"
            @change="change"
            ref="prop"
        />
    </div>
</template>
<script>
import Props from '@/components/tongxin/Props.vue';

export default {
    components: { Props },
    data() {
        return { name: '父组件传值name', sync: '父组件 sync' };
    },
    methods: {
        parentEvent(val) {
            console.log('子传父参数', val);
        },
        change() {
            console.log('拿到子组件实例', this.$refs.prop);
            this.name = '通过 $listeners 调用父组件方法改变父组件 name';
        },
    },
};
</script>
<style>
</style>
