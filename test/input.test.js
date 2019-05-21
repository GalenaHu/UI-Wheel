const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })

    describe('props', () => {
        it('接受 Value.', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    value: '张三'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('张三')
            vm.$destroy()
        })

        it('接受 disabled.', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
            vm.$destroy()
        })

        it('接受 readOnly.', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
            vm.$destroy()
        })

        it('接受 error.', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    error: '填写错误'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const spanElement = vm.$el.querySelector('.errorMessage')
            expect(spanElement.innerText).to.equal('填写错误')
            vm.$destroy()
        })
    })

    describe('event', () => {
        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                const Constructor = Vue.extend(Input)
                const vm = new Constructor({}).$mount()
                const inputElement = vm.$el.querySelector('input')
                const callback = sinon.fake();
                let event = new Event(eventName)
                vm.$on(eventName, callback)
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith(event)
            })
        })
    })
})