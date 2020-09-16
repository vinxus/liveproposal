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
import Logout from './components/Logout';
import Admin from './components/Admin';
import DashBoard from './components/DashBoard';

Vue.use(Router);
const routes = [

     { path: '/', component: Home },
     { path: '/about', component: About },
     { path: '/landing', component: LiveProposal },
     { path: '/proposal', component: Site, meta: { requiresAuth: true} },
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
        path: '/logout', 
        name: 'logout',
        component: Logout, 
        meta: { 
            requiresAuth: true
       
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
  let router = new Router({
    mode: 'history',
    routes: routes
    
  })
  router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            if(to.matched.some(record => record.meta.is_admin)) {
                if(user.is_admin == 1){
                    next()
                }
                else{
                    next({ name: 'userboard'})
                }
            }else {
                next()
            }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('jwt') == null){
            next()
        }
        else{
            next({ name: 'Dashboard'})
        }
    }else {
        next()
    }
})

// export default router  
export default router;
