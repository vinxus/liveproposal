<template>
    <div id="footer" class="footer">

        <router-link to="/about">About</router-link> | 
        <router-link to="terms">Terms and Conditions</router-link> |
        <router-link to="cookie">Privacy Policy</router-link>
    </div>
</template>

<script>
    export default {
        name: "FooterBar",
    }
</script>

<style scoped>
    .footer {
        position: relative;
        top: 95%;
        justify-items: center;
        text-align: center;
    }
</style>