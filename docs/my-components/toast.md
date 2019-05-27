---
title: Toast
---
# Toast

<toast-demos/>

```vue
<template>
    <div>
        <button @click='showToast1("我在上面")'>top</button>
        <button @click='showToast2("我在中间")'>middle</button>
        <button @click='showToast3("我在下面")'>bottom</button>
    </div>
</template>
<script>
import Toast from '../../../src/toast.vue'
import Plugin from '../../../src/plugin.js'
import Vue from 'vue'
Vue.component('w-toast', Toast)
Vue.use(Plugin)

export default {

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
                position: 'middle'
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
```