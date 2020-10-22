<template>
  <div class="proposal-display">
    <div class="toolbar">
      <button @click="goOlder">&lt; (j)</button>
        <button @click="toggleArchive">
          {{proposal.archived ? 'Move to Inbox (e)' : 'Archive (e)'}}
        </button>
        <button @click="toggleRead">
            {{proposal.read ? 'Mark Unread (r)' : 'Mark Read (r)'}}
        </button>
        <button @click="goNewer">&gt; (k)</button>
        
    </div>  
    <h2 class="mb-0">Title: <strong>{{proposal.title}}</strong></h2>
    <div><em>Created by: {{proposal.createdBy }} on {{format(new Date(proposal.createdAt), 'MMM do yyyy')}}</em></div>
    <div v-html="marked(proposal.description)" />
  </div>
</template>

<script>
  import  { format } from 'date-fns'
  import marked from 'marked'
  //import axios from 'axios'
  import useKeydown from '../compositions/useKeydown';
  export default {
    setup(props, {emit}){
      //let proposal = props.proposal;
    
      let toggleRead = () => emit('change-proposal', {toggleRead: true, save: true })
      let toggleArchive = () => emit('change-proposal', {toggleArchive: true, save: true, closeModal: true })
      let goNewer = () => emit('change-proposal', {changeIndex: -1})
      let goOlder = () => emit('change-proposal', {changeIndex: 1})
      let goNewerAndArchive = () => emit('change-proposal', {changeIndex: -1, toggleArchive: true })
      let goOlderAndArchive = () => emit('change-proposal', {changeIndex: 1, toggleArchive: true })
    
      useKeydown([          
          {key: 'e', fn: toggleArchive},
          {key: 'r', fn: toggleRead},
          {key: 'k', fn: goNewer},
          {key: 'j', fn: goOlder},
          {key: '[', fn: goNewerAndArchive},
          {key: ']', fn: goOlderAndArchive},
      ])
      return {
        format,
        marked,
        toggleArchive,
        toggleRead,        
        goNewer,
        goOlder,
      }
    },
    props: {
      proposal: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>