<template>
    <div>
    <h3>Existing Proposals</h3>
        <div class="proposal-list">
            <BulkActionBar :proposals="filteredProposals" />
        <table class="proposals-table">
            <tbody>
                <tr v-for="proposal in proposals"
                    :key="proposal.id"
                    :class="['clickable', proposal.checked ? 'checked': '']"
                    @click="proposal.checked = true"
                >
                <td><input type="checkbox" /></td>
                <td>{{proposal.title}}</td>
                <td><p>{{proposal.description}}</p></td>
                <td>{{proposal.sections}}</td>
                <td class="date">{{format(new Date(proposal.createdAt), "MMM do yyyy")}}</td>
                <td>{{proposal.createdBy}}</td>  
                <td><button @click="proposal.archived=true">Archive</button></td>  
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import {ref } from 'vue';
import BulkActionBar from '@/components/BulkActionBar.vue';
import { format } from 'date-fns';
export default {
    async setup(){

        let { data: proposals } = await axios.get(`http://localhost:3000/proposals`)
        return {
            proposals: ref(proposals),
            format,
        }
    },
    data(){
        return {}
    },
    components: {
        BulkActionBar
    },
    computed: {
        sortedProposals() {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            return this.proposals.sort((p1, p2) => {
                return p1.createdAt < p2.createdAt ? 1 : -1;
            })
        },
        filteredProposals() {
            if(this.selectedScreen == 'main') {
                return this.sortedProposals.filter(p => !p.archived)
            } else {
                return this.sortedProposals.filter(p => p.archived)
            }
        }
    }
}
</script>
