<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <router-link :to="/posts/+id">
      <img class="w-full" src="https://loremflickr.com/420/300" alt="Sunset in the mountains">
      <div class="px-6 py-4">
        <div class="text-gray-900 font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 text-base">{{ body | truncate(100) }}</p>
      </div>
      <div class="px-6 py-4">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'PostCard',
    props: {
      id: [String, Number],
      title: String,
      body: String,
      userId: [String, Number],
    },
  };
</script>

<style scoped lang="scss">

</style>
