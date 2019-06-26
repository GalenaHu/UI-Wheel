<template>
    <div>
        <w-row align='left'>
            <w-col span='2'>
                <div class='my-col'>2</div>
            </w-col>
            <w-col span='4'>
                <div class='my-col'>4</div>
            </w-col>
            <w-col span='6'>
                <div class='my-col'>6</div>
            </w-col>
        </w-row>
        <w-row align='center'>
            <w-col span='2'>
                <div class='my-col'>2</div>
            </w-col>
            <w-col span='4'>
                <div class='my-col'>4</div>
            </w-col>
            <w-col span='6'>
                <div class='my-col'>6</div>
            </w-col>
        </w-row>
        <w-row align='right'>
            <w-col span='2'>
                <div class='my-col'>2</div>
            </w-col>
            <w-col span='4'>
                <div class='my-col'>4</div>
            </w-col>
            <w-col span='6'>
                <div class='my-col'>6</div>
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