<template>
    <div>
        <w-row>
            <w-col span='4'>
                <div class='my-col'>4</div>
            </w-col>
            <w-col span='6' offset='2'>
                <div class='my-col'>6，左空格为2</div>
            </w-col>
            <w-col span='8' offset='4'>
                <div class='my-col'>8，左空格为4</div>
            </w-col>
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
* {
    box-sizing: border-box;
}

.my-col {
    background-color: #3EAF7C;
    border: 1px solid #2c3e50;
    display: flex;
}
</style>