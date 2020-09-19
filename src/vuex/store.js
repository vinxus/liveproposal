import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
      }`
    }
  },
  actions: {
    register ({ commit }, credentials) {
      return axios
        .post('//localhost:3030/register', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    },
    login ({ commit }, credentials) {
      return axios
        .post('//localhost:3030/login', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    },
    storeUserData({ commit }, userData){
        console.log('STORE DATA');
        commit('SET_USER_DATA', userData);
      }
  },
  getters: {
    loggedIn (state) {
      return !!state.user
    }
  }
})