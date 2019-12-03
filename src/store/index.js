import Vue from 'vue';
import Vuex from 'vuex';
import users from './users';
import posts from './posts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    posts
  }
});
