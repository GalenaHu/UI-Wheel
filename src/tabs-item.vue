<template>
    <div class="tabs-item" @click="onclick" :class="itemClasses" :data-name="name">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'w-item',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String | Number,
            required: true
        }
    },
    data() {
        return {
            active: false
        }
    },
    inject: ['eventBus'],
    created() {
        this.eventBus &&
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name
            })
    },
    methods: {
        onclick() {
            if (this.disabled) { return }
            this.eventBus &&
                this.eventBus.$emit('update:selected', this.name, this)
        }
    },
    computed: {
        itemClasses() {
            return {
                active: this.active,
                disabled: this.disabled
            }
        }
    }
}
</script>
<style lang="scss" scoped>
$active-tab-color: #3EAF7C;
$disabled-tab-color: #ddd;

.tabs-item {
    padding: 0.3em 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;

    &.active {
        color: $active-tab-color;
        font-weight: bold;
    }

    &.disabled {
        color: $disabled-tab-color;
        cursor: not-allowed;
    }
}
</style>