<template>
    <div class="toast">
        <slot v-if="!enableHTML" class="info"></slot>
        <div v-else v-html="$slots.default[0]" class="info"></div>
        <div v-if="closeButton" class="close" @click="onClickClose">
            {{closeButton.text}}
        </div>
    </div>
</template>
<script>
export default {
    name: 'wheel-toast',
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 500
        },
        closeButton: {
            type: Object,
            default: () => {
                return {
                    text: '关闭',
                    callback: undefined
                }
            }
        },
        enableHTML: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        close() {
            this.$el.remove()
            this.$destroy()
        },
        onClickClose() {
            this.close()
            if (this.closeButton && typeof this.closeButton.callback === 'function') {
                this.closeButton.callback(this)
            }
        }
    },
    mounted() {
        if (this.autoClose) {
            setTimeout(() => {
                this.close()
            }, this.autoCloseDelay * 1000)
        }
    }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$toast-color: white;
$toast-max-width: 50%;

.toast {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: $font-size;
    min-height: $toast-min-height;
    max-width: $toast-max-width;
    display: flex;
    align-items: center;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    background: $toast-bg;
    color: $toast-color;
    padding: 13px 0 13px 16px;
    border-radius: 4px;
    align-items: stretch;

    .close {
        padding: 4px 16px;
        margin-left: 16px;
        border-left: 1px solid $toast-color;
        cursor: pointer;
        flex-shrink: 0;
        display: flex;
        align-items: center;
    }
}
</style>