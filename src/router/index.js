import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue'),
  },
  {
    path: '/users/:id',
    name: 'Single User',
    component: () => import(/* webpackChunkName: "user" */ '../views/User/User.vue'),
  },
  //@Todo should be as children
  {
    path: '/posts',
    name: 'Posts',
    component: () => import(/* webpackChunkName: "posts" */ '../views/Posts.vue'),
  },
  //@Todo should be as children
  {
    path: '/posts/:id',
    name: 'Single Post',
    component: () => import(/* webpackChunkName: "post" */ '../views/Post/Post.vue'),
  },
  { path: '*', redirect: '/users' },
];

const router = new VueRouter({
  routes,
});

export default router;
