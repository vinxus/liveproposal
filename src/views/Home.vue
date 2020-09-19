<template>
    <div class="home">
        <h2>Live Proposal Page</h2>
        <template >
        <p v-if="!loggedIn">
             This app helps you manage your business proposals, please 
            <router-link to="/login">
              Login
            </router-link>
            or
            <router-link to="/register">
              Register
            </router-link>
            to use the App.
        </p>
        </template>
    </div>
</template>
<script>
import { authComputed } from '../vuex/helpers.js';

export default {
   name: 'Home',
     computed: {
            ...authComputed
        }, 
}
</script>
<style scoped>

</style>