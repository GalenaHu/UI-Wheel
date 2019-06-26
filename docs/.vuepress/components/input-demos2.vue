<template>
    <div>
        <w-input v-model="message"></w-input>
        <span>{{message}}</span>
    </div>
</template>
<script>
import Input from '../../../src/input.vue'

export default {
    components: {
        'w-input': Input
    },
    data() {
        return {
            message: 'something'
        }
    }
}
</script>