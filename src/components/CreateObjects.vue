<template>
    <!-- To dynamically create database objects -->
    <div class="object">
        <table>
            <tr><td>Object Name</td><td><input name="object" type="text" size="20"></td>
        </table>
        <table>
            <thead>
                <tr>
                    <td>Field Name</td>
                    <td>Type</td>
                    <td>Default value</td>
                    <td></td>
                    
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td><input name="field-name" type="text" size="20"></td>
                    <td><input name="field-type" type="text" size="20"></td>
                    <td><input name="field-value" type="text" size="20"></td>
                    <td><input name="field-others" type="text" size="20"></td>
                <tr>
                <tr>
                    
                    <td></td><td></td><td></td><td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>