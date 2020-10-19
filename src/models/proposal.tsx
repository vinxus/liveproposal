class Proposal {
    id: BigInteger;
    sections: [];
    section: {};
    title: String;
    defaultSections: {
        introduction: String,
        coverLetter: String,
        executiveSummary: {},
        assessment: String,
        productionPlan: String,
        marketing: String,
        organisationPlan: String,
        financialAnalysis: String,
        SwotAnalysis: String,
        conclusion: String,
    };
    
    createdAt: Date;
    createdBy: String;
    updatedAt: Date;
    updatedBy: String;
    status: String;
    archived: boolean;
    
}
export default Proposal;