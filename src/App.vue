<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="nav">
      <ul class="topmenu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/introduction">Introduction</router-link></li>
        <li><router-link to="/landing">Proposal</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="terms">Terms and Conditions</router-link></li>
        <li v-if="loggedIn == false"><router-link  to="/login">Login</router-link></li>
        <li v-if="loggedIn == true"><router-link  to="/logout">Log out</router-link> </li>
        <li v-if="loggedIn == false" ><router-link  to="/register"> Register </router-link></li>
      </ul>
      
    </div>

    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    // LiveProposal,
    // ToDoList,
    
  },
  data(){
    // check for logged In
    let loginState = false;
    if(localStorage.getItem("user")) {
      loginState = true;
    }
    return {
      loggedIn: loginState
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
