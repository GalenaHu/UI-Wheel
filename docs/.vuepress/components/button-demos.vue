<template>
    <div>
        <w-button>按钮</w-button>
        <w-button icon="setting" icon-position="left">按钮</w-button>
        <w-button loading icon-position="right">按钮</w-button>
        <w-button disabled>按钮</w-button>
        <w-button-group>
            <w-button icon="left" icon-position="left">上一页</w-button>
            <w-button>更多</w-button>
            <w-button icon="right" icon-position="right">下一页</w-button>
        </w-button-group>
    </div>
</template>
<script>
import Button from '../../../src/button.vue'
import Icon from '../../../src/icon.vue'
import ButtonGroup from '../../../src/button-group.vue'

export default {
    components: {
        'w-button': Button,
        'w-icon': Icon,
        'w-button-group': ButtonGroup
    }
}
</script>