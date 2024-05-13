import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="mt-28">
      <div className="text-center font-extrabold ">
        <h1 className="text-6xl max-sm:text-5xl text-black">Featured Jobs</h1>
        <p className="text-2xl max-sm:text-xl p-3 text-[#757575] mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12max-sm:p-6 rounded-xl mt-8 xl:w-[80%] mx-auto md:w-[90%]">
        {jobs.map((job) => (
          <Jobs key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
