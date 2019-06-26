---
title: Toast
---
# Toast
### 样式
---
<toast-demos/>

```vue
<template>
    <div>
        <w-button @click='showToast1("我在上面")'>top</w-button>
        <w-button @click='showToast2("我在中间")'>middle</w-button>
        <w-button @click='showToast3("我在下面")'>bottom</w-button>
    </div>
</template>
<script>
import { Plugin, Button } from 'ui-wheel-demo-1'
import 'ui-wheel-demo-1/dist/index.css'
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
```

### 参数
第一个参数为toast信息，第二个参数为一个Object，包括：
* **closeButton**: 关闭按钮，接受Object，包含三个key
  * exist: 关闭按钮是否存在，接受布尔值，默认false
  * text: 关闭按钮文字，接受字符串，默认为'关闭'
  * callback: 关闭后回调函数，默认为undefined
* **autoClose**: 自动关闭toast，接受布尔值或数字，默认为2
* **enableHTML**: toast信息是否为HTML，接受布尔值，默认false
* **position**: tosat弹出位置，接受字符串，包含'top'、'center'、'bottom'，默认为'top'