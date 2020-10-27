<script>
export default {
  data() {
    return {
      menus: [
        { key: "", value: "Zlog`s" },
        { key: "hype", value: "Popüler" },
        { key: "images", value: "Resimler" },
        { key: "videos", value: "Videolar" },
      ],
    };
  },
};
</script>

<template>
  <ul class="flex flex-col">
    <li v-for="menu in menus" :key="menu.key">
      <router-link :to="'/' + menu.key"> #{{ menu.value }}</router-link>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
ul li {
  @apply text-gray-700 flex-1;
}
ul li a {
  @apply pl-4 block py-2;
}
ul li a:hover {
  @apply bg-gray-300;
}
</style>
