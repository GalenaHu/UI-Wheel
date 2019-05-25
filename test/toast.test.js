const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })
    describe('props', () => {
        it('接受 autoClose.', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1,
                }
            }).$mount(div)
            setTimeout(() => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            }, 1500)
            vm.$destroy()
        })
        it('接受 closeButton.', () => {
            const Constructor = Vue.extend(Toast)
            const callback = sinon.fake()
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        exist: true,
                        text: 'ok',
                        callback
                    },
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('ok')
            closeButton.click()
            expect(callback).have.been.called
            vm.$destroy()
        })
        it('接受 enableHTML.', () => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHTML: true,
                }
            })
            vm.$slots.default = ['<strong id="test">hi</strong>']
            vm.$mount(div)
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.be.ok
            vm.$destroy()
        })
        it('接受 position.', () => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'bottom',
                }
            }).$mount(div)
            expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
            vm.$destroy()
        })
    })
})