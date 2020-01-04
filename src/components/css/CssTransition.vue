<template>
    <div>
        <div class="box demo1">
            11
        </div>
        <div class="box demo2">
            11
        </div>
        <div class="box demo3" />
    </div>
</template>
<script>
export default {
    name: 'CssTransition',
};
</script>
<style lang="scss" scoped>
.box {
    width:100px;
    height: 100px;
    background-color: black;
}
.demo1{
    transition-property: transform;
    // transition-delay: 1s;
    transition-timing-function: ease;
    transition-duration: 1s;
    &:hover{
        transform: rotate(75deg);
    }
}
.demo2 {
    background-color: red;
    height: 200px;
    width: 200px;
    &:hover{
        animation: move 1s ease;
    }
}
@keyframes move {
    100%{
        transform: translateX(400px);
    }
}
.demo3{
    &:hover{
    animation: jump 1s ease;
    }
}
@keyframes jump {
    0%{
        transform: translateY(10px);
    }

    20%{
        transform: translateY(30px);
    }


    60%{
        transform: translateY(120px);
    }


    100%{
        transform: translateY(300px);
    }
}
</style>
