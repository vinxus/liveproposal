// import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//Vue.use(Vuex)
let serverUrl = 'http://localhost:3030';
export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      localStorage.setItem('jwt', JSON.stringify(userData.token))
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
      }`
    },
    CLEAR_USER_DATA () {
        localStorage.removeItem('user')
        localStorage.removeItem('jwt')     
    },
    LOGOUT (state) {
        state.user = null
        localStorage.removeItem('user')
        localStorage.removeItem('jwt')
        axios.defaults.headers.common['Authorization'] = null
        location.reload()
    }
  },
  actions: {
    register ({ commit }, credentials) {
      return axios
        .post(serverUrl + 'register', credentials)
        .then(({ data }) => {
            console.log(data);
          commit('SET_USER_DATA', data)
        })
    },
    login ({ commit }, credentials) {
      return axios
        .post('//localhost:3030/login', credentials)
        .then(({ data }) => {
            console.log(data);
          commit('SET_USER_DATA', data)
           return data;
        })

    },
    logout({commit}) {
        commit('LOGOUT')
    },
    storeUserData({ commit }, userData){
        console.log('STORE USER DATA');
        commit('SET_USER_DATA', userData);
    }
  },
  getters: {
    loggedIn (state) {
      return !!state.user
    }
  }
})