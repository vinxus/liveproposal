<template>
  <div class="modal">
    <div class="overlay" @click="emit('closeModal')"></div>
    <div class="modal-card">
      <slot />
    </div>
  </div>
</template>

<script>
  
  import { useKeydown } from '../compositions/useKeydown'

  export default {
    setup(props, {emit}) {
        useKeydown(
            [
                {key: 'Escape', fn: () => {  console.log("Modal View - CloseModal"); emit('close-modal')}},
                {key: 'Enter', fn: () => { console.log('logging for demonstration purposes')} }
                ])

      return {
        emit
      }
    }
  }
</script>

<style scoped>

</style>