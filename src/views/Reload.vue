<template>
    <div>
        1111
        <button @click="reload" />
    </div>
</template>
<script>
export default {
    methods: {
        reload() {
            const { fullPath } = this.$route;
            this.$router.replace({
                path: `/redirect${fullPath}`,
            });
        },
    },
};
</script>
<style>
</style>
