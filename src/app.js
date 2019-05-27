import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Toast from './toast.vue'
import Plugin from './plugin.js'
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsBody from './tabs-body.vue'
import TabsItem from './tabs-item.vue'
import TabsPane from './tabs-pane.vue'
import Popover from './popover.vue'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)
Vue.component('w-row', Row)
Vue.component('w-col', Col)
Vue.component('w-layout', Layout)
Vue.component('w-header', Header)
Vue.component('w-sider', Sider)
Vue.component('w-content', Content)
Vue.component('w-footer', Footer)
Vue.component('w-toast', Toast)
Vue.use(Plugin)
Vue.component('w-tabs', Tabs)
Vue.component('w-tabs-head', TabsHead)
Vue.component('w-tabs-body', TabsBody)
Vue.component('w-tabs-item', TabsItem)
Vue.component('w-tabs-pane', TabsPane)
Vue.component('w-popover', Popover)

new Vue({
    el: '#app',
    data: {
        loadingSwitch1: false,
        loadingSwitch2: false,
        loadingSwitch3: false,
        message: '',
        selectedTab: 'sports'
    },
    methods: {
        showToast1(info) {
            this.$toast(info, {
                closeButton: {
                    exist: true,
                    text: 'ok'
                },
                position: 'top',
                autoClose: 1,
            })
        },
        showToast2(info) {
            this.$toast(info, {
                closeButton: {
                    exist: true,
                    text: 'ok'
                },
                position: 'middle'
            })
        },
        showToast3(info) {
            this.$toast(info, {
                closeButton: {
                    exist: true,
                    text: 'ok'
                },
                position: 'bottom'
            })
        }
    }
})