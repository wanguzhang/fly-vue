<template>
    <div>
        <router-link
            v-if="transition"
            to="/"
        >
            首页
        </router-link>
        <router-view />
        <router-view
            name="b"
            v-if="transition"
        />
    </div>
</template>
<script>
export default {
    computed: {
        transition() {
            console.log(this.$route.path);
            const path = this.$route.path.toLowerCase();
            return !path.includes('transition');
        },
    },
};
</script>
