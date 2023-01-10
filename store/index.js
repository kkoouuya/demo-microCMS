export const state = () => ({
  blogs: [],
});

export const mutations = {
  setBlogs(state, blogs) {
    state.blogs = blogs;
  },
};

export const actions = {
  setSelectedDay({ commit }, blogs) {
    commit("setBlogs", blogs);
  },
};
