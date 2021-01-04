<template>
    <div>
    <h3>Existing Proposals</h3>
        <div class="proposal-list">
            <div class="bulk-action-buttons">
                <button @click="selectScreen ('main')"
                    :disabled="selectedScreen == 'main'">
                    Main</button>
                <button @click="selectScreen('archived')"
                    :disabled="selectedScreen == 'archived'">
                    Archived</button>     
                <BulkActionBar :proposals="filteredProposals" />
            </div>
        <table class="proposals-table">
            <tbody>
                <tr v-for="proposal in filteredProposals"
                    :key="proposal.id"
                    :class="['clickable', proposal.read ? 'read': '']"                    
                >
                <td>
                    <input type="checkbox" 
                           :checked="proposalSelection.proposals.has(proposal)"
                           @click="proposalSelection.toggle(proposal)" 
                    />
                </td>
                <td @click="openProposal(proposal)">{{proposal.title}}</td>
                <td @click="openProposal(proposal)"><p>{{proposal.description}}</p></td>
                <td @click="openProposal(proposal)">{{proposal.sections}}</td>
                <td @click="openProposal(proposal)"
                    class="date">
                    {{format(new Date(proposal.createdAt), "MMM do yyyy")}}
                </td>
                <td @click="openProposal(proposal)">
                    {{proposal.createdBy}}
                </td>  
                <td><button @click="archiveProposal(proposal)">Archive</button></td>  
                </tr>
            </tbody>
        </table>
        <ModalView v-if="openedProposal" @closeModal="openedProposal = null">
            <ProposalView 
                    :proposal="openedProposal" 
                    @changeProposal="changeProposal" />
        </ModalView>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue';
import ProposalView from '@/components/ProposalView.vue';
import ModalView from '@/components/ModalView.vue';
import BulkActionBar from '@/components/BulkActionBar.vue';
import { format } from 'date-fns';
import useProposalSelection from '@/compositions/use-proposal-selection'
const  appconfig = require('../appconfig')

export default {
    async setup(){

        let { data: proposals } = await axios.get(appconfig.url + `proposals`)
        return {
            proposalSelection: useProposalSelection(),
            proposals: ref(proposals),
            openedProposal: ref(null),
            format,
            selectedScreen: ref('main'),
        }
    },
    components: {
        BulkActionBar,
        ModalView,
        ProposalView,
    },
    computed: {
        sortedProposals() {
            console.log(this.proposals)
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            return this.proposals.sort((p1, p2) => {
                return p1.createdAt < p2.createdAt ? 1 : -1;
            })
            // return this.proposals
        },
        filteredProposals() {
            if(this.selectedScreen == 'main') {
                return this.sortedProposals.filter(p => !p.archived)
            } else {
                return this.sortedProposals.filter(p => p.archived)
            }

            // return this.proposals
        }
    },
    methods: {
      selectScreen(newScreen) {
          this.selectedScreen = newScreen;
          this.proposalSelection.clear()
      },
      changeProposal({toggleRead, toggleArchive, save, closeModal, changeIndex}) {
        let proposal = this.openedProposal;
        if(toggleRead) { proposal.read = !proposal.read }
        if(toggleArchive) { proposal.archived = !proposal.archived }
        if(save) { this.updateProposal(proposal) }
        if(closeModal) { this.openedProposal = null; }

        if(changeIndex) {
          let proposals = this.unarchivedProposals
          let currentIndex = proposals.indexOf(this.openedProposal)
          let newProposal = null;
          console.log(currentIndex);
          if(currentIndex < this.proposals.length -1) {
            newProposal = this.proposals[currentIndex + changeIndex]
          } else{
            newProposal = this.openedProposal
          }
          
          this.openProposal(newProposal)
        }
      },
      openProposal(proposal) {
          
        proposal.read = true
        this.updateProposal(proposal)
        this.openedProposal = proposal
      },
      archiveProposal(proposal) {
        proposal.archived = true
        this.updateProposal(proposal)
      },
      updateProposal(proposal) {
        axios.put( appconfig.url + `proposals/${proposal.id}`, proposal)
      },
      manageDialogExit({closeModal, save}) {
          console.log(save)
          if(closeModal) { this.openedProposal = null; }
      }
    }
}
</script>
