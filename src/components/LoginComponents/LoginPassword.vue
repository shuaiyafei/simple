<template>
  <div class="login-item">
    <p>密码</p>
    <input
      type="password"
      v-model="password"
      @keyup.enter="beginLogin"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  password = '';
  @Emit('beginlogin')
  beginLogin() {}
  getValue() {
    return this.password;
  }
  emptyValue() {
    this.password = '';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>