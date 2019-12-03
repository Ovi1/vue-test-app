<template>
  <div class="posts flex flex-wrap ml-auto mr-auto justify-center"
       v-if="true">
    <div v-for="post in data" v-bind:key="post.id">
      <PostCard
        :id="post.id"
        :title="post.title"
        :body="post.body"
        :user-id="post.userId"
      />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import PostCard from '../components/posts/PostCard';
  import { createNamespacedHelpers, mapActions } from 'vuex';
  const { mapGetters } = createNamespacedHelpers('posts');

  export default {
    name: 'posts',
    components: {
      PostCard
    },
    data: function () {
      return {};
    },
    mounted() {
      this.fetchPosts();
    },
    methods: {
      ...mapActions('posts', ['fetchPosts'])
    },
    computed: {
      ...mapGetters([
        'data'
      ])
    }
  };
</script>
<style scoped lang="scss">
  .posts {
    div {
      + div {
        margin-left: .5rem;
        margin-bottom: .8rem;
      }
    }
  }
</style>
