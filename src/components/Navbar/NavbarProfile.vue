<script>
import { mapActions, mapGetters } from "vuex";
import { useToast } from "vue-toastification";
export default {
  setup() {
    const toast = useToast();

    return { toast };
  },
  data() {
    return {
      isMenu: false,
    };
  },
  computed: {
    ...mapGetters("auth", ["getUser"]),
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    // TODO Add logout notification
    dropdownToggle() {
      this.isMenu = !this.isMenu;
    },
  },
};
</script>

<template>
  <div class="flex items-center">
    <router-link
      to="/new-article"
      class="rounded-md bg-blue-500 text-white py-2 px-3 mr-4"
    >
      Yeni yazı
    </router-link>

    <button class="notification">
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    </button>
    <div class="ml-3 relative">
      <button
        class="flex items-center text-sm rounded-full transition duration-150"
        @click="dropdownToggle"
      >
        <img
          class="h-8 w-8 rounded-full"
          :src="getUser.profilePhoto"
          alt="Profil fotoğrafı"
        />
      </button>

      <div v-show="isMenu" @click="dropdownToggle()" class="dropdown">
        <div class="py-1 rounded-md bg-white shadow-xs z-10 relative">
          <router-link :to="'/profile'" class="dropdown-item"
            >Profilim</router-link
          >
          <button @click="logout()" class="dropdown-item">Çıkış yap</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.dropdown {
  @apply absolute right-0 mt-2 w-48 rounded-md shadow-lg transition ease-in-out;
  &-item {
    @apply block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out;
    &:hover,
    &:focus {
      @apply bg-gray-100;
    }
  }
  &::before {
    content: "";
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
  }
}
.notification {
  @apply p-1 text-gray-400 rounded-full transition duration-150 ease-in-out;
  &:hover {
    @apply text-gray-500;
  }
  &:focus {
    @apply outline-none text-white bg-gray-700;
  }
}
</style>
