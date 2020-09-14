<template>
   <div class="container">
       <h2>{{msg}}</h2>
       <p>
      Welcome to the live Ellipweb Solar Business Proposal.<br>
      You can read the proposal and make comments on any aspects of the proposal.<br/>
      Please Check out the Ellipweb <router-link to="/terms">terms and conditions</router-link> of use.
    </p>
       <h3>Sections</h3>
       <h4><router-link to="/intoduction">Introduction</router-link></h4>
       <ul>
           <li><router-link to="/">Cover Letter</router-link></li>
           <li><router-link to="/">Preambles</router-link></li>
       </ul>
       <h4><router-link to="">Executive Summary</router-link></h4>
       <ul>
            <li><router-link to="/">Creating a Green Powered Society</router-link></li>
            <li><router-link to="/">Supporting the Power generation Infrastructure</router-link></li>
            <li><router-link to="/">Marketing and Promotion</router-link></li>
            <li><router-link to="/">Current Competition</router-link></li>
            <li><router-link to="/">Sustained Research and Development</router-link></li>
            <li><router-link to="/">Analytics</router-link></li>
            <li><router-link to="/">Financials</router-link></li>
       </ul>
       <h4><router-link to="/">Assessment</router-link></h4>
       <h4><router-link to="/">Production Plan</router-link></h4>
       <h4><router-link to="/">Marketing Strategy and Plan</router-link></h4>  
       <h4><router-link to="/">Organisation and Management Plan</router-link></h4>
       <h4><router-link to="/">Financial Analysis</router-link></h4>
       <h4><router-link to="/">SWOT Analysis</router-link></h4>
       <h4><router-link to="/">Conclusion</router-link></h4> 
       <h4><router-link to="/">Todo List</router-link></h4>
       <h4><router-link to="/">List of Tables</router-link></h4>
       <ul>
           <li><router-link to="/">Personnel Requirement</router-link></li>
           <li><router-link to="/">Fixed and Variable Cost – Equipment requirement</router-link></li>
           <li><router-link to="/">Cost to Customers</router-link></li>
           <li><router-link to="/">Projected turnover and profit</router-link></li>
           <li><router-link to="/">Return on Investment</router-link></li>
       </ul>
       
   </div> 
</template>
<script>
export default {
    name: 'LiveProposal',
    props: {
        msg: String
    }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
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