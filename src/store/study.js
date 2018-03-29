const state = {
  count: 0
};

const getters = {
  count: state => state.count
};

const mutations = {
  increment: state => state.count++,
  decrement: state => state.count--
};

const actions = {
  asyncIncrement({commit}) {
    setTimeout(() => {
      commit('increment');
    }, 1000)
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
