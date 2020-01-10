<template>
    <img :src="verifyCode" @click="getVerifyCode()" style="float:right;" alt="Loading...">
</template>

<script>
  export default {
    data () {
      return {
        verifyCode:''
      }
    },
    created() {
      this.getVerifyCode()
    },
    methods: {
      getVerifyCode () {
        this.$http.get("http://localhost:8001/captcha.jpg", {responseType: "arraybuffer"}).then((response) => {
          console.log(response)
          this.verifyCode = 'data:image/png;base64,' + btoa(new Uint8Array(response.data).reduce((data,byte) => data + String.fromCharCode(byte), ''))
        })
      }
    }
  }
</script>

<style>
</style>
