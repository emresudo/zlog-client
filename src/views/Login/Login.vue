<script>
import { useToast } from "vue-toastification";
import validator from "validator";

import { login } from "../../api/login";
import store from "../../store";
import router from "../../router";

export default {
  name: "Login",
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      email: "",
      password: "",
      buttonDisabled: false,
    };
  },
  methods: {
    async login() {
      const userEmail = this.email.trim();
      const userPassword = this.password.trim();

      const emailLength = validator.isByteLength(userEmail, { min: 1 });
      const passwordLength = validator.isByteLength(userPassword, { min: 1 });

      if (!emailLength || !passwordLength) {
        console.log("x");
        return this.toast.warning("E-posta veya parola boş olamaz");
      }

      const emailValid = validator.isEmail(userEmail);

      if (!emailValid) {
        return this.toast.warning("Lütfen e-posta adresinizi düzgün yazınız");
      }

      this.buttonActiveStatus();

      const response = await login(userEmail, userPassword);

      this.toast(response.msg, { type: response.type });

      if (response.token) {
        store.dispatch("auth/setToken", response.token);
        router.push("/");
      }

      setTimeout(() => this.buttonActiveStatus(), 1500);
    },
    buttonActiveStatus() {
      this.buttonDisabled = !this.buttonDisabled;
    },
  },
};
</script>

<template>
  <div class="flex justify-center w-full">
    <div class="login-card">
      <div class="p-5 pt-0">
        <label class="block label">E-posta</label>
        <input
          type="email"
          class="input"
          v-model="email"
          autocomplete="email"
        />

        <label class="block label">Parola</label>
        <input
          type="password"
          class="input"
          v-model="password"
          autocomplete="current-password"
        />
      </div>
      <div class="flex flex-col p-5 pt-0">
        <button
          :disabled="buttonDisabled"
          :class="{ 'cursor-not-allowed': buttonDisabled }"
          class="button"
          @click="login()"
        >
          Giriş
        </button>
        <div class="login-or py-4 text-center">
          <span class="label bg-white relative p-3"> veya </span>
        </div>
        <button class="button google">
          <img class="mr-3" :src="require('../../assets/icons/google.svg')" />
          Google ile giriş yap
        </button>
        <router-link
          to="/reset-password"
          class="mt-4 text-gray-600 place-self-start"
        >
          Parolanızı mı unuttunuz?
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.login-card {
  @apply w-full max-w-md my-12 bg-white rounded-md border border-gray-200 shadow-lg;
}
.login-or {
  position: relative;
  z-index: 2;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    left: 0px;
    top: calc(50% - 1px);
    border: 1px solid rgb(229, 232, 237);
  }
}
.input {
  @apply mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm transition duration-150 ease-in-out;

  @screen sm {
    @apply text-sm leading-5;
  }
  &:focus {
    @apply outline-none border-blue-300;
  }
}
.label {
  @apply text-sm font-medium leading-5 text-gray-700 mt-5;
}
.button {
  @apply py-2 px-4 border border-transparent text-sm leading-5 font-medium;
  @apply rounded-md text-white bg-blue-500 shadow-sm transition ease-in-out transition-all duration-100;
  text-transform: uppercase;
  &:hover {
    @apply bg-blue-400;
  }
  &:focus {
    @apply outline-none;
  }
  &:active {
    @apply bg-blue-600;
  }

  &.google {
    @apply flex flex-row justify-center bg-transparent text-gray-700 border border-gray-400;
    &:hover {
      @apply bg-blue-600 text-white border-blue-600;
    }
    &:active {
      @apply bg-blue-700 text-white border-blue-700;
    }
  }
}
.bk {
  transition: all 0.1s ease-out;
}
</style>
