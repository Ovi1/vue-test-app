<template>
  <div class="posts flex">
    <table class="table-auto text-left w-full border-collapse">
      <thead>
      <tr>
        <th class="border px-4 py-2">Profile</th>
        <th class="border px-4 py-2">Name</th>
        <th class="border px-4 py-2">Username</th>
        <th class="border px-4 py-2">Email</th>
        <th class="border px-4 py-2">Phone</th>
        <th class="border px-4 py-2">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in data" v-bind:key="user.id">
        <td class="border px-4 py-2">
          <router-link :to="'users/'+ user.id">
            <img class="rounded-full " src="https://api.adorable.io/avatars/30/abott@adorable.png"
                 :alt="user.name">
          </router-link>
        </td>
        <td class="border px-4 py-2">{{user.name}}</td>
        <td class="border px-4 py-2">{{user.username}}</td>
        <td class="border px-4 py-2">{{user.email}}</td>
        <td class="border px-4 py-2">{{user.phone}}</td>
        <td class="border px-4 py-2">
          <button class="btn">noop</button>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  // @ is an alias to /src
  import { createNamespacedHelpers, mapActions } from 'vuex';

  const { mapGetters } = createNamespacedHelpers('users');
  export default {
    name: 'users',
    components: {},
    data: function () {
      return {};
    },
    mounted() {
      this.fetchUsers();
    },
    methods: {
      ...mapActions('users', ['fetchUsers'])
    },
    computed: {
      ...mapGetters([
        'data'
      ])
    }
  };
</script>
