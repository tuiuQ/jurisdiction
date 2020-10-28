<template>
  <div class="login-container">
    <el-form
    class="login-form"
    label-position="top"
    label-width="80px"
    :model="formdata">
      <h1>用户登录</h1>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click.prevent="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator"
  import { Form, FormItem, Input, Button } from 'element-ui'
  import { AxiosResponse } from 'axios'

  @Component({
    components: {
      [Form.name]: Form,
      [FormItem.name]: FormItem,
      [Input.name]: Input,
      [Button.name]: Button
    }
  })
  export default class Login extends Vue {

    private formdata: object | undefined = {
      username: "",
      password: ""
    }

    handleLogin() {
      this.$http.post("login", this.formdata)        
        .then((res: AxiosResponse): void => {
          console.log(res)
          const {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            data, meta: { msg, status }
          } = res.data

          if (status == 200) {
            alert(msg)
            this.$router.push({name: "home"})
          }
        })
    }
  }
</script>
<style scoped lang="stylus">
.login-container
  height 100%
  background-color #324152
  display flex
  justify-content center
  align-items center
  .login-form
    background-color white
    width 400px
    border-radius 5px
    padding 30px
    .login-btn 
      width 100%

</style>