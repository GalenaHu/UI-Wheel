<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
        if (!['span', 'offset'].includes(key)) {
            valid = false
        }
    })
    return valid
}
export default {
    name: 'wheel-col',
    props: {
        span: {
            type: [Number, String]
        },
        offset: {
            type: [Number, String]
        },
        ipad: {
            type: Object,
            validator
        },
        narrowpc: {
            type: Object,
            validator
        },
        pc: {
            type: Object,
            validator
        },
        widepc: {
            type: Object,
            validator
        }
    },
    data() {
        return {
            gutter: 0,
        }
    },
    methods: {
        createClasses(obj, str = '') {
            if (!obj) { return [] }
            let array = []
            if (obj.span) {
                array.push(`col-${str}${obj.span}`)
            }
            if (obj.offset) {
                array.push(`offset-${str}${obj.offset}`)
            }
            return array
        }
    },
    computed: {
        colClass() {
            let { span, offset, ipad, narrowpc, pc, widepc } = this

            return [
                ...this.createClasses({ span, offset }),
                ...this.createClasses(ipad, 'ipad-'),
                ...this.createClasses(narrowpc, 'narrowpc-'),
                ...this.createClasses(pc, 'pc-'),
                ...this.createClasses(widepc, 'widepc-'),
            ]
        },
        colStyle() {
            return {
                paddingLeft: this.gutter / 2 + 'px',
                paddingRight: this.gutter / 2 + 'px'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.col {
    height: 50px;
    $class-prefix: col-;

    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
            width: ($n / 24) * 100%;
        }
    }

    $class-prefix: offset-;

    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
            margin-left: ($n / 24) * 100%;
        }
    }

    @media (min-width: 577px) {
        $class-prefix: col-ipad-;

        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }

        $class-prefix: offset-ipad-;

        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }

    @media (min-width: 769px) {
        $class-prefix: col-narrowpc-;

        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }

        $class-prefix: offset-narrowpc-;

        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }

    @media (min-width: 993px) {
        $class-prefix: col-pc-;

        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }

        $class-prefix: offset-pc-;

        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }

    @media (min-width: 1200px) {
        $class-prefix: col-widepc-;

        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }

        $class-prefix: offset-widepc-;

        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
}
</style>