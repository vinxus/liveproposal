import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Site from './components/Site.vue';
import LiveProposal from './components/LiveProposal.vue';
import Introduction from './views/Introduction.vue';
import TermsAndConditions from './views/TermsAndConditions.vue';
import About from './views/About.vue';
Vue.use(Router);
const routes = [
     { path: '/', component: Home },
     { path: '/about', component: About },
     { path: '/landing', component: LiveProposal },
     { path: '/proposal', component: Site },
     { path: '/introduction', component: Introduction },
     { path: '/terms', component: TermsAndConditions }
  ];

  
export default new Router({
    routes: routes
})
