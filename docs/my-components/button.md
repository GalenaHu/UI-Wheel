---
title: Button
---
# Button

### 样式
---
<button-demos/>

```vue
<template>
    <div>
        <w-button>按钮</w-button>
        <w-button icon="loading" icon-position="left" loading>按钮</w-button>
        <w-button icon="setting" icon-position="right">按钮</w-button>
        <w-button-group>
            <w-button icon="left" icon-position="left">上一页</w-button>
            <w-button>更多</w-button>
            <w-button icon="right" icon-position="right">下一页</w-button>
        </w-button-group>
    </div>
</template>
<script>
import { Button, ButtonGroup, Icon } from 'ui-wheel-demo-1'
import 'ui-wheel-demo-1/dist/index.css'

export default {
    components: {
        'w-button': Button,
        'w-button-group': ButtonGroup,
        'w-icon': Icon
    }
}
</script>
```

### API
---
* **icon**: 按钮图标，接受字符串，包括'loading'、'setting'、'left'、'right'、'success'、'error'、'awesome'
* **icon-position**: 按钮图标位置，接受字符串，包括'left'、'right'，默认为'left'
* **loading**: 使按钮图标为旋转的'loading'，接受布尔值，默认为false