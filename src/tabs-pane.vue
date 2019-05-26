<template>
    <div class="tabs-pane" :class="paneClasses" v-if="active" :data-name="name">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'w-pane',
    inject: ['eventBus'],
    props: {
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
    created() {
        this.eventBus.$on('update:selected', (name) => {
            this.active = name === this.name
        })
    },
    computed: {
        paneClasses() {
            return {
                active: this.active
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.tabs-pane {
    padding: 1em;
}
</style>