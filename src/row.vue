<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'wheel-row',
    props: {
        gutter: {
            type: [Number, String]
        },
        align: {
            type: String,
            validator(value) {
                return ['left', 'center', 'right'].includes(value)
            }
        }
    },
    mounted() {
        this.$children.forEach((vm) => {
            vm.gutter = this.gutter
        })
    },
    computed: {
        rowStyle() {
            return { marginLeft: -this.gutter / 2 + 'px', marginRight: -this.gutter / 2 + 'px' }
        },
        rowClass() {
            return [this.align && `align-${this.align}`]
        }
    }
}
</script>
<style lang="scss" scoped>
.row {
    display: flex;
    flex-wrap: wrap;

    &.align-left {
        justify-content: flex-start;
    }

    &.align-center {
        justify-content: center;
    }

    &.align-right {
        justify-content: flex-end;
    }
}
</style>