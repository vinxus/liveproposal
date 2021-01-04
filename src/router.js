//import Vue from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Site from './components/Site.vue';
import LiveProposal from './components/LiveProposal.vue';
import Introduction from './views/Introduction.vue';
import TermsAndConditions from './views/TermsAndConditions.vue';
import About from './views/About.vue';
import RegisterUser from './views/RegisterUser';
import Login from './components/Login';
import Logout from './components/Logout';
import Admin from './components/Admin';
import DashBoard from './components/DashBoard';
import UserBoard from './components/UserBoard';
import User from './components/User';
import NotFoundComponent from './components/NotFoundComponent';
import ProposalsIndex from './components/ProposalsIndex';
import NewProposalProcess from './components/NewProposalProcess';

const routes = [

     { path: '/', component: Home },
     { path: '/about', component: About },
     { 
         path: '/landing', 
         component: LiveProposal, 
        //  meta: {
        //     requiresAuth: true
        //  }, 
     },
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
        component: RegisterUser,
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
        path: '/userboard/:username',
        name: 'userboard',
        component: UserBoard,
        meta: {
            requiresAuth: true
        },
        props: true
    },
    {
        path: '/user/:username',
        name: 'user',
        component: User,
        meta: {
            requiresAuth: true
        },
        props: true
    },
    {
        path: '/dashboard/:username',
        name: 'dashboard',
        component: DashBoard,
        meta: {
            requiresAuth: true
        },
        props: true
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
    {
        path: '/proposals',
        name: 'proposals',
        component: ProposalsIndex,
        // meta: {
        //     requiresAuth: true,
        //     is_admin : true
        // }
    },
    {
        path: '/newproposals',
        name: 'newproposals',
        component: NewProposalProcess,

    },
    // { path: '*', component: NotFoundComponent },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundComponent },
    { path: '/:pathMatch(.*)', name: 'bad-not-found', component: NotFoundComponent },
  ];
  let router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
    
  })
//   router.beforeEach((to, from, next) => {

//   })
  router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('user') == null) {

            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            if(to.matched.some(record => record.meta.is_admin)) {
                if(user.is_admin == 1){
                    next()
                    return;
                }
                else{
                    next({ name: 'userboard', username: user.email })
                }
            }else {
                next()
            }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('jwt') == null){
            next()
        }
        else {
            // TODO: FIX THIS - it should be going to somewhere - I don't know yet
            // next({ name: 'dashboard'})
            next({ name: 'dashboard', username: 'Guest'})
        }
    }else {
        next()
    }
})

export default router;
