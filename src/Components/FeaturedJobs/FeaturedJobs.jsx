/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
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
        {jobs.slice(0, dataLength).map((job) => (
          <Jobs key={job.id} job={job} />
        ))}
      </div>

      <div
        className={`${
          dataLength === jobs.length ? "hidden" : "block"
        } sm:pt-6 sm:pb-20 pt-4 py-6`}
      >
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => setDataLength(jobs.length)}
          className=" flex justify-center items-center max-sm:w-[50%] sm:w-[30%] md:w-[20%] lg-[10%] xl:w-[15%] max-sm:mt-3 text-xl font-bold mx-auto max-sm:text-base max-sm:p-2 max-md:text-2xl max-md:p-4 md:text-2xl p-4 rounded-xl text-white bg-gradient-to-r from-[#818eff] from-10% via-[#8a82ff] via-30% to-[#9576ff] to-85%"
        >
          See All Jobs
        </button>
     
      </div>
    </div>
  );
};

export default FeaturedJobs;
