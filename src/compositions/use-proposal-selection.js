import { reactive } from 'vue';
import axios from 'axios';

let proposals = reactive(new Set())

export const useProposalSelection = function(){
        
    let toggle = function(proposal) {        
        if(proposals.has(proposal)) {
           proposals.delete(proposal)
        } else {
           proposals.add(proposal)
        }
    }
    let clear = () => {
        proposals.clear()
    }
    let addMultiple = (newProposals) => { 
        newProposals.forEach((proposal) => {
            proposals.add(proposal)
        }); 
    };
    const forSelected = (fn) => {
        
        proposals.forEach(proposal => {
            fn(proposal)
            axios.put(`http://localhost:3030/proposals/${proposal.id}`, proposal)
        })
    };
    const markRead = () => forSelected(e => e.read = true )
    const markUnRead = () => forSelected(e => e.read = false )
    const archive = () => { forSelected(e => e.archived =true ); clear()}

    return {
        proposals,
        toggle,
        clear,
        addMultiple,
        markRead,
        markUnRead,
        archive
    }
}
export default useProposalSelection;