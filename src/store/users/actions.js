import { SET_USERS_M } from '../mutation-types';
import ApiClient from '../../apiClient';

const api = new ApiClient();
export function fetchUsers({state, commit }) {
  if (state.data.length) {
    return;
  }
  api.getUsers()
    .then((data) => {
      commit(SET_USERS_M, { data });
    }).catch((error) => {
    console.log(error)
  });
}
