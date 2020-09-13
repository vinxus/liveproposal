<template>
   <div class="container">
       <h2>{{msg}}</h2>
       <p>
      Welcome to the live Ellipweb Solar Business Proposal.<br>
      You can read the proposal and make comments on any aspects of the proposal.<br/>
      Please Check out the Ellipweb <a href="https://solar.ellipweb.com" target="_blank" rel="noopener">terms and conditions</a> of use.
    </p>
       <h3>Sections</h3>
       <h4><a href="">Introduction</a></h4>
       <ul>
           <li><a href="">Cover Letter</a></li>
           <li><a href="">Preambles</a></li>
       </ul>
       <h4><a href="">Executive Summary</a></h4>
       <ul>
            <li><a href="">Creating a Green Powered Society</a></li>
            <li><a href="">Supporting the Power generation Infrastructure</a></li>
            <li><a href="">Marketing and Promotion</a></li>
            <li><a href="">Current Competition</a></li>
            <li><a href="">Sustained Research and Development</a></li>
            <li><a href="">Analytics</a></li>
            <li><a href="">Financials</a></li>
       </ul>
       <h4><a href="">Assessment</a></h4>
       <h4><a href="">Production Plan</a></h4>
       <h4><a href="">Marketing Strategy and Plan</a></h4>  
       <h4><a href="">Organisation and Management Plan</a></h4>
       <h4><a href="">Financial Analysis</a></h4>
       <h4><a href="">SWOT Analysis</a></h4>
       <h4><a href="">Conclusion</a></h4> 
       <h4><a href="">Todo List</a></h4>
       <h4><a href>List of Tables</a></h4>
       <ul>
           <li><a href="">Personnel Requirement</a></li>
           <li><a href="">Fixed and Variable Cost – Equipment requirement</a></li>
           <li><a href="">Cost to Customers</a></li>
           <li><a href="">Projected turnover and profit</a></li>
           <li><a href="">Return on Investment</a></li>
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