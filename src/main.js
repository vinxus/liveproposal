import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import Axios from "axios";
import store from './vuex/store'

Vue.prototype.$http = Axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  data() {
    return {pageKey: 0}
  },
  render: h => h(App)
}).$mount('#app')
