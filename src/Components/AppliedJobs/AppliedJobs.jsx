import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../LocalStore";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayedJobs, setDisplayedJobs] = useState([]);
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        const storedJobs = getStoredJobApplication();
        if( jobs.length >0) {
            const jobsApplied = [];
            for (const id of storedJobs) {
                const appliedJobs = jobs.find(job => job.id === id);
                if (appliedJobs) {
                    jobsApplied.push(appliedJobs);
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayedJobs(jobsApplied);
            
        }
    }, [appliedJobs, jobs])
    return (
        <div className="text-center font-extrabold ">
            <h1>Applied Jobs</h1>
<ul>
    {
    
        displayedJobs.map((job) => <li key={job.id}>
            <span className="text-black w-96 text-5xl">{job.job_title}</span>
            </li>)
    }
</ul>
            
        </div>
    );
};

export default AppliedJobs;