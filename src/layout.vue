<template>
    <div class="w-layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'wheel-layout',
    data() {
        return {
            layoutClass: {
                hasSider: false
            }
        }
    },
    mounted() {
        this.$children.forEach((vm) => {
            if (vm.$options.name === 'wheel-sider') {
                this.layoutClass.hasSider = true
            }
        })
    }
}
</script>
<style lang="scss" scoped>
.w-layout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    &.hasSider {
        flex-direction: row;
    }
}
</style>