<template>
  <div id="app">    
    <NavBar />
    <!-- <img alt="EW3 logo" src="./assets/logo.png"> -->
    <router-link to="/introduction">Introduction</router-link> | 
    <router-link to="/landing">Proposal</router-link> | 
    <router-link to="terms">Terms and Conditions</router-link> |
    <router-link to="/proposals">Show proposals</router-link>
    <router-view />

    <FooterBar />
    
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar
  },
  props: {
    loginState: Boolean
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
  .mb-0 {
          margin-bottom: 0;
      }

    /* Modal */

    .modal, .overlay {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
    }
    .overlay {
        opacity: 0.5;
        background-color: black;
    }
    .modal-card {
        position: relative;
        max-width: 80%;
        margin: auto;
        margin-top: 30px;
        padding: 20px;
        background-color: white;
        min-height: 40%;
        max-height: 70%;
        z-index: 10;
        opacity: 1;
    }
    /* Proposal Table */
    .proposals-table {
        max-width: 1000px;
        margin: auto;
        border-collapse: collapse;
    }
    .proposals-table tr.checked {
        background-color: #EEE;
    }
    .proposals-table tr {
        height: 40px;
    }
    .proposals-table td {
        border-bottom: 1px solid black;
        padding: 5px;
        text-align: left;
    }
    .proposals-table tr:first-of-type td {
        border-top: 1px solid black;
    }
    .proposals-table td p {
        max-height: 1.2em;
        overflow-y: hidden;
        margin: 0;
    }

    .proposals-table td.date {
        width: 120px;
    }

    /* Bulk Action Bar */
    /* .bulk-action-bar {
        width: 100%;
        max-width: 1000px;
        margin: auto;
        text-align: left;
        padding-bottom: 8px;
    } */

    .bulk-action-bar input {
        margin: 5px;
    }

    .bulk-action-bar .checkbox {
        margin-right: 6px;
        margin-left: 3px;
    }
    /* Global Styles */

    button {
      font-size: 16px;
      padding: 8px;
      border-radius: 3px;
      margin: 5px 10px 5px 0px;
      cursor: pointer;
    }

    button:disabled {
      cursor: auto;
    }

    button.selected {
      cursor: auto;
      color: black;
      border-color: black;
      border-width: 2px;
    }
    .clickable {
      cursor: pointer;
    }
    input[type='checkbox'] {
      -webkit-appearance:none;
      cursor: pointer;
      width:24px;
      height:24px;
      background:white;
      border-radius: 2px;
      border: 1px solid #555;
      position: relative;
      vertical-align: middle;
      padding: 10px;
    }
    input[type='checkbox'].partial-check {
      background: #ABC;
    }

    input[type='checkbox']:checked {
      background: #679;
    }
</style>
