<template>
    <div>
        第一行：<div>
            <slot
                name="one"
                :user="user1"
            />
        </div>
        <br>
        第二行：<div><slot>跳转</slot></div>
        <br>
        第三行：<div><slot name="three" /></div>
    </div>
</template>
<script>
export default {
    props: {
        url: {
            type: String,
            default: '',
        },
    },
    data() {
        return { user1: { lastName: '攀钦', firstName: '张' } };
    },
};
</script>
<style>
</style>
