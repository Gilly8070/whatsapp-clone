import React from 'react'
import PublicJobSharing from '../../../../components/PublicJobSharing';

const index = ({ data: { fieldsForFaq } }) => {
    let jobTitle = fieldsForFaq?.job_title;
    let desc = `${fieldsForFaq?.minimum_experience}-${fieldsForFaq?.maximum_experience},${fieldsForFaq?.minimum_CTC}-${fieldsForFaq?.maximum_CTC},${fieldsForFaq?.location?.length > 1 ? fieldsForFaq?.location?.join("-") : fieldsForFaq?.location?.join("")},${fieldsForFaq?.job_type},${fieldsForFaq?.company_name}`;
    let location = fieldsForFaq?.location?.length > 1 ? fieldsForFaq?.location?.join("-") : fieldsForFaq?.location?.join("")
    let array = [fieldsForFaq?.minimum_experience + '-' + fieldsForFaq?.maximum_experience, location, fieldsForFaq?.job_type,]
    return (
        <div>
            <PublicJobSharing jobTitle2={jobTitle} desc3={desc} array={array} />
        </div>
    )
}

export async function getServerSideProps(context) {
    const recruiterId = context.params.recruiterId;
    const jobId = context.params.jobId;
    // const BASEURL = "https://testapikube.lineupx.com/";
    let baseurl = "https://testapikube.lineupx.com/";
    const data = await fetch(
        `${baseurl}RecruiterV2/Job/ApplicationTracker/GET/GetParticularApplicationTrackerPublicV2?job_id=${jobId}&_id=${recruiterId}`
    ).then((res) => res.json());
    return {
        props: { data },
    }
}
export default index
