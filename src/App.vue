<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/introduction">Introduction</router-link> | 
      <router-link to="/landing">Proposal</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="terms">Terms and Conditions</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
    <!-- <LiveProposal msg="Business proposal for Solar Power Installation" /> -->
    
    <!-- <ToDoList title="First Item" /> -->
    <router-view />
  </div>
</template>

<script>
// import LiveProposal from './components/LiveProposal.vue';
// import ToDoList from './components/ToDoList.vue';

export default {
  name: 'App',
  components: {
    // LiveProposal,
    // ToDoList,
    
  },

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
</style>
