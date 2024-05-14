import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../LocalStore";
import JobItems from "./job-items";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  console.log(jobs);

  const [displayedJobs, setDisplayedJobs] = useState([]);

  useEffect(() => {
    const storedJobs = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobs) {
        const appliedJobs = jobs?.find((job) => job.id === id);
        if (appliedJobs) {
          jobsApplied.push(appliedJobs);
        }
      }

      setDisplayedJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div className="text-center text-4xl font-extrabold ">
      <ul>
        {displayedJobs.map((job) => (
          <JobItems key={job.id} job={job} />
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
