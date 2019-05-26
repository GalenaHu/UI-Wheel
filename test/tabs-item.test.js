const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../src/tabs-item.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.be.ok
    })
    it('接受 name.', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: 'XXX'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('XXX')
    })
    it('接受 disabled.', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true
        const callback = sinon.fake()
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })
})