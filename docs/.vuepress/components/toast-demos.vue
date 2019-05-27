<template>
    <div>
        <w-button @click='showToast1("我在上面")'>top</w-button>
        <w-button @click='showToast2("我在中间")'>middle</w-button>
        <w-button @click='showToast3("我在下面")'>bottom</w-button>
    </div>
</template>
<script>
import Plugin from '../../../src/plugin.js'
import Button from '../../../src/button.vue'
import Vue from 'vue'
Vue.use(Plugin)

export default {
    components: {
        'w-button': Button
    },
    methods: {
        showToast1(info) {
            this.$toast(info, {
                closeButton: {
                    exist: true,
                    text: 'ok'
                },
                position: 'top',
                autoClose: 10,
            })
        },
        showToast2(info) {
            this.$toast(info, {
                closeButton: {
                    exist: true,
                    text: '可以的'
                },
                position: 'middle',
                autoClose: false
            })
        },
        showToast3(info) {
            this.$toast(info, {
                closeButton: {
                    exist: false,
                    text: 'ok'
                },
                position: 'bottom'
            })
        }
    }
}
</script>