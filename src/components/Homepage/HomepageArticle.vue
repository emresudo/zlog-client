<script>
import moment from "moment";
export default {
  props: {
    post: Object,
  },
  methods: {
    // TODO Convert to Database Unix timestamp type
    fromNow(time) {
      return moment(time * 1e3)
        .locale("tr")
        .fromNow();
    },
    // TODO Convert to Database Unix timestamp type
    longTimeFormat(time) {
      return moment(time * 1e3)
        .locale("tr")
        .format("LLLL");
    },
  },
};
</script>

<template>
  <div class="article-card bg-white">
    <div class="font-bold text-xl mb-2">
      <router-link :to="'/content/' + post.link">{{ post.title }}</router-link>
    </div>
    <p class="text-gray-700 text-base">{{ post.fastContent }}</p>
    <div class="footer flex flex-col justify-between">
      <div class="pt-4 pb-2">
        <router-link
          v-for="tag in post.tags"
          v-bind:key="tag"
          :to="'/tag/' + tag"
          class="tag"
        >
          #{{ tag }}
        </router-link>
      </div>
      <div class="flex flex-row justify-between items-center">
        <div class="article-card-actions">
          <router-link
            class="article-card-actions__comment"
            :to="'/' + post.link + '#comments'"
          >
            <img :src="require('../../assets/icons/comment.svg')" />
            <span class="ml-1"> {{ post.commentsCount }} Comments </span>
          </router-link>
          <div class="article-card-actions__likes ml-0 sm:ml-4 mt-2 sm:mt-0">
            <svg
              class="article-card-actions__likes__icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="gray"
              viewBox="0 0 24 24"
              height="24"
              width="24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span class="ml-1"> {{ post.likesCount }} Likes </span>
          </div>
        </div>
        <div class="author-info">
          <img
            class="author-info__profile-photo"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/88534/dcb9e522-dd0a-4bdb-9ee8-9344a30c99a6.jpg"
            alt="author profile photo"
          />
          <div class="flex flex-col ml-2">
            <span>{{ post.author }}</span>
            <span :title="longTimeFormat(post.createdAt)">{{
              fromNow(post.createdAt)
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.article-card {
  @apply max-w-screen-xl rounded-sm overflow-hidden shadow border border-gray-100 mb-5 p-6;
}
.tag {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2;
}
.author-info {
  @apply flex flex-col items-center text-gray-600 float-right;
  &__profile-photo {
    @apply h-10 rounded-full;
  }
}
@screen sm {
  .author-info {
    @apply flex-row;
  }
}
.article-card-actions {
  @apply flex flex-col;
  & > * {
    @apply flex flex-row;
  }
  &__likes {
    cursor: pointer;
    &__icon {
      @apply transition-all duration-500 ease-in-out;
      &:hover {
        stroke: #ff4f60;
      }
      &--liked {
        stroke: #ff2339;
        fill: #ff2339;
      }
    }
  }
}
@screen sm {
  .article-card-actions {
    @apply flex-row;
  }
}
</style>
