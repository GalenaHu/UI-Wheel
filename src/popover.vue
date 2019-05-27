<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" v-if="visible" class="content-wrapper" :class="`position-${position}`">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display:inline-block">
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
    name: 'w-popover',
    data() {
        return {
            visible: false
        }
    },
    props: {
        position: {
            type: String,
            default: 'top',
            validator(value) {
                return ['top', 'bottom', 'left', 'right'].includes(value)
            }
        },
        trigger: {
            type: String,
            default: 'click',
            validator(value) {
                return ['click', 'hover'].includes(value)
            }
        }
    },
    computed: {
        openEvent() {
            if (this.trigger === 'click') {
                return 'click'
            } else {
                return 'mouseenter'
            }
        },
        closeEvent() {
            if (this.trigger === 'click') {
                return 'click'
            } else {
                return 'mouseleave'
            }
        }
    },
    mounted() {
        if (this.trigger === 'click') {
            this.$refs.popover.addEventListener('click', this.onClick)
        } else {
            this.$refs.popover.addEventListener('mouseenter', this.open)
            this.$refs.popover.addEventListener('mouseleave', this.close)
        }
    },
    methods: {
        positionContent() {
            const { contentWrapper, triggerWrapper } = this.$refs
            document.body.appendChild(contentWrapper)
            const { width, height, top, left } = triggerWrapper.getBoundingClientRect()
            const { height: height2 } = contentWrapper.getBoundingClientRect()
            let positions = {
                top: { top: top + window.scrollY, left: left + window.scrollX, },
                bottom: { top: top + height + window.scrollY, left: left + window.scrollX },
                left: {
                    top: top + window.scrollY + (height - height2) / 2,
                    left: left + window.scrollX
                },
                right: {
                    top: top + window.scrollY + (height - height2) / 2,
                    left: left + window.scrollX + width
                },
            }
            contentWrapper.style.left = positions[this.position].left + 'px'
            contentWrapper.style.top = positions[this.position].top + 'px'
        },
        onClickDocument(e) {
            if (this.$refs.popover &&
                (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
            ) { return }
            if (this.$refs.contentWrapper &&
                (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
            ) { return }
            this.close()
        },
        open() {
            this.visible = true
            this.$nextTick(() => {
                this.positionContent()
                document.addEventListener('click', this.onClickDocument)
            })

            this.visible = true
            this.$nextTick(() => {
                this.positionContent()
                document.addEventListener('click', this.onClickDocument)
            })
        },
        close() {
            this.visible = false
            document.removeEventListener('click', this.onclickDocument)
        },
        onClick(event) {
            if (this.$refs.triggerWrapper.contains(event.target)) {
                if (this.visible === true) {
                    this.close()
                } else {
                    this.open()
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;

.popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
}

.content-wrapper {
    position: absolute;
    background: white;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0.5em 1em;

    max-width: 20em;
    word-break: break-all;
    line-height: 1.8;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5));

    &::before,
    &::after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        left: 10px;
        border: 10px solid transparent;
    }

    &.position-top {
        margin-top: -10px;
        transform: translateY(-100%);

        &::before {
            top: 100%;
            border-top-color: black;
            border-bottom: none;
        }

        &::after {
            top: calc(100% - 1.5px);
            border-top-color: white;
            border-bottom: none;
        }
    }

    &.position-bottom {
        margin-top: 10px;

        &::before {
            bottom: 100%;
            border-bottom-color: black;
            border-top: none;
        }

        &::after {
            bottom: calc(100% - 1.5px);
            border-bottom-color: white;
            border-top: none;
        }
    }

    &.position-left {
        transform: translate(-100%);
        margin-left: -10px;

        &::before {
            left: 101%;
            top: 50%;
            transform: translateY(-50%);
            border-left-color: black;
            border-right: none;
        }

        &::after {
            top: 50%;
            transform: translateY(-50%);
            left: calc(101% - 1.5px);
            border-left-color: white;
            border-right: none;
        }
    }

    &.position-right {
        margin-left: 10px;

        &::before,
        &::after {
            transform: translateY(-50%);
            top: 50%;
        }

        &::before {
            border-right-color: black;
            border-left: none;
            left: calc(0% - 10px);
            border-left: none;
        }

        &::after {
            border-right-color: white;
            border-left: none;
            left: calc(0% - 8.5px);
            border-left: none;
        }
    }
}
</style>