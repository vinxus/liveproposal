<template>
    <div>
        <h4>Register</h4>
        <form @submit.prevent="register">
            <label for="name">Name</label>
            <div class="reg-line">
                <input id="name" type="text" v-model="name" 
                required autofocus class="line-input">
            </div>

            <label for="email" >E-Mail Address</label>
            <div class="reg-line">
                <input id="email" type="email" v-model="email" 
                required class="line-input">
            </div>

            <label for="password">Password</label>
            <div class="reg-line">
                <input id="password" type="password" 
                v-model="password" new-password
                required class="line-input">
            </div>

            <label for="password-confirm">Confirm Password</label>
            <div class="reg-line">
                <input id="password-confirm" type="password" 
                        v-model="password_confirmation" new-password
                        required class="line-input">
            </div>

            <label for="password-confirm">Is this an administrator account?</label>
            <div class="reg-line">
                <select v-model="is_admin">
                    <option value=1>Yes</option>
                    <option value=0>No</option>
                </select>
            </div>

            <div class="reg-line">
                <button type="submit" class="btn-primary">
                    Register
                </button>                
            </div>
            <div class="reg-line">
                <router-link to="/login">Have an account? Login</router-link>
            </div>
            <ul class="error">
                <li v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
        </form>
            
    </div>
</template>
<script>
    export default {
        props : ["nextUrl"],
        data(){
            return {
                name : "",
                email : "",
                password : "",
                password_confirmation : "",
                is_admin : null,
                errors: null
            }
        },
        methods : {
            register () {
                if(this.password !==this.password_confirmation) {
                    return this.errors = ["passwords mismatch"]
                }
                let userData = {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        is_admin: this.is_admin
                };
                
                this.$store
                    .dispatch('register', userData )
                    .then((response) => {
                        
                        this.$router.push({ name:   'dashboard', 
                                            params: {username: response.user.name}
                                          })
                                 
                    })
                    .catch(err => {
                        console.log("Register User Error !!!")
                        console.log(err)
                        if(typeof err.response !=='undefined') {
                            this.errors = err.response.data.errors
                        } else {
                            console.log(err)
                            this.errors = ["Some error occurred contact dev@ellipweb.com for support"]
                        }
                        
                    })
            },

         }
    }
</script>
<style scoped>
    .reg-line {
        padding-bottom: 1em;
    }
    .line-input {
        height: 25px;
    }
</style>