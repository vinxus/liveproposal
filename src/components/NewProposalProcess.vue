<template>
    <div id="dynamic-component" class="process">
        
        
        <button 
            v-for="tab in tabs"
            :key="tab"
            :class="['tab-button', { active: currentTab == tab}]"
            @click="currentTab = tab">
            {{ tab }}
        </button>
        <keep-alive>
            <component :is="currentTabComponent" class="tab"></component>
        </keep-alive>
    </div>
    
</template>
<script>
import TabArchive from './TabArchive';
import TabPosts from './TabPosts';
import TabHome from './TabHome';

export default {
   data() {
       return{
           dynamicComponent: {
               template: ``
            },
            currentTab: 'Home',
            tabs: ['Home', 'Posts', 'Archive']
       }
            
   },
   computed: {
        currentTabComponent() {
            return 'tab-' + this.currentTab.toLowerCase()
        }   
       },
   components: {TabArchive, TabPosts, TabHome} 
}
</script>
<style scoped>
.process {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.process-tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>