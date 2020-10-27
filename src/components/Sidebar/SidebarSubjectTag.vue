<script>
export default {
  data() {
    return {
      tags: [
        { key: "vuejs", value: "Vuejs" },
        { key: "mongodb", value: "Mongodb" },
        { key: "balloon", value: "Balloon" },
        { key: "graphql", value: "GraphQl" },
      ],
    };
  },
};
</script>

<template>
  <hr class="my-4" />
  <h4>Etiketler</h4>
  <ul class="flex flex-col scrolling-touch overflow-auto h-80">
    <li v-for="tag in tags" :key="tag.key">
      <router-link :to="'/tag/' + tag.key"> #{{ tag.value }}</router-link>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
.h-80 {
  height: 20rem;
}
h4 {
  @apply font-medium pl-2 mb-2;
}
ul li {
  @apply text-gray-700;
}
ul li a {
  @apply pl-4 block py-2;
}
ul li a:hover {
  @apply bg-gray-300;
}
</style>
