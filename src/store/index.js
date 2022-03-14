import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import realEstates from "./modules/vueCosmetic";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    vueCosmetic,
  },
});
