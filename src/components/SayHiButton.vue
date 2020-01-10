<template>
  <div>
    <input type="button" @click="show_my_value('Jim')" value="我是按钮"/>
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
      show_my_value () {
        alert('my_value: ' + this.message)
      }
    }
  }
</script>

<style>
</style>
