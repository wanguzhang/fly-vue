<template>
    <svg
        :class="svgClass"
        aria-hidden="true"
    >
        <use :xlink:href="iconName" />
    </svg>
</template>

<script>
export default {
    name: 'IconSvg',
    props: {
        iconClass: {
            type: String,
            required: true,
        },
        svgClass: {
            type: String,
            default: 'svg-icon',
        },
    },
    computed: {
        iconName() {
            return `#icon-${this.iconClass}`;
        },
    },
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
