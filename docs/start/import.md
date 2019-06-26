---
title: 引入
---
# 引入

```javascript
import { Button, ButtonGroup, Icon, Input, Row, Col, Layout, Header, Sider, Content, Footer, Toast, Plugin, Tabs, TabsHead, TabsBody, TabsItem, TabsPane, Popover, Collapse, CollapseItem } from 'ui-wheel-demo-1'
import 'ui-wheel-demo-1/dist/index.css'

import Vue from 'vue'

//Button组件
Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)

//Input组件
Vue.component('w-input', Input)

//Grid组件
Vue.component('w-row', Row)
Vue.component('w-col', Col)

//Layout组件
Vue.component('w-layout', Layout)
Vue.component('w-header', Header)
Vue.component('w-sider', Sider)
Vue.component('w-content', Content)
Vue.component('w-footer', Footer)

//Toast组件
Vue.component('w-toast', Toast)
Vue.use(Plugin)

//Tabs组件
Vue.component('w-tabs', Tabs)
Vue.component('w-tabs-head', TabsHead)
Vue.component('w-tabs-body', TabsBody)
Vue.component('w-tabs-item', TabsItem)
Vue.component('w-tabs-pane', TabsPane)

//Popover组件
Vue.component('w-popover', Popover)

//Collapse组件
Vue.component('w-collapse', Collapse)
Vue.component('w-collapse-item', CollapseItem)
```