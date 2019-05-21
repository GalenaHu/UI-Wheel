<template>
    <div class="wrapper">
        <input type="text" :value=value :disabled=disabled :readonly=readonly :class="{error}" @change="$emit('change', $event)" @change="$emit('change', $event)" @input="$emit('input', $event)" @focus="$emit('focus', $event)" @blur="$emit('blur', $event)">
        <template v-if="error">
            <w-icon name="error" class="errorIcon"></w-icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>
<script>
import Icon from './icon.vue'
export default {
    name: 'wheel-input',
    components: {
        'w-icon': Icon
    },
    props: {
        value: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        error: {
            type: String
        }
    }
}
</script>
<style lang="scss" scoped>
// :root {
// --button-height: 32px;
// --font-size: 14px;
// --button-bg: white;
// --button-active-bg: #eee;
// --border-radius: 4px;
// --color: #333;
// --border-color: #999;
// --border-color-hover: #666;
// }
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$font-size: 14px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$error-red: #F1453D;

.wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;

    > :not(:last-child) {
        margin-right: 0.4em
    }

    >input {
        height: 32px;
        border: 1px solid $border-color;
        border-radius: 4px;
        padding: 0 8px;
        font-size: inherit;

        &:hover {
            border-color: $border-color-hover;
        }

        &:focus {
            box-shadow: inset 0 1px 3px $box-shadow-color;
            outline: none;
        }

        &[disabled],
        &[readonly] {
            border-color: #aaa;
            color: #999;
            background-color: #eee;
        }
    }

    &,
    .error {
        border-color: $error-red;
    }

    .errorIcon {
        fill: $error-red;
    }

    .errorMessage {
        color: $error-red;
    }
}
</style>