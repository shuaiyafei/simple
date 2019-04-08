<template>
  <div class="login-btn">
    <p @click="beginLogin">登录</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  @Prop() private msg!: string;
  @Emit('beginlogin')
  beginLogin () {};
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
