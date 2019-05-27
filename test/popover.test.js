const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.be.ok
    })

    it('接受 position.', (done) => {
        Vue.component('w-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <w-popover position="bottom" ref="a">
                <template slot="content">内容</template>
                <button>点我</button>
            </w-popover>
          `
        const vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            vm.$el.querySelector('button').click()
            vm.$nextTick(() => {
                expect(vm.$refs.a.$refs.contentWrapper.classList.contains('position-bottom')).to.be.true
                done()
            })
        })
    })

    xit('接受 trigger.', (done) => {
        Vue.component('w-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <w-popover trigger="hover" ref="a">
                <template slot="content">内容</template>
                <button>点我</button>
            </w-popover>
          `
        const vm = new Vue({
            el: div
        })
        let event = new Event('mouseenter')
        vm.$el.dispatchEvent(event)
        vm.$nextTick(() => {
            const { contentWrapper } = vm.$refs.a.$refs
            expect(contentWrapper).to.be.exist
        })
    })
})