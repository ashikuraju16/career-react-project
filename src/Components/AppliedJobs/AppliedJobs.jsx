import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../LocalStore";
import JobItems from "./jobItems";

const AppliedJobs = () => {
  // const jobs = useLoaderData();
  // console.log(jobs);

  const [displayedJobs, setDisplayedJobs] = useState([]);

  useEffect(() => {
    const storedJobs = getStoredJobApplication();
    fetch("jobs.json").then(res=>res.json()).then(jobs=>{
      if (jobs.length > 0) {
        const jobsApplied = [];
        for (const id of storedJobs) {
          if (!Array.isArray(jobs)) continue
          const appliedJobs = jobs.find((job) => job.id === id);
          if (appliedJobs) {
            jobsApplied.push(appliedJobs);
          }
        }
  
        setDisplayedJobs(jobsApplied);
      }
    })
    
  }, []);
  return (
    <div className="text-center font-extrabold ">
      <ul>
        {displayedJobs.map((job) => (
          <JobItems key={job.id} job={job} />
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
