<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'w-body',
    inject: ['eventBus']
}
</script>
<style lang="scss" scoped></style>