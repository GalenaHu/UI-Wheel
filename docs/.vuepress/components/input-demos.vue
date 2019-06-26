<template>
    <div>
        <w-input value='张三'></w-input>
        <w-input value='李四' :disabled="true"></w-input>
        <w-input value='王五' :readonly="true"></w-input>
        <w-input value="钱" error="姓名不能少于两个字"></w-input>
    </div>
</template>
<script>
import Input from '../../../src/input.vue'

export default {
    components: {
        'w-input': Input
    }
}
</script>