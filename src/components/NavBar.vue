<template>
    <div id="nav" class="nav">
        <router-link to="/">Home</router-link>
        <router-link v-if="loggedIn" :to="{name: 'dashboard', params: {username: this.getUser().name}}">Dashboard</router-link> 
      <nav class="topmenu">        
        
        <router-link v-if="!loggedIn" to="/login" class="button">Login</router-link> 
        
        <button v-else type="button" class="logoutButton" @click="logout">
          logout
        </button> | 
        <router-link v-if="!loggedIn" to="/register"> Register </router-link>
      </nav>
      
    </div>
</template>

<script>
    import { authComputed } from '../vuex/helpers.js';
    
    export default {
        computed: {
            ...authComputed
        },
        methods: {
          logout() {
            console.log('Logged out');
            this.$store.dispatch('logout');
          },
          getUser() {
            const userString = localStorage.getItem('user');
            let userData = JSON.parse(userString);
            
            return userData.user;
          }
        }

    }
</script>

<style scoped>
/* @import './assets/styles/global.scss'; */
.nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      background-color: #39b982;
      position: absolute;
      top: 0px;
      width: 100%;
    }
    .nav > .brand {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 1.5em;
      color: #39b982;
      text-decoration: none;
    }
    .nav .nav-item {
      box-sizing: border-box;
      margin: 0 5px;
      color: rgba(0, 0, 0, 0.5);
      text-decoration: none;
    }
    .nav .nav-item.router-link-exact-active {
      color: #39b982;
      border-bottom: solid 2px #39b982;
    }
    button,
    .button {
      margin-left: auto;
      background: white;
      text-decoration: none;
      color: #2c3e50;

      &.router-link-active {
        color: #2c3e50;
      }
    }

    .logoutButton {
      cursor: pointer;
    }

</style>