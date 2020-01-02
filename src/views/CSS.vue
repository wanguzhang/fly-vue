<template>
    <div>
        <router-link to="/">
            首页
        </router-link>
        <router-view />
        <router-view name="b" />
    </div>
</template>
