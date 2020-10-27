<script>
export default {};
</script>

<template>
  <div>
    <router-link to="/login" class="auth-button login mr-2"
      >Giriş Yap</router-link
    >
    <router-link to="/register" class="auth-button register"
      >Kayıt Ol</router-link
    >
  </div>
</template>

<style lang="postcss">
.auth-button {
  @apply font-semibold px-4 py-2 rounded duration-200;
}
.login {
  @apply text-blue-500;
  &:hover {
    @apply bg-blue-100;
  }
  &:active {
    @apply bg-blue-200 text-blue-600;
  }
}
.register {
  @apply bg-blue-500 text-white;
  &:hover {
    @apply bg-blue-400;
  }
  &:active {
    @apply bg-blue-600;
  }
}
</style>
