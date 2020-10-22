<template>
    <div class="bulk-action-bar">
        <span class="checkbox">
        <input type="checkbox"
            :checked="allProposalsSelected"
            :class="[someProposalsSelected ? 'partial-check' : '' ]"
            @click="bulkSelect()" />
        </span>
        <span class="buttons">
            <button @click="proposalSelection.markRead()"
                    :disabled="[...proposalSelection.proposals].every(e => e.read)">
                    Mark Read
            </button>
            <button @click="proposalSelection.markUnRead()"
                    :disabled="[...proposalSelection.proposals].every(e => !e.read)">
                    Mark Unread
                    </button>
            <button @click="proposalSelection.archive()"
                    :disabled="numberSelected == 0">
                Archive
            </button>

        </span>
    </div>
</template>
<script>
import useProposalSelection from '@/compositions/use-proposal-selection';
import { computed } from 'vue';

export default {
    setup (props){
        let proposalSelection = useProposalSelection();
        
        let numberSelected = computed(() => proposalSelection.proposals.size)
        let numberProposals = computed(() => props.proposals.length)
        let allProposalsSelected = computed(() => {
            return numberSelected.value == numberProposals.value
        })
        let someProposalsSelected = computed(() => {
            return numberSelected.value > 0 && numberSelected.value < numberProposals.value
        })
        let bulkSelect = function(){
            if(allProposalsSelected.value) {
                proposalSelection.clear()
            } else {
                proposalSelection.addMultiple(props.proposals)
            }
        }

        return {
            someProposalsSelected,
            allProposalsSelected,
            bulkSelect,
            proposalSelection,
            numberSelected    
        }
    },
    props: {
        proposals: {
            type: Array,
            required: true
        }
    }

}
</script>
<style scoped>

</style>