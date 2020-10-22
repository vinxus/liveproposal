<template>
    <div>
        <Suspense>
            <template #default>
                <ProposalTable />
            </template>
            <template #fallback>
                Loading...
            </template>
        </Suspense>
    </div>
</template>
<script>
import ProposalTable from './ProposalTable';
export default {
  components: {
           
            ProposalTable,
           
        },  
}
</script>