class Proposal {

    // id!: number;
    // sections: [] = [];
    // section!: {};
    // title!: String;
    // defaultSections!: {
    //     introduction: String;
    //     coverLetter: String;
    //     executiveSummary: {};
    //     assessment: String;
    //     productionPlan: String;
    //     marketing: String;
    //     organisationPlan: String;
    //     financialAnalysis: String;
    //     SwotAnalysis: String;
    //     conclusion: String;
    // };
    
    // createdAt!: Date;
    // createdBy!: String;
    // updatedAt!: Date;
    // updatedBy!: String;
    // status!: String;
    // archived: boolean = false;
    id = 0;
    title = 'New Proposal - untitled';
    //  { 
    //     type: String,
    //     required: true,
    //     default: 'New Proposal - untitled'
    // };
    section = {
        type: String,
        required: true,
        default: 'Section' 
    }

}
export default Proposal;