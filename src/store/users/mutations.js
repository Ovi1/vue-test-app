import {SET_USERS_M} from '../mutation-types';

export default {
    [SET_USERS_M](state, { data }) {
        state.data = data;
    },
};
