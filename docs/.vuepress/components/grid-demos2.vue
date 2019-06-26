<template>
    <div>
        <w-row gutter='10'>
            <w-col span='8'>
                <div class='my-col'>8</div>
            </w-col>
            <w-col span='8'>
                <div class='my-col'>8</div>
            </w-col>
            <w-col span='8'>
                <div class='my-col'>8</div>
            </w-col>
        </w-row>
        <w-row gutter='20'>
            <w-col span='6'>
                <div class='my-col'>6</div>
            </w-col>
            <w-col span='6'>
                <div class='my-col'>6</div>
            </w-col>
            <w-col span='6'>
                <div class='my-col'>6</div>
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
    justify-content: center;
    align-items: center;
}
</style>