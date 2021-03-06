import аxios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    menuShown: false,
    modalVisible: false,
    modalImage: '',
    blocks: {},
    paths: {},
    cities: {},
    showMessage: false,
    showOrderSuccess: false,
    showSearchSuccess: false,
    showSearch: false,
  },
  mutations: {
    setMenuState: (state, shown) => {
      state.menuShown = shown;
    },
    setMenuClosed: (state, shown) => {
      state.menuShown = !shown;
    },
    setModalState: (state, payload) => {
      state.modalVisible = payload.modal;

      if (state.modalVisible) {
        document.querySelector("body").classList.add("modal__open");
      } else {
        document.querySelector("body").classList.remove("modal__open");
      }

    },
    setData(state, payload) {
      for (let key in payload) {
        Vue.set(state, key, payload[key]);
      }
    },

    ModalClose: (state) => {
      state.showOrderSuccess = false;
      state.showSearchSuccess = false;
      state.showSearch = false;
    },
    OrderSuccessOpen: (state) => {
      state.showOrderSuccess = true;
    },
    SearchOpen: (state) => {
      state.showSearch = true;
    },
  },
  actions: {},
  getters: {}
})

export default store;
