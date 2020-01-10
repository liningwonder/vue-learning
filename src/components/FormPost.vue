<template>
    <form action="#" method="post" name="f1">
        <div class="panel loginbox">
            <div class="text-center margin-big padding-big-top"><h1>后台管理中心</h1></div>
            <div class="panel-body" style="padding:30px; padding-bottom:10px; padding-top:10px;">
                <div class="form-group">
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="name" v-model="uname" placeholder="登录账号" data-validate="required:请填写账号" value='' />
                            <span class="icon icon-user margin-small"></span>
                        </div>
                        <div class="form-group">
                            <div class="field field-icon-right">
                                <input type="password" class="input input-big" v-model="pwd" name="pwd" placeholder="登录密码" data-validate="required:请填写密码" />
                                <span class="icon icon-key margin-small"></span>
                            </div>
                        </div>
                        <div class="form-group">
                        <div class="field">
                            <input type="text" class="input input-big" name="code" v-model="code" placeholder="填写右侧的验证码" />
                            <img :src="verifyCode" @click="getVerifyCode()" width="100" height="32" style="height:43px;cursor:pointer;" alt="Loading...">                  
                        </div>
                    </div> 
                </div>
            </div>
            <div style="padding:30px;"><input type="button" class="button button-block bg-main text-big input-big" name="submit" v-on:click="login()" value="登录"></div>
        </div>
    </form>
</template>

<script>
  export default {
    data () {
      return {
        uname: '',
		pwd: '',
        code: '',
        verifyCode: '',
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
      },
      login () {
          this.$http.post('http://localhost:8001/login',{account:this.uname,captcha:this.code,password:this.pwd}).then(response => {
              console.log(response)
          })
      }
    }
  }
</script>

<style>
</style>