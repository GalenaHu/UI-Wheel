---
title: Input
---
# Input

### 样式
---

<input-demos/>

```vue
<template>
    <div>
        <w-input value='张三'></w-input>
        <w-input value='李四' :disabled="true"></w-input>
        <w-input value='王五' :readonly="true"></w-input>
        <w-input value="钱" error="姓名不能少于两个字"></w-input>
    </div>
</template>
<script>
import { Input } from 'ui-wheel-demo-1'
import 'ui-wheel-demo-1/dist/index.css'

export default {
    components: {
        'w-input': Input
    }
}
</script>
```

### 双向绑定
---
<input-demos2/>

```vue
<template>
    <div>
        <w-input v-model="message"></w-input>
        <span>{{message}}</span>
    </div>
</template>
<script>
import { Input } from 'ui-wheel-demo-1'
import 'ui-wheel-demo-1/dist/index.css'

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
```

### API
---
* **value**: 表单内容，接受字符串
* **disabled**: 表单不可用，接受布尔值，默认为false
* **readonly**: 表单内容无法修改，接受布尔值，默认为false
* **error**: 输入错误提示信息，接受字符串


