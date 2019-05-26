const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs.vue'
import TabsHead from '../src/tabs-head.vue'
import TabsBody from '../src/tabs-body.vue'
import TabsItem from '../src/tabs-item.vue'
import TabsPane from '../src/tabs-pane.vue'
Vue.component('w-tabs', Tabs)
Vue.component('w-tabs-head', TabsHead)
Vue.component('w-tabs-body', TabsBody)
Vue.component('w-tabs-item', TabsItem)
Vue.component('w-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsPane', () => {
    it('存在.', () => {
        expect(TabsPane).to.be.ok
    })
    it('接受 name.', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML =
            `
            <w-tabs selected="sports">
                <w-tabs-head>
                    <w-tabs-item name="sports">体育</w-tabs-item>
                    <w-tabs-item name="beauty"美女</w-tabs-item>
                    <w-tabs-item name="computer">电脑</w-tabs-item>
                </w-tabs-head>
                <w-tabs-body>
                    <w-tabs-pane name="sports">体育相关</w-tabs-pane>
                    <w-tabs-pane name="beauty">美女相关</w-tabs-pane>
                    <w-tabs-pane name="computer">电脑相关</w-tabs-pane>
                </w-tabs-body>
            </w-tabs>
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let pane = vm.$el.querySelector('.tabs-pane[data-name="sports"]')
            expect(pane.classList.contains('active')).to.be.true
            done()
        })
    })
})