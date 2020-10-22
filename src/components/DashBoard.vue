<template>
    <div class="dash">
        <h2>{{ $route.params.username }} Welcome to your Dashboard</h2>
        <h2>{{msg}}</h2>
        <div dash-dialog>
            <span>Start a new Proposal <button @click="addProposal()">+</button></span>
            
        </div>              
        <ModalView v-if="newProposal" @closeModal="newProposal = null">
            <ProposalDialog 
                    :proposal="newProposal" 
                    @newProposal="newProposal" />            
        </ModalView>

    </div>
   
</template>

<script>
    import { format } from 'date-fns';
    import ProposalDialog from './ProposalDialog';
    
    import Proposal from '../models/proposal.jsx';
    import ModalView from './ModalView';
    import axios from 'axios';

    export default {
        components: {
            ProposalDialog,                        
            ModalView
        },
        data () {
            let proposals = [
                {
                    'id': 1,
                    'title': 'First Proposal', 
                    'createdBy': 'Bolan Oluwa',
                    'description': 'This is the first proposal with so much info',
                    'sections': 'Many, many sections.',
                    'createdAt': "2020-03-27T18:25:43.511Z",
                    'archived': false,
                    'status': 'active',
                    'checked': false,
                },
                {
                    'id': 2,
                    'title': 'Second Proposal', 
                    'description': 'This is the first proposal with so much info',
                    'sections': 'Many, many sections.',
                    'createdAt': "2020-03-27T18:25:43.511Z",
                    'createdBy': 'Ahmid Oluwa',
                    'archived': false,
                    'status': 'active',
                    'checked': false,
                },
                {
                    'id': 3,
                    'title': 'Third Proposal',                     
                    'description': 'This is the first proposal with so much info',
                    'sections': 'Many, many sections.',
                    'createdAt': "2020-03-27T18:25:43.511Z",
                    'createdBy': 'Liz Dale',
                    'archived': false,
                    'status': 'active',
                    'checked': false,
                },
                {
                    'id': 4,
                    'title': 'Fourth Proposal', 
                    'description': 'This is the first proposal with so much info',
                    'sections': 'Many, many sections.',
                    'createdAt': "2020-03-27T18:25:43.511Z",
                    'createdBy': 'Bolan Oluwa',
                    'archived': false,
                    'status': 'active',
                    'checked': false,
                },
            ];
            return {
                msg: 'The commoners',
                proposals,
                format,
                createProposal: ()=>{ return "New Proposal"},
                newProposal: null, // ()=>{ return new Proposal()},
                loadProposal: false,
            }
        },
        methods: {
            addProposal() {
                // Load/Show Proposal Dialog box
               
                this.newProposal = new Proposal();
                console.log(this.newProposal);
                // console.log(proposal);

                this.loadProposal = true;
            },
            sortedProposals(){
                return this.proposals.sort((e1, e2) => {
                    return e1.createdAt < e2.createdAt ? 1 : -1
                })
            },
            sortedProposalsByDate(){
                return this.proposals.sort((e1, e2) => {
                    return e1.createdAt < e2.createdAt ? 1 : -1
                })
            },
            sortedProposalsByCreator(){
                return this.proposals.sort((e1, e2) => {
                    return e1.createdBy < e2.createdBy ? 1 : -1
                })
            },
            // createProposal() {
            //     return "Create Proposal";
            // },
            changeProposal({save, closeModal}) {
                let proposal = this.openedProposal;
                
                if(save) { this.saveProposal(proposal) }
                if(closeModal) { this.openedProposal = null; }              
                                
                let newProposal = null;
                
                this.openProposal(newProposal)
                
            },
            openProposal(proposal) {
                console.log("Open Proposal")
                proposal.read = true
                this.updateProposal(proposal)
                this.openedProposal = proposal
            },
            saveProposal(proposal) {
                console.log("Save Proposal");
                this.updateProposal(proposal);
            },
            updateProposal(proposal) {
                axios.put(`http://localhost:3030/proposals/${proposal.id}`, proposal)
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    
</style>