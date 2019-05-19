<template>
    <div class="w-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    mounted() {
        for (let node of this.$el.children) {
            let name = node.nodeName.toLowerCase()
            if (node.nodeName.toLowerCase() !== 'button') {
                console.warn(`w-button-group 的子元素应该都是button，而你写的是${name}，这回导致w-button-group 内的子元素样式异常`)
            }
        }
    }
}
</script>
<style lang="scss">
.w-button-group {
    display: inline-flex;
    vertical-align: middle;

    >.w-button {
        border-radius: 0;

        &:not(:first-child) {
            margin-left: -1px;
        }

        &:first-child {
            border-radius: var(--border-radius) 0 0 var(--border-radius);
        }

        &:last-child {
            border-radius: 0 var(--border-radius) var(--border-radius) 0;
        }

        &:hover {
            z-index: 1;
        }
    }
}
</style>