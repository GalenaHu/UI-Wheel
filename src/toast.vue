<template>
    <div class="toast">
    </div>
</template>
<script>
import Vue from 'vue'
Vue.prototype.$toast = function() {
    console.log(1)
}
export default {
    name: 'wheel-toast'
}
</script>
<style lang="scss" scoped></style>