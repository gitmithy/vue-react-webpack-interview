<template>
    <div>
        <input type="text" v-model="title"/>
        <button @click="addTitle">add</button>
    </div>
</template>

<script>
import event from './event'

export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTitle() {
            // 调用父组件的事件
            this.$emit('add', this.title)

            // 调用自定义事件，调用了event.js，vue自带已经实现了自定义事件的能力，new了一个vue的实例，已经实现了on emit
            event.$emit('onAddTitle', this.title)

            this.title = ''
        }
    }
}
</script>