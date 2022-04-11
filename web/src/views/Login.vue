<template>
  <div class="login-container">
    <el-form
      label-width="80px"
      :model="loginUserInfo"
      size="small"
      @submit.native.prevent="login"
    >
      <el-form-item label="用户名">
        <el-input v-model="loginUserInfo.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginUserInfo.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import http from '../http'
export default {
  data() {
    return {
      loginUserInfo: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    async login() {
      const res = await http.post('login', this.loginUserInfo)
      console.log(res)
    },
  },
}
</script>

<style scoped>
.login-container {
  height: 200px;
  width: 350px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>