<template>
    <div>
        <w-row>
            <w-col span='2' :ipad='{ span:4 }' :narrowpc='{ span:6 }' :pc='{ span:10 }' :widepc='{ span:12 }'>
                <div class='my-col'>{{left}}</div>
            </w-col>
            <w-col span='20' offset='2' :ipad='{ span:18, offset:2 }' :narrowpc='{ span:16, offset:2 }' :pc='{ span:10, offset:4 }' :widepc='{ span:8, offset:4}'>
                <div class='my-col'>{{right}}</div>
            </w-col>
        </w-row>
    </div>
</template>
<script>
import Row from '../../../src/row.vue'
import Col from '../../../src/col.vue'

export default {
    components: {
        'w-row': Row,
        'w-col': Col
    },
    data() {
        return {
            left: '',
            right: ''
        }
    },
    methods: {
        windowSize() {
            if (window.outerWidth < 577) {
                this.left = '2'
                this.right = '20'
            } else if (window.outerWidth < 769) {
                this.left = '4'
                this.right = '18'
            } else if (window.outerWidth < 993) {
                this.left = '6'
                this.right = '16'
            } else if (window.outerWidth < 1200) {
                this.left = '10'
                this.right = '10'
            } else {
                this.left = '12'
                this.right = '8'
            }
        }
    },
    mounted() {
        this.windowSize()
        window.onresize = () => {
            this.windowSize()
        }
    }
}
</script>
<style>
* {
    box-sizing: border-box;
}

.my-col {
    background-color: #3EAF7C;
    border: 1px solid #2c3e50;
    display: flex;
}
</style>