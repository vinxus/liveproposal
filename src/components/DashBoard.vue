<template>
    <div class="hello">
        <h2>{{ $route.params.username }} Welcome to your Dashboard</h2>
        <h2>{{msg}}</h2>
        <div>
            <span>Start a new Proposal <button @click="addProposal()">+</button></span>
        </div>
        <ProposalDialog /> 
        <ProposalTable />

    </div>
   
</template>

<script>
    import { format } from 'date-fns';
    import ProposalDialog from './ProposalDialog';
    import ProposalTable from './ProposalTable';
    
    export default {
        components: {
            ProposalDialog,
            ProposalTable
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
                format
            }
        },
        methods: {
            addProposal() {
                // Load/Show Proposal Dialog box
                alert('Clicked me???')
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
            }
        },
        computed: {
            unarchivedProposals(){
                return this.sortedProposals.filter(e => !e.archived)
            },
            // sortedProposals(){
            //     return this.proposals.sort((e1, e2) => {
            //         return e1.createdAt < e2.createdAt ? 1 : -1
            //     })
            // },
            // sortedProposalsByDate(){
            //     return this.proposals.sort((e1, e2) => {
            //         return e1.createdAt < e2.createdAt ? 1 : -1
            //     })
            // },
            // sortedProposalsByCreator(){
            //     return this.proposals.sort((e1, e2) => {
            //         return e1.createdBy < e2.createdBy ? 1 : -1
            //     })
            // }
        }
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

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

/* Global Styles */

/* button {
  font-size: 16px;
  padding: 8px;
  border-radius: 3px;
  margin: 5px 10px 5px 0px;
  cursor: pointer;
}

button:disabled {
  cursor: auto;
}

button.selected {
  cursor: auto;
  color: black;
  border-color: black;
  border-width: 2px;
}
*/
.clickable {
  cursor: pointer;
}
/*
input[type='checkbox'] {
  -webkit-appearance:none;
  cursor: pointer;
  width:24px;
  height:24px;
  background:white;
  border-radius: 2px;
  border: 1px solid #555;
  position: relative;
  vertical-align: middle;
  padding: 10px;
}

input[type='checkbox'].partial-check {
  background: #ABC;
}

input[type='checkbox']:checked {
  background: #679;
} */

    .mb-0 {
        margin-bottom: 0;
    }

    /* Modal */

    .modal, .overlay {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
    }
    .overlay {
        opacity: 0.5;
        background-color: black;
    }
    .modal-card {
        position: relative;
        max-width: 80%;
        margin: auto;
        margin-top: 30px;
        padding: 20px;
        background-color: white;
        min-height: 500px;
        z-index: 10;
        opacity: 1;
    }
    /* Proposal Table */
    .proposals-table {
        max-width: 1000px;
        margin: auto;
        border-collapse: collapse;
    }
    .proposals-table tr.checked {
        background-color: #EEE;
    }
    .proposals-table tr {
        height: 40px;
    }
    .proposals-table td {
        border-bottom: 1px solid black;
        padding: 5px;
        text-align: left;
    }
    .proposals-table tr:first-of-type td {
        border-top: 1px solid black;
    }
    .proposals-table td p {
        max-height: 1.2em;
        overflow-y: hidden;
        margin: 0;
    }

    .proposals-table td.date {
        width: 120px;
    }

    /* Bulk Action Bar */
    .bulk-action-bar {
        width: 100%;
        max-width: 1000px;
        margin: auto;
        text-align: left;
        padding-bottom: 8px;
    }

    .bulk-action-bar input {
        margin: 5px;
    }

    .bulk-action-bar .checkbox {
        margin-right: 6px;
        margin-left: 3px;
    }
</style>