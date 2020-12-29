<template>
  <div class="login-container">
    <div class="login-head">
      <img src="./logo_index.png" alt="">
    </div>
    <el-form class="login-form" ref="form" :model="user">
      <el-form-item>
        <el-input v-model="user.mobile"
        placeholder="请输入手机号"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="user.code"
        placeholder="请输入验证码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked">
          我已阅读并阅读用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button
         class="login-btn"
         type="primary"
         :loading="loginLoading"
         @click="onLogin">
          登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      checked: false, // 协议选中状态
      loginLoading: false
    }
  },
  methods: {
    onLogin () {
      // 获取表单数据(根据接口要求绑定数据)
      const user = this.user
      // 表单验证

      // 通过,提交
      // loading...
      this.loginLoading = true

      request({
        method: 'POST',
        url: '/mp/v1_0/authorizations',
        data: user
      }).then(res => { // 处理后端相应结果
        console.log(res) // 成功

        // 登陆成功
        this.$message({
          message: '登陆成功',
          type: 'success'
        })

        // 关闭loading
        this.loginLoading = false
      }).catch(err => {
        console.log('登录失败', err) // else失败

        // 登录失败
        this.$message.error('登录失败,手机号或验证码错误')

        // 关闭loading
        this.loginLoading = false
      })
    }
  }
}
</script>

<style lang="less" scoped>

.login-container{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction:column ;
  justify-content: center;
  align-items: center;
  background: url("./login_bg.jpg") no-repeat;
  background-size: cover;
}

.login-head{
  width: 400px;
  height: 57px;
  background-color: #fff;
  padding-top: 30px;
  margin-bottom: -30px;
  z-index: 2;
}

.login-head img{
  display: block;
  width: 259px;
  height: 57px;
  margin: auto;
}

.login-form{
  background-color: #fff;
  padding: 50px;
  min-width: 300px;
}

.login-btn{
  width: 100%;
}
</style>
