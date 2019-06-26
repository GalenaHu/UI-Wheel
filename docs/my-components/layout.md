---
title: Layout
---
# Layout
### 样式
---
<layout-demos/>

```vue
<template>
    <div>
        <w-layout style="height: 30vh">
            <w-header class="demo">header</w-header>
            <w-layout>
                <w-sider class='demo'>sider</w-sider>
                <w-content class="demo"> content</w-content>
            </w-layout>
            <w-footer class="demo">footer</w-footer>
        </w-layout>
    </div>
</template>
<script>
import { Layout, Header, Sider, Content, Footer } from 'ui-wheel-demo-1'
import 'ui-wheel-demo-1/dist/index.css'

export default {
    components: {
        'w-layout': Layout,
        'w-header': Header,
        'w-sider': Sider,
        'w-content': Content,
        'w-footer': Footer,
    }
}
</script>
<style>
.demo {
    border: 3px solid #3EAF7C;
}
</style>
```