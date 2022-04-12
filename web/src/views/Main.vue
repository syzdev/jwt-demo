<template>
  <div class="main-container">
    <div>登录成功！{{ token }}</div>
    <el-button type="primary" @click="loginOut" size="small"
      >退出登录</el-button
    >
  </div>
</template>

<script>
export default {
  computed: {
    token() {
      return localStorage.getItem('token')
    },
  },
  methods: {
    loginOut() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    },
  },
}
</script>

<style>
.main-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>