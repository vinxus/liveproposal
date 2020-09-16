import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Site from './components/Site.vue';
import LiveProposal from './components/LiveProposal.vue';
import Introduction from './views/Introduction.vue';
import TermsAndConditions from './views/TermsAndConditions.vue';
import About from './views/About.vue';
import Register from './views/Register';
import Login from './components/Login';
import Admin from './components/Admin';
import DashBoard from './components/DashBoard';

Vue.use(Router);
const routes = [

     { path: '/', component: Home },
     { path: '/about', component: About },
     { path: '/landing', component: LiveProposal },
     { path: '/proposal', component: Site },
     { path: '/introduction', component: Introduction },
     { path: '/terms', component: TermsAndConditions },
     { 
         path: '/login', 
         component: Login, 
         meta: { 
             guest: true 
        
         } 
     },
     {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            guest: true
        }
    },
    {
        path: '/dashboard',
        name: 'userboard',
        component: DashBoard,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
        meta: {
            requiresAuth: true,
            is_admin : true
        }
    },
  ];

  
export default new Router({
    mode: 'history',
    routes: routes
})
