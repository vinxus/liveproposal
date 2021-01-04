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
        </form>
            <ul>
                <li v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
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
            let userData = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    is_admin: this.is_admin
            };
            this.$store
                .dispatch('register', userData )
                .then(() => {
                    this.$router.push({ name: 'dashboard', 
                                        username: userData.user.name })
                })
                .catch(err => {
                    this.errors = err.response
                })
            },
        //     handleSubmit(e) {
        //         e.preventDefault()
        //         console.log('Registration');
        //         if (this.password === this.password_confirmation && this.password.length > 0)
        //         {
        //             let url = "http://localhost:3030/register";
        //             let userData = { 
        //                                 name: this.name,
        //                                 email: this.email,
        //                                 password: this.password,
        //                                 is_admin: this.is_admin 
        //                             };
        //             if(this.is_admin != null || this.is_admin == 1) url = "http://localhost:3030/register-admin"
        //             this.$http.post(url, userData)
        //             .then(response => {
        //                 localStorage.setItem('user',JSON.stringify(response.data.user))
        //                 localStorage.setItem('jwt',response.data.token)

        //                 if (localStorage.getItem('jwt') != null){
        //                     this.$emit('loggedIn')
        //                     this.$store
        //                             .dispatch('storeUserData', userData)
        //                     if(this.$route.params.nextUrl != null){
        //                         this.$router.push(this.$route.params.nextUrl);
                                
        //                     }
        //                     else{
        //                         this.$router.push({name: 'dashboard', username: userData.name})
        //                     }
        //                 }
        //             })
        //             .catch(error => {
        //                 console.error(error);
        //             });
        //         } else {
        //             this.password = ""
        //             this.passwordConfirm = ""

        //             return alert("Passwords do not match")
        //         }
        //     }
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