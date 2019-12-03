import { SET_POSTS_M } from '../mutation-types';
import ApiClient from '../../apiClient';

const api = new ApiClient();

export function fetchPosts({ state, commit }) {
  api.getPosts()
    .then((data) => {
      commit(SET_POSTS_M, { data });
    })
    .catch((error) => {
      console.log(error);
    });
}
