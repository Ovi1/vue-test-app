<template>
  <div class="User">
    <h1 class="h1">{{getUser().name}}</h1>
    <pre>
      {{ getUser() }}
    </pre>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapGetters } = createNamespacedHelpers('users');

  export default {
    name: 'User',
    data: function () {
      return {};
    },
    mounted() {
      if (!this.getUser()) {
        this.$router.push('/users');
      }
    },
    methods: {
      getUser() {
        return this.user(this.$route.params.id);
      }
    },
    computed: {
      ...mapGetters({user: 'getSingleUser'})
    }
  };
</script>
