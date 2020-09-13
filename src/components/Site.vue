<template>
    <div class="site-container">

        <SideBar title="EW3 Solar Proposal" />
        <Content />
    </div>
</template>
<script>
import SideBar from './SideBar';
import Content from './Content';
export default {
    name: 'Site',
    components: [ SideBar, Content]
}
</script>
<style scoped>

</style>