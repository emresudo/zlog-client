<script>
import { useToast } from "vue-toastification";
import validator from "validator";

import { Register } from "../../api/register";

export default {
  name: "Register",
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      inputErrors: {},
      buttonDisabled: false,
    };
  },
  methods: {
    async register() {
      this.inputErrors = {};

      const name = this.fullname;
      const username = this.username;
      const email = this.email;

      const nameLength = validator.isByteLength(name, { min: 5 });
      if (!nameLength) {
        this.inputErrors = { fullname: true };
        return this.toast.warning("İsim soyisim 5 karakterden az olamaz");
      }

      const usernameLength = validator.isByteLength(username, { min: 3 });
      if (!usernameLength) {
        this.inputErrors = { username: true };
        return this.toast.warning("Kullanıcı adı 3 karakterden az olamaz");
      }

      const emailLength = validator.isByteLength(email, { min: 1 });
      if (!emailLength) {
        this.inputErrors = { email: true };
        return this.toast.warning("E-posta adresi boş olamaz");
      }

      const emailValid = validator.isEmail(email);
      if (!emailValid) {
        this.inputErrors = { email: true };
        return this.toast.warning("E-posta adresiniz uygun değil kontrol edin");
      }

      const passwordLength = validator.isByteLength(this.password, { min: 6 });
      if (!passwordLength) {
        this.inputErrors = { password: true, confirmPassword: true };
        return this.toast.warning("Parolanız minimum 6 karakter olmalıdır");
      }

      if (this.password !== this.confirmPassword) {
        this.inputErrors = { password: true, confirmPassword: true };
        return this.toast.warning("Şifreleriniz uyuşmamaktadır");
      }

      this.buttonActiveStatus();

      const RegisterModel = {
        fullname: this.fullname,
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };

      const response = await Register(RegisterModel);
      this.toast(response.msg, { type: response.type });

      setTimeout(() => {
        this.buttonActiveStatus();
      }, 1500);
    },
    buttonActiveStatus() {
      this.buttonDisabled = !this.buttonDisabled;
    },
  },
};
</script>

<template>
  <div class="flex justify-center w-full">
    <div class="register-card">
      <div class="p-5 pt-0">
        <label class="block label">İsim soyisim</label>
        <input
          type="text"
          class="input"
          autocomplete="name"
          v-model.trim="fullname"
          :class="{ 'border-red-400': inputErrors.fullname }"
        />

        <label class="block label">Kullanıcı adı</label>
        <input
          type="text"
          class="input"
          autocomplete="nickname"
          v-model.trim="username"
          :class="{ 'border-red-400': inputErrors.username }"
        />

        <label class="block label">E-posta</label>
        <input
          type="email"
          class="input"
          autocomplete="email"
          v-model.trim="email"
          :class="{ 'border-red-400': inputErrors.email }"
        />

        <label class="block label">Parola</label>
        <input
          type="password"
          class="input"
          autocomplete="new-password"
          v-model="password"
          :class="{ 'border-red-400': inputErrors.password }"
        />

        <label class="block label">Parola tekrar</label>
        <input
          type="password"
          class="input"
          autocomplete="new-password"
          v-model="confirmPassword"
          :class="{ 'border-red-400': inputErrors.confirmPassword }"
        />
      </div>
      <div class="flex flex-col p-5 pt-0">
        <button
          class="flex-grow button"
          :disabled="buttonDisabled"
          :class="{ 'cursor-not-allowed': buttonDisabled }"
          @click="register()"
        >
          Kayıt Ol
        </button>

        <div class="register-or py-4 text-center">
          <span class="label bg-white relative p-3"> veya </span>
        </div>

        <button class="button google">
          <img class="mr-3" :src="require('../../assets/icons/google.svg')" />
          Google ile kayıt ol
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.register-card {
  @apply w-full max-w-md my-12 bg-white rounded-md border border-gray-200 shadow-lg;
}
.register-or {
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
  @apply mt-1 block w-full py-2 px-3 border rounded-md shadow-sm transition duration-150 ease-in-out;
  &:focus {
    @apply outline-none border-blue-300;
  }
}
.label {
  @apply text-sm font-medium leading-5 text-gray-700 mt-5;
}
.button {
  text-transform: uppercase;
  @apply py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-500 shadow-sm transition ease-in-out;
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
</style>
