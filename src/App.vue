<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
    <LiveProposal msg="Business proposal for Solar Power Installation" />
    
    <ToDoList title="First Item" />
    
  </div>
</template>

<script>
import LiveProposal from './components/LiveProposal.vue'
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    LiveProposal,
    ToDoList,
    
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
</style>
