# UI-Wheel

[![Build Status](https://travis-ci.org/GalenaHu/UI-Wheel.svg?branch=master)](https://travis-ci.org/GalenaHu/UI-Wheel)

## 介绍

一个基于Vue的UI框架

## 开始使用

1. 添加CSS样式

   使用本框架前请在CSS中开启border-box

   ```css
   *, *::before, *::after {box-sizing: boder-box}
   ```

   并设置默认颜色变量

   ```CSS
   :root {
       --button-height: 32px;
       --font-size: 14px;
       --button-bg: white;
       --button-active-bg: #eee;
       --border-radius: 4px;
       --color: #333;
       --border-color: #999;
       --border-color-hover: #666;
   }
   ```

2. 安装

   ```bash
   npm install --save ui-wheel-demo-1
   ```

3. 引入

   ```vue
   <template>
       <div id="app">
           <w-button>欢迎</w-button>
       </div>
   </template>
   <script>
   import { Button, ButtonGroup, Icon } from 'ui-wheel-demo-1'
   import 'ui-wheel-demo-1/dist/index.css'
   
   export default {
       name: 'app',
       components: {
           'w-button': Button
       }
   }
   </script>
   ```

   