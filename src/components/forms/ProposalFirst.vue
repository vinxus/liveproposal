<template>    
    <div class="form-page-one">
        <h3>First Page</h3>
        <BaseSelect
            :options="categories"
            v-model="event.category"
            label="Select a category"
            />  

        <h3>Name & describe your proposal</h3>
            <BaseInput
            v-model= "event.title"
            label="Title"
            type="text"
        />

        <BaseInput
            v-model= "event.description"
            label="Description"
            type="text"
        />
    </div>    
</template>
<script>
export default {
  name: "ProposalFirst" ,
  data () {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      }
    }
  }
}
</script>