<template>
    <button class="w-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <w-icon class="icon" v-if="icon && !loading" :name="icon"></w-icon>
        <w-icon class="loading icon" v-if="loading" name="loading"></w-icon>
        <div class="button-content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
import Icon from './icon.vue'
export default {
    name: 'wheel-button',
    components: {
        'w-icon': Icon
    },
    props: {
        icon: {},
        loading: {
            type: Boolean,
            default: false
        },
        iconPosition: {
            type: String,
            default: 'left',
            //属性检查
            validator(value) {
                return !(value !== 'left' && value !== 'right')
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

@keyframes spin {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}

.w-button {
    font-size: v$font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    >.w-icon {
        margin-right: 0.3em;
    }

    >.button-content {
        line-height: $font-size;
    }

    &:hover {
        border-color: $border-color-hover;
    }

    &:active {
        background-color: $button-active-bg;
    }

    &:focus {
        outline: none;
    }

    >.w-icon {
        order: 1;
    }

    >.button-content {
        order: 2;
    }

    &.icon-right {
        >.w-icon {
            order: 2;
            margin-left: 0.3em;
            margin-right: 0;
        }

        >.button-content {
            order: 1;
        }
    }
}

.loading {
    animation: spin 1s infinite linear;
}
</style>