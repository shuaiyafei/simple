<template>
  <div class="login-item">
    <p>用户名</p>
    <input
      type="text"
      v-model="username"
      @keyup.enter="beginLogin"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  username = '';
  @Emit('beginlogin')
  beginLogin() {};
  getValue() {
    return this.username;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
