import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)

new Vue({
    el: '#app',
    data: {
        loadingSwitch1: false,
        loadingSwitch2: false,
        loadingSwitch3: false,
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        }
    }
})

//单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
var expect = chai.expect

{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
    button.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
    button.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    let spy = chai.spy(() => {})
    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
}