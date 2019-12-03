<template>
  <main id="app">
    <AppHeader/>
    <div class="pages">
      <router-view/>
    </div>
    <AppFooter/>
  </main>
</template>
<script>

  import AppHeader from './components/base/Header.vue';
  import AppFooter from './components/base/Footer.vue';

  export default {
    components: {
      AppHeader,
      AppFooter,
    },
  };
</script>
<style lang="scss">
  @import '~reset-css';
  @import "~tailwindcss/dist/base";
  // @Todo Not good enough
  @import "~tailwindcss/dist/components";
  // @Todo Not good enough
  @import "~tailwindcss/dist/utilities"; // @Todo Not good enough

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;
    width: 100%;
    height: 100%;
  }

  #nav {
    .router-link-exact-active {
      color: #42b983;
    }
  }
</style>
