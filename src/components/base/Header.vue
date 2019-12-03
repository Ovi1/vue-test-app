<template>
  <header  id="app-header" class="header flex align-center">
    <div class="logo">
      <img alt="Vue logo" src="../../assets/logo.png">
    </div>
    <div id="nav">
      <ul class="flex">
        <li class="mr-6">
          <router-link to="/">Home</router-link>
        </li>
        <li class="mr-6">
          <router-link to="/users">Users</router-link>
        </li>
        <li class="mr-6">
          <router-link to="/posts">Posts</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: [],
  mounted() {

  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #app-header {
    width: 100%;
    height: 50px;
    background-color: #ff4646;
    margin-bottom: 1rem;
    align-items: center;
    .logo {
      width: 50px;
      background: white;
      padding: 10px;
      margin-right: 50px;
    }
    #nav {
      li {
        a {
          color: #fff;
          &.router-link-exact-active {
            font-weight: 600;
          }
        }
      }
    }
  }
</style>
