import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Site from './components/Site';
import Introduction from './components/Introduction';
Vue.use(Router);
const routes = [
    { path: '/', components: Home },
    { path: '/proposal', components: Site },
    { path: '/proposal/intro', components: Introduction }
  ];

  
export default new Router({
    routes: routes
})
