// import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//Vue.use(Vuex)
const appConfig = require('../appconfig');
let serverUrl = appConfig.serverUrl;

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
          return data
        })
    },
    login ({ commit }, credentials) {
      return axios
        .post(serverUrl + 'login', credentials)
        .then(({ data }) => {
            console.log(data);
          commit('SET_USER_DATA', data)
           return data;
        })

    },
    logout({commit}, credentials) {
        axios
        .post(serverUrl + 'logout', credentials)
        .then(({data}) => {
          console.log(data);

        })
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