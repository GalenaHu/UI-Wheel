<template>
    <div>
        <w-layout class="demo" style="height: 30vh">
            <w-header class="demo">header</w-header>
            <w-layout>
                <w-sider class='demo'>sider</w-sider>
                <w-content class="demo"> content</w-content>
            </w-layout>
            <w-footer class="demo">footer</w-footer>
        </w-layout>
    </div>
</template>
<script>
import Layout from '../../../src/layout.vue'
import Header from '../../../src/header.vue'
import Sider from '../../../src/sider.vue'
import Content from '../../../src/content.vue'
import Footer from '../../../src/footer.vue'

export default {
    components: {
        'w-layout': Layout,
        'w-header': Header,
        'w-sider': Sider,
        'w-content': Content,
        'w-footer': Footer,
    }
}
</script>
<style>
.demo {
    border: 3px solid #3EAF7C;
}
</style>