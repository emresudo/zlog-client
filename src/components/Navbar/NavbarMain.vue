<script>
import { mapGetters, useStore } from "vuex";
import NavbarAuth from "./NavbarAuth";
import NavbarProfile from "./NavbarProfile";

export default {
  name: "Navbar",
  components: {
    NavbarAuth,
    NavbarProfile,
  },
  setup() {
    const store = useStore();
    return { store };
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },
};
</script>

<template>
  <div class="bg-white border-solid border-b-2 justify-center flex">
    <div class="navbar container max-w-screen-lg">
      <router-link to="/">
        <h1 class="text-2xl font-medium">Zlog</h1>
      </router-link>
      <NavbarAuth v-if="!isAuthenticated" />
      <NavbarProfile v-if="isAuthenticated" />
    </div>
  </div>
</template>

<style lang="postcss">
.navbar {
  @apply h-16 flex items-center justify-between;
}
</style>
