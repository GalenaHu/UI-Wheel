---
title: Tabs
---
# Tabs
### 样式
---
<tabs-demos/>

```vue
<template>
    <div>
        <w-tabs :selected.sync="selectedTab">
            <w-tabs-head>
                <w-tabs-item name="tab1">Tab1</w-tabs-item>
                <w-tabs-item name="tab2">Tab2</w-tabs-item>
                <w-tabs-item name="tab3" disabled>Tab3</w-tabs-item>
            </w-tabs-head>
            <w-tabs-body>
                <w-tabs-pane name="tab1">Tab1内容</w-tabs-pane>
                <w-tabs-pane name="tab2">Tab2内容</w-tabs-pane>
                <w-tabs-pane name="tab3">Tab3内容</w-tabs-pane>
            </w-tabs-body>
        </w-tabs>
    </div>
</template>
<script>
import { Tabs, TabsHead, TabsItem, TabsBody, TabsPane } from 'ui-wheel-demo-1'
import 'ui-wheel-demo-1/dist/index.css'

export default {
    components: {
        'w-tabs': Tabs,
        'w-tabs-head': TabsHead,
        'w-tabs-item': TabsItem,
        'w-tabs-body': TabsBody,
        'w-tabs-pane': TabsPane
    },
    data() {
        return {
            selectedTab: 'tab1'
        }
    }
}
</script>
```
### API
---
* **selected**: 默认选中的标签name，接受字符串，为必须属性
* **name**: 对应的标签名，接受字符串
* **disabled**: 禁用标签页，接受布尔值，默认false
