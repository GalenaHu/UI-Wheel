import Toast from './toast.vue'
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(message) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: {
                    closeButton: {
                        text: '知道了',
                        callback() {
                            console.log('用户说他知道了')
                        }
                    },
                    enableHTML: true
                }
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}