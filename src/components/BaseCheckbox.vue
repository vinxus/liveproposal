<template>
    <div>
        <label>{{ label }}</label>
        <input
            type="radio"
            v-model="event.pets"
            :value="1"
            :name="name"
          />
        <label>Yes</label>
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Boolean],
            default: ''
        },
        name: {
            type: String,
            default: ''
        }
    }
}
</script>