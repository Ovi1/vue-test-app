export function data(state) {
  return state.data;
}

export const getSinglePost = (state) => (id) => {
  return state.data.filter((post) => {
    return Number(post.id) === Number(id);
  }).pop();
};

