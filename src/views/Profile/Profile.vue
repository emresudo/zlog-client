<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["getUser"]),
  },
};
</script>

<template>
  <div class="flex justify-center bg-gray-900 h-32">
    <div class="container flex justify-center relative">
      <div class="profile-photo">
        <img
          class="rounded-full h-32"
          :src="getUser.profilePhoto"
          alt="Profile Photo"
        />
      </div>
    </div>
  </div>
  <div class="max-w-screen-lg w-full mx-auto flex content-center mt-5">
    <div class="container">
      <div class="profile-details flex justify-end">
        <router-link class="button" to="/edit-profile"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width="18"
            height="18"
            style="margin-right: 5px"
          >
            <path
              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
            />
          </svg>
          <span class="hidden md:block"> Profili düzenle</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.button {
  @apply font-semibold px-4 py-2 rounded duration-200 flex items-center;
  @apply bg-blue-500 text-white;
  &:hover {
    @apply bg-blue-400;
  }
  &:active {
    @apply bg-blue-600;
  }
}
.profile-photo {
  display: block;
  position: absolute;
  top: 60px;
}
</style>
