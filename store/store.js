import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: [
      // {
      //   tag: "CpSelector",
      //   config_json: {},
      // },
    ],
    currentCompTag: "CpSelector",
    activeComp: {},
  },
  getters: {
    page: (state) => state.page,
    activeComp: (state) => state.activeComp,
  },
  mutations: {
    ADD_COMP(state, comp) {
      state.page.push(comp);
    },
    ACTIVE_COMP(state, comp) {
      state.activeComp = comp;
    },
  },
});
