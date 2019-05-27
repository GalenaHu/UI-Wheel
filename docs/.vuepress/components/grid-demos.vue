<template>
    <div>
        <w-row>
            <w-col span="12" :ipad="{span:2}" :pc="{span:20}" class="aaa">aaa</w-col>
            <w-col span="12" :ipad="{span:20, offset:2}" :pc="{span:2, offset:2}" class="bbb">bbb</w-col>
        </w-row>
    </div>
</template>
<script>
import Row from '../../../src/row.vue'
import Col from '../../../src/col.vue'

export default {
    components: {
        'w-row': Row,
        'w-col': Col
    }
}
</script>
<style>
.aaa,
.bbb {
    background-color: #3EAF7C;
}
</style>