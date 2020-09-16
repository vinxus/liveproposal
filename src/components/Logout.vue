<template>
    <div>
        <h2>Logout</h2>
        <p>You have successfully logged out!</p>
    </div>
</template>
<script>
export default {
    name: "Logout",

    data(){
        // remove session data 
        localStorage.clear();
        return {
            data: "Session time",
            loggedIn: false
        }
    }
}
</script>
<style scoped>

</style>