export default {
  namespaced: true,
  state: {
    isLoading: false,
    fullPage: true
  },
  mutations: {
    START_LOADING (state) {
      state.isLoading = true;
    },
    CLOSE_LOADING (state) {
      state.isLoading = false;
    },
  },
  actions: {}
};
