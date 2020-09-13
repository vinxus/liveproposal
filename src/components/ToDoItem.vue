<template>
    <div class=todo-list>
        
        <li>
            {{ title }}
        <button v-on:click="$emit('remove')">Remove</button>
        </li>
    </div>
</template>
<script>
export default {
    name: 'ToDoItem',
    props: {
        title: String,
        items: []
    },
    
    data: function() {
    return {newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
    }
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
}
</script>
<style scoped>

</style>
