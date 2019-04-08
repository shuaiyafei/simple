<template>
  <div class="login">
    <LoginUserName
      ref="LoginUserName"
      @beginlogin="beginLogin"
    />
    <LoginPassword
      ref="LoginPassword"
      @beginlogin="beginLogin"
    />
    <LoginBtn @beginlogin="beginLogin" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginUserName from '@/components/LoginComponents/LoginUserName.vue'; // @ is an alias to /src
import LoginPassword from '@/components/LoginComponents/LoginPassword.vue'; // @ is an alias to /src
import LoginBtn from '@/components/LoginComponents/LoginBtn.vue'; // @ is an alias to /src
const loginData = require('../../data/login');

@Component({
  components: {
    LoginUserName,
    LoginPassword,
    LoginBtn
  }
})
export default class Home extends Vue {
  beginLogin() {
    const username = this.$refs.LoginUserName.getValue();
    const password = this.$refs.LoginPassword.getValue();
    // 验证通过
    if (username === loginData.username && password === loginData.password) {
      sessionStorage.setItem('loginStatus', '1');
      // js跳转
      this.$router.push('/content');
    } else {
      if (!username) {
        alert('请输入用户名');
        return false;
      }
      if (!password) {
        alert('请输入密码');
        return false;
      }
      // 验证失败
      alert('用户名或密码错误');
      this.emptyVlaue();
      sessionStorage.setItem('loginStatus', '0');
    }
  }
  emptyVlaue() {
    this.$refs.LoginPassword.emptyValue();
  }
}
</script>

<style lang="scss">
.login {
  width: 400px;
  margin: 100px auto;
}
.login-item {
  margin-bottom: 30px;
  display: flex;
  width: 100%;
  position: relative;
  height: 30px;
  & > p {
    line-height: 30px;
  }
  & > input {
    position: absolute;
    left: 60px;
    width: 300px;
    height: 100%;
    padding: 0 10px;
  }
}
.login-btn {
  position: relative;
  margin-top: 60px;
  & > p {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 200px;
    background: #4198f6;
    color: #fff;
    padding: 10px;
    border-radius: 4px;
    transform: translateX(-50%);
    cursor: pointer;
  }
}
</style>
