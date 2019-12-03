<template>
  <footer class="flex items-center justify-center">2019</footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  footer {
    width: 100%;
    height: 40px;
    background-color: #333333;
    color: #ffffff;
    margin-top: 50px;
  }
</style>
