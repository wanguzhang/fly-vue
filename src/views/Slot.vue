<template>
    <div>
        <NavigationLink url="/css/css2">
            <template v-slot:one="data">
                1
                {{ data.user.firstName }}<br>
                {{ data.user.lastName }}
            </template>
            {{ name }}
            <template v-slot:three>
                3
            </template>
        </NavigationLink>
        <!-- <NavigationLink url="/css/css1" /> -->
    </div>
</template>
<script>
import NavigationLink from '@/components/slot/NavigationLink.vue';

export default {
    components: { NavigationLink },
    data() {
        return { name: '张攀钦123' };
    },
};
</script>
<style>
</style>
