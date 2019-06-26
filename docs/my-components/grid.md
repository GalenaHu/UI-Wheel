---
title: Grid
---
# Grid

### 样式
---
<grid-demos/>

```vue
<template>
    <div>
        <w-row>
            <w-col span='8'><div class='my-col'>8</div></w-col>
            <w-col span='8'><div class='my-col'>8</div></w-col>
            <w-col span='8'><div class='my-col'>8</div></w-col>
        </w-row>
        <w-row>
            <w-col span='6'><div class='my-col'>6</div></w-col>
            <w-col span='6'><div class='my-col'>6</div></w-col>
            <w-col span='6'><div class='my-col'>6</div></w-col>
            <w-col span='6'><div class='my-col'>6</div></w-col>
        </w-row>
        <w-row>
            <w-col span='4'><div class='my-col'>4</div></w-col>
            <w-col span='4'><div class='my-col'>4</div></w-col>
            <w-col span='4'><div class='my-col'>4</div></w-col>
            <w-col span='4'><div class='my-col'>4</div></w-col>
            <w-col span='4'><div class='my-col'>4</div></w-col>
            <w-col span='4'><div class='my-col'>4</div></w-col>
        </w-row>
        <w-row>
            <w-col span='2'><div class='my-col'>2</div></w-col>
            <w-col span='2'><div class='my-col'>2</div></w-col>
            <w-col span='2'><div class='my-col'>2</div></w-col>
            <w-col span='2'><div class='my-col'>2</div></w-col>
            <w-col span='2'><div class='my-col'>2</div></w-col>
            <w-col span='2'><div class='my-col'>2</div></w-col>
            <w-col span='2'><div class='my-col'>2</div></w-col>
            <w-col span='2'><div class='my-col'>2</div></w-col>
            <w-col span='2'><div class='my-col'>2</div></w-col>
            <w-col span='2'><div class='my-col'>2</div></w-col>
            <w-col span='2'><div class='my-col'>2</div></w-col>
            <w-col span='2'><div class='my-col'>2</div></w-col>
        </w-row>
    </div>
</template>
<script>
import { Row, Col } from 'ui-wheel-demo-1'
import 'ui-wheel-demo-1/dist/index.css'

export default {
    components: {
        'w-row': Row,
        'w-col': Col
    }
}
</script>
<style>
* {
    box-sizing: border-box;
}

.my-col {
    background-color: #3EAF7C;
    border: 1px solid #2c3e50;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
```

### API
---
* **gutter**: 表示col间距的像素大小，接受字符串
  <p></p>
  <grid-demos2 />
  ```vue
    <template>
        <div>
            <w-row gutter='10'>
                <w-col span='8'><div class='my-col'>8</div></w-col>
                <w-col span='8'><div class='my-col'>8</div></w-col>
                <w-col span='8'><div class='my-col'>8</div></w-col>
            </w-row>
            <w-row gutter='20'>
                <w-col span='6'><div class='my-col'>6</div></w-col>
                <w-col span='6'><div class='my-col'>6</div></w-col>
                <w-col span='6'><div class='my-col'>6</div></w-col>
                <w-col span='6'><div class='my-col'>6</div></w-col>
            </w-row>
        </div>
    </template>
    ```
* **align**: col排列方向，接受字符串，包括'left'、'center'、'right'，默认为'left'
  <p></p>
  <grid-demos3 />
  ```vue
    <template>
        <div>
            <w-row align='left'>
                <w-col span='2'><div class='my-col'>2</div></w-col>
                <w-col span='4'><div class='my-col'>4</div></w-col>
                <w-col span='6'><div class='my-col'>6</div></w-col>
            </w-row>
            <w-row align='center'>
                <w-col span='2'><div class='my-col'>2</div></w-col>
                <w-col span='4'><div class='my-col'>4</div></w-col>
                <w-col span='6'><div class='my-col'>6</div></w-col>
            </w-row>
            <w-row align='right'>
                <w-col span='2'><div class='my-col'>2</div></w-col>
                <w-col span='4'><div class='my-col'>4</div></w-col>
                <w-col span='6'><div class='my-col'>6</div></w-col>
            </w-row>
        </div>
    </template>
    ```

* **span**: col的栅格数，总栅格数为24，接受字符串、数字
* **offset**: col左部的空栅格数，接受字符串、数字
  <p></p>
  <grid-demos4 />
  ```vue
    <template>
        <div>
            <w-row>
                <w-col span='4'><div class='my-col'>4</div></w-col>
                <w-col span='6' offset='2'><div class='my-col'>6，左空格为2</div></w-col>
                <w-col span='8' offset='4'><div class='my-col'>8，左空格为4</div></w-col>
            </w-row>
        </div>
    </template>
    ```
### 响应式布局
可通过设置不通的属性实现响应式布局，包括：
* **span**、**offset**: 默认布局
* **ipad**: 577px-769px布局
* **narrowpc**: 769px-993px布局
* **pc**: 993px-1200px布局
* **widepc**: 1200px以上布局
<p></p>
<grid-demos5 />
```vue
<template>
    <div>
        <w-row>
            <w-col span='2' :ipad='{ span:4 }' :narrowpc='{ span:6 }' :pc='{ span:10 }' :widepc='{ span:12 }'>
                <div class='my-col'>{{left}}</div>
            </w-col>
            <w-col span='20' offset='2' :ipad='{ span:18, offset:2 }' :narrowpc='{ span:16, offset:2 }' :pc='{ span:10, offset:4 }' :widepc='{ span:8, offset:4}'>
                <div class='my-col'>{{right}}</div>
            </w-col>
        </w-row>
    </div>
</template>
```
