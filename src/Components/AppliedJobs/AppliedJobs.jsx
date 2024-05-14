import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../LocalStore";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(() => {
        const stroedJobs = getStoredJobApplication();
    })
    return (
        <div>
            <h1>Applied Jobs</h1>
            
        </div>
    );
};

export default AppliedJobs;