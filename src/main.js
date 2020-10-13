import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import axios from "axios";
import store from './vuex/store'

Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created() {
    const userString = localStorage.getItem('user')
    if(userString) {
      const userData = JSON.parse(userString);
      this.$store.commit('SET_USER_DATA', userData); // restore user data with vuex
    }
    axios.interceptors.response.use(
      response => response, 
           error => {
             if (error.response.status == 401) { // if we catch a 401 error
               this.$store.dispatch('logout') // force a log out

             }
             return Promise.reject(error)  // reject the Promise, with the erro as the reason
           }
    )
  },

  render: h => h(App)
}).$mount('#app')
