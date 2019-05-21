<template>
    <svg aria-hidden="true" class="w-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
import './svg.js'
export default {
    props: ['name']
}
</script>
<style scoped>
.w-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
    overflow: hidden;
}
</style>