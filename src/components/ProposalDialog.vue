<!-- template for the modal component -->
<template>
    
    <div class="proposal-dialog">
        <div class="dialog-wrapper">
            <div class="dialog-container">

               
                <ProposalForm />
            </div>
        </div>
    </div>


</template>

<script>
import { ref } from 'vue';
import ProposalForm from './ProposalForm';

export default {

    name: 'ProposalDialog',
    data: function(props) {
        console.log(props);
        let proposal = props.proposal;
      
        return {
            header: 'Create a new proposal',
            body: `<p>Only registered users can leave a comment. Please register.</p>
                   <form class='quick-registration' @submit.prevent="onSubmit">
                        <input placeholder="Enter your name" size="20" >
                        <input placeholder ="Email" size="20" />
                        <button id="form-submit" type="Submit">Submit</button>
                    </form>
            `,
            steps:  { first: {description: 'First Step - Give your proposal a title and describe it.', 
                      inputs: ['title', 'description']}, 
                      second: {description: 'Introduction', inputs: ['introduction']},
                      third: {description: 'Executive', inputs: ['section']},
                      fourth: {description: 'Assessment', inputs: ['paragraphs']},
                      fifth: {description: 'Plans', inputs: ['production', 'marketing', 'organisation']},
                      sixth: {description: 'Financials', inputs: ['financials', ]},
                      seventh: {description: 'Analysis', inputs: ['analysis']}
                      },
            buttons:  {
                close: {text: 'Close', action: function(){console.log('Close clicked'); this.close()}},
                cancel: {text: 'Cancel', action: function(){this.close()}},
                submit: { text: 'Submit', action: function(){ console.log('SUBMIT')} }
                },
            footer: '',
            closeModal: false,
            newProposal: ref(proposal),
            //manageDialogExit
        }

        },
    methods: {
        onSubmit(e){
            if(this.name && this.email) {
                let registration = {
                    name: this.name,
                    email: this.email,
                }
                this.$emit('registration-submitted', registration)
                this.name = null
                this.email = null
                e.preventDefault();
            } else {
                if(!this.name) this.errors.push("Name required")
                if(!this.email) this.errors.push("Email required.")

            }
        },
        manageDialog(){
            console.log("MangeDialog");
            console.log(this.closeModal);

            if(this.closeModal) { this.newProposal = null; console.log("CloseModal")}
            
        }

    },
    props: {
      proposal: {
        type: Object,
        required: true
      }
    },
    components: {ProposalForm}
}
</script>
