<template>
    <div class="col" :class="[`col-${span}`, offset && `offset-${offset}`]" :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}">
        <div style="border: 1px solid red; height: 100%">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'wheel-col',
    props: {
        span: {
            type: [Number, String]
        },
        offset: {
            type: [Number, String]
        }
    },
    data() {
        return {
            gutter: 0
        }
    }
}
</script>
<style lang="scss" scoped>
.col {
    height: 50px;
    width: 50%;
    $class: col-;

    @for $n from 1 through 24 {
        &.#{$class}#{$n} {
            width: $n / 24 * 100%;
        }
    }

    $class: offset-;

    @for $n from 1 through 24 {
        &.#{$class}#{$n} {
            margin-left: $n / 24 * 100%;
        }
    }
}
</style>