import {SET_POSTS_M} from '../mutation-types';

export default {
    [SET_POSTS_M](state, { data }) {
        state.data = data;
    },
};
