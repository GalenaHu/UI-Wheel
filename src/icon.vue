<template>
    <svg aria-hidden="true" class="w-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
export default {
    props: ['name']
}
</script>
<style>
.w-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
    overflow: hidden;
}
</style>