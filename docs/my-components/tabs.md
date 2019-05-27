---
title: Tabs
---
# Tabs

<tabs-demos/>

```vue
<template>
    <div>
        <w-tabs :selected.sync="selectedTab">
            <w-tabs-head>
                <w-tabs-item name="tab1">Tab1</w-tabs-item>
                <w-tabs-item name="tab2">Tab2</w-tabs-item>
                <w-tabs-item name="tab3">Tab3</w-tabs-item>
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
import Tabs from '../../../src/tabs.vue'
import TabsHead from '../../../src/tabs-head.vue'
import TabsBody from '../../../src/tabs-body.vue'
import TabsItem from '../../../src/tabs-item.vue'
import TabsPane from '.../../../src/tabs-pane.vue'

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