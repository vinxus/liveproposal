import { createApp, h } from 'vue';
import App from './App.vue'
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import router from "./router";
import axios from "axios";
import store from './vuex/store'

//Vue.prototype.$http = axios;
const requireComponent = require.context('./components', false, /Base[A-Z]\w+\.(vue|js)$/)

const app = createApp({
  created() {
    const userString = localStorage.getItem('user')
    if(userString) {
      const userData = JSON.parse(userString);
      this.$store.commit('SET_USER_DATA', userData); // restore user data with vuex
    }
    axios.interceptors.response.use(
      response => response, 
        
           error => {
             
             console.log(error)
             if (typeof error.response !== 'undefined' && error.response.status == 401) { // if we catch a 401 error
              console.log(error) 
              //this.$store.dispatch('logout') // force a log out

             }
             return Promise.reject(error)  // reject the Promise, with the erro as the reason
           }
    )
  },

  render: () => h(App)
})
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  app.component(componentName, componentConfig.default || componentConfig)
})
app.use(router).use(store).mount('#app')
