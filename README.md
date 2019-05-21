# UI-Wheel

[![Build Status](https://travis-ci.org/GalenaHu/UI-Wheel.svg?branch=master)](https://travis-ci.org/GalenaHu/UI-Wheel)

## 介绍

一个基于Vue的UI框架

## 开始使用

1. 添加CSS样式

   使用本框架前请在CSS中开启border-box，并设置默认颜色变量

   ```css
   *, *::before, *::after {box-sizing: boder-box}
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
           <w-button icon="setting">按钮</w-button>
           <w-button :loading="true" icon-position="left">按钮</w-button>
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
    name: 'app',
       components: {
           'w-button': Button,
           'w-button-group': ButtonGroup,
           'w-icon': Icon
       }
   }
   </script>
   ```
   
   