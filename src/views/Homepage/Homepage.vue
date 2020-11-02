<script>
import Article from "../../components/Homepage/HomepageArticle";
import SidebarNavigation from "../../components/Sidebar/SidebarNavigation";
import SidebarSubjectTag from "../../components/Sidebar/SidebarSubjectTag";

export default {
  name: "Homepage",
  components: {
    Article,
    SidebarNavigation,
    SidebarSubjectTag,
  },
  data() {
    return {
      postData: [
        {
          id: "55vfgsd25d2s",
          link: "lorem-ipsum-dolar-sit-amet",
          title: "Lorem ipsum dolor sit amet.",
          fastContent:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
          tags: ["photography", "hybrid", "software"],
          commentsCount: 24,
          likesCount: 24,
          author: "Emre Doe",
          createdAt: 1602460800,
        },
        {
          id: "55vfgsd25d2s",
          link: "lorem-ipsum-dolar-sit-amet",
          title: "Lorem ipsum dolor sit amet.",
          fastContent:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
          tags: ["photography", "hybrid", "software"],
          commentsCount: 24,
          likesCount: 24,
          author: "Emre Doe",
          createdAt: 1602460800,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="max-w-screen-lg w-full mx-auto flex flex-row mt-5">
    <div class="sidebar w-40">
      <SidebarNavigation />
      <SidebarSubjectTag />
    </div>
    <div class="content w-full px-5">
      <Article v-for="post in postData" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
