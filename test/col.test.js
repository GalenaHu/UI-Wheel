const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.be.ok
    })

    it('接受 span.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: '1'
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })

    it('接受 offset.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: '1'
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('offset-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('接受 ipad.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                ipad: { span: 1, offset: 2 }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('offset-ipad-2')).to.eq(true)
        expect(vm.$el.classList.contains('col-ipad-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('接受 narrowpc.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowpc: { span: 1, offset: 2 }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('offset-narrowpc-2')).to.eq(true)
        expect(vm.$el.classList.contains('col-narrowpc-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('接受 pc.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: { span: 1, offset: 2 }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('offset-pc-2')).to.eq(true)
        expect(vm.$el.classList.contains('col-pc-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('接受 widepc.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                widepc: { span: 1, offset: 2 }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('offset-widepc-2')).to.eq(true)
        expect(vm.$el.classList.contains('col-widepc-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
})