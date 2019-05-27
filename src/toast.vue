<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast">
            <div class="info">
                <slot v-if="!enableHTML"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div v-if="closeButton.exist" class="close" @click="onClickClose">
                {{closeButton.text}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'wheel-toast',
    props: {
        autoClose: {
            type: [Boolean, Number],
            default: 2,
            validator(value) {
                return value === false || typeof value === 'number'
            }
        },
        closeButton: {
            type: Object,
            default: () => {
                return {
                    exist: false,
                    text: '关闭',
                    callback: undefined
                }
            }
        },
        enableHTML: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'top',
            validator(value) {
                return ['top', 'bottom', 'middle'].includes(value)
            }
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
    computed: {
        toastClasses() {
            return {
                [`position-${this.position}`]: true
            }
        }
    },
    mounted() {
        if (this.autoClose) {
            setTimeout(() => {
                this.close()
            }, this.autoClose * 1000)
        }
    }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$toast-color: white;
$animation-duration: 0.5s;

@keyframes slide-up {
    0% {
        opacity: 0;
        transform: translateY(100%);
    }

    100% {
        opacity: 1;
        transform: translateY(0%);
    }
}

@keyframes slide-down {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }

    100% {
        opacity: 1;
        transform: translateY(0%);
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}


.wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;


    &.position-top {
        top: 0;

        .toast {
            animation: slide-down $animation-duration;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    }


    &.position-bottom {
        bottom: 0;

        .toast {
            animation: slide-up $animation-duration;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }

    &.position-middle {
        top: 50%;
        transform: translate(-50%, -50%);

        .toast {
            animation: fade-in $animation-duration;
        }
    }
}

.toast {

    font-size: $font-size;
    min-height: $toast-min-height;
    display: flex;
    align-items: center;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    background: $toast-bg;
    color: $toast-color;
    padding: 13px 0 13px 16px;
    border-radius: 4px;
    align-items: stretch;

    .info {
        display: flex;
        align-items: center;
        margin-right: 16px;
    }

    .close {
        padding: 4px 16px;
        border-left: 1px solid $toast-color;
        cursor: pointer;
        flex-shrink: 0;
        display: flex;
        align-items: center;
    }

}
</style>