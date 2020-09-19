<template>
  <div id="app">    
    <NavBar />
    <!-- <img alt="EW3 logo" src="./assets/logo.png"> -->
    <router-link to="/introduction">Introduction</router-link> | 
    <router-link to="/landing">Proposal</router-link> | 
    <router-link to="terms">Terms and Conditions</router-link>
    
    <router-view />

    <FooterBar />
    
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
import { authComputed } from './vuex/helpers.js';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar
  },
  props: {
    loginState: Boolean
  },
  computed: {
            ...authComputed
        },
        methods: {
          logout() {
            console.log('Logged out');
          }
        }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.topmenu {
  list-style: none;
  
}
.topmenu > li {
  display: inline-block;
  padding: 5px;

}
</style>
