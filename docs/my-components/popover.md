---
title: Popover
---
# Popover

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
import Button from '../../../src/button.vue'
import Popover from '../../../src/popover.vue'

export default {
    components: {
        'w-button': Button,
        'w-popover': Popover,
    }
}
</script>
```