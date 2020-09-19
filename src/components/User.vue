<template>
    <div class="user">
        <h2>{{ $router.params.username }}</h2>
        {{ username }}
        
    </div>
</template>

<script>
    export default {
        props: ["username"]
    }
</script>

<style  scoped>

</style>