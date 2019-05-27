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
<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;

.w-button-group {
    display: inline-flex;
    vertical-align: middle;

    >.w-button {
        border-radius: 0;

        &:not(:first-child) {
            margin-left: -1px;
        }

        &:first-child {
            border-radius: $border-radius 0 0 $border-radius;
        }

        &:last-child {
            border-radius: 0 $border-radius $border-radius 0;
        }

        &:hover {
            z-index: 1;
        }
    }
}
</style>