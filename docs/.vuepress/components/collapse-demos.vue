<template>
    <div>
        <w-collapse :selected.sync="selected" single>
            <w-collapse-item title="标题1" name="1">内容1</w-collapse-item>
            <w-collapse-item title="标题2" name="2">内容2</w-collapse-item>
            <w-collapse-item title="标题3" name="3">内容3</w-collapse-item>
        </w-collapse>
    </div>
</template>
<script>
import Collapse from '../../../src/collapse.vue'
import CollapseItem from '../../../src/collapse-item.vue'

export default {
    components: {
        'w-collapse': Collapse,
        'w-collapse-item': CollapseItem,
    },
    data() {
        return {
            selected: ['1']
        }
    }
}
</script>