<template>
  <div>
    <input type="button" v-on:click="show_my_value('Jim')" value="我是按钮"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: '你好Vue! 本消息来自于变量'
      }
    },
    methods: {
      show_my_value (name) {
        alert('Hello: ' + name)
      }
    }
  }
</script>

<style>
</style>
