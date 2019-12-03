export function data(state) {
    return state.data;
}

export const getSingleUser = (state) => (id) => {
  return state.data.filter((user) => {
    return Number(user.id) === Number(id);
  }).pop();
};
