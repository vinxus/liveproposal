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
                <input id="password" type="password" v-model="password" required class="line-input">
            </div>
            
            <div class="login-line">
                <button type="submit" class="btn-primary">
                    Login
                </button>                
            </div>
            <div class="login-line">
                <router-link to="/register">Don't have an account? Register</router-link>
            </div>
        </form>
        <p>{{ error }}</p>
    </div>
</template>
<script>
    export default {
        name: "Login",
        data(){
            return {
                email : "",
                password : "",
                error: null
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
                        console.log('Error Login In!!!')
                        console.log(err);

                    })
                }
                
            },
            handleSubmit(e){
                e.preventDefault();
                let userData = {
                                    email: this.email,
                                    password: this.password
                               };
                if (this.password.length > 0) {
                    this.$http.post('http://192.168.1.76:3030/login', userData)
                    .then(response => {
                       let is_admin = response.data.user.is_admin
                        localStorage.setItem('user',JSON.stringify(response.data.user))
                        localStorage.setItem('jwt',response.data.token)

                        if (localStorage.getItem('jwt') != null){
                            this.$emit('logged-in')
                            this.$store
                                    .dispatch('storeUserData', userData)    
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else {
                                if(is_admin== 1){
                                    this.$router.push('admin')
                                }
                                else {
                                    this.$router.push({name: 'dashboard', username: userData.name })
                                }
                            }
                        }     
                    })
                    .catch(function (error) {
                        console.error(error.response);
                    });
                }
            }
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