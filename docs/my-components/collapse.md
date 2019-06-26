---
title: Collapse
---
# Collapse
### 样式
---
<collapse-demos/>

```vue
<template>
    <div>
        <w-collapse :selected.sync="selected" single>
            <w-collapse-item title="标题1" name="1">内容1</w-collapse-item>
            <w-collapse-item title="标题2" name="2">内容2</w-collapse-item>
            <w-collapse-item title="标题3" name="3">内容3</w-collapse-item>
        </w-collapse>
    </div>
</template>
<script>
import { Collapse, CollapseItem } from 'ui-wheel-demo-1'
import 'ui-wheel-demo-1/dist/index.css'

export default {
    components: {
        'w-collapse': Collapse,
        'w-collapse-item': CollapseItem,
    },
    data() {
        return {
            selected: ['1']
        }
    }
}
</script>
```

### API
* **single**: 是否只打开一个tab，接受布尔值，默认为false
* **selected**: 选中tab对应的name值，接受数组
* **title**: tab标题，接受字符串
* **name**: 对应的tab名，接受字符串