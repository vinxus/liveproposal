<template>
    <div>
        <h4>Login</h4>
        <form @submit.prevent="login">
            <label for="email" >E-Mail Address</label>
            <div class="login-line">
                <input id="email" type="email" v-model="email" required autofocus class="line-input">
            </div>
            <label for="password" >Password</label>                          
            <div class="reg-line">
                <input id="password" type="password" 
                        v-model="password" required class="line-input">
            </div>
            
            <div class="login-line">
                <button type="submit" class="btn-primary">
                    Login
                </button>                
            </div>
            <div class="login-line">
                <router-link to="/passwordreset">Forgot password?</router-link>
            </div>
            <div class="login-line">
                <router-link to="/register">Don't have an account? Register</router-link>
            </div>
        </form>
        <!-- <p class="error">{{ error }}</p> -->
        <ul class="error">
                <li v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul> 
    </div>
</template>
<script>
    //const appconfig = require('../appconfig')
    export default {
        name: "Login",
        data(){
            return {
                email : "",
                password : "",
                error: null,
                errors: null
            }
        },
        methods : {
            login() {
                if(this.email.length > 0 && this.password.length > 0) {
                    this.$store
                    .dispatch('login', {
                        email: this.email,
                        password: this.password
                    })
                    .then((data) => {
                        console.log(data);
                        console.log(data.user);
                        this.$router.push({ name: 'dashboard', params: {username: data.user.name} })
                    })
                    .catch(err => {
                        // this.error = err.message
                        this.error = 'Problem logging you in - please check your username/password.'
                        this.errors = err.response.data.errors
                        console.log('Error Login In!!!')
                        console.log(err);

                    })
                }
                
            },

        }
    }
</script>
<style scoped>
/* @import bootstrap from 'bootstrap'; */
    .login-line {
        padding-bottom: 1em;
    }
    .line-input {
        height: 25px;
    }

</style>