<template>
  <div class="Post">
    <h1 class="h1">{{getPost().title}}</h1>
    <pre>
      {{getPost()}}
    </pre>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';

  const { mapGetters } = createNamespacedHelpers('posts');

  export default {
    name: 'Post',
    data: function () {
      return {};
    },
    mounted() {
      if (!this.getPost())  {
        this.$router.push('/posts');
      }
    },
    methods: {
      getPost() {
        return this.post(this.$route.params.id);
      }
    },
    computed: {
      ...mapGetters({ post: 'getSinglePost' })
    }
  };
</script>
