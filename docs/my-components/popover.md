---
title: Popover
---
# Popover
### 样式
---
<popover-demos/>

```vue
<template>
    <div>
        <div>
            <w-popover>
                <template slot="content">
                    <div>click top</div>
                </template>
                <w-button>点我</w-button>
            </w-popover>
            <w-popover position="bottom">
                <template slot="content">
                    <div>click bottom</div>
                </template>
                <w-button>点我</w-button>
            </w-popover>
            <w-popover position="left">
                <template slot="content">
                    <div>click left</div>
                </template>
                <w-button>点我</w-button>
            </w-popover>
            <w-popover position="right">
                <template slot="content">
                    <div>click right</div>
                </template>
                <w-button>点我</w-button>
            </w-popover>
        </div>
        <br>
        <div>
            <w-popover trigger="hover">
                <template slot="content">
                    <div>hover top</div>
                </template>
                <w-button>点我</w-button>
            </w-popover>
            <w-popover position="bottom" trigger="hover">
                <template slot="content">
                    <div>hover bottom</div>
                </template>
                <w-button>点我</w-button>
            </w-popover>
            <w-popover position="left" trigger="hover">
                <template slot="content">
                    <div>hover left</div>
                </template>
                <w-button>点我</w-button>
            </w-popover>
            <w-popover position="right" trigger="hover">
                <template slot="content">
                    <div>hover right</div>
                </template>
                <w-button>点我</w-button>
            </w-popover>
        </div>
    </div>
</template>
<script>
import { Button, Popover } from 'ui-wheel-demo-1'
import 'ui-wheel-demo-1/dist/index.css'

export default {
    components: {
        'w-button': Button,
        'w-popover': Popover,
    }
}
</script>
```

### API
* **position**: 弹出层位置，接受字符串，包括'top', 'bottom', 'left', 'right'，默认为'top'
* **trigger**: 弹出层触发方式，接受字符串，包括'click', 'hover'，默认为'click'