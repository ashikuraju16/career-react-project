import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();

  const { jobsId } = useParams();
  const currentJob = jobs.find((job) => job.id === Number.parseInt(jobsId));
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-5xl text-black font-extrabold text-center pt-24">
        Job Details{" "}
      </h1>
      <div className="grid grid-cols-3 pt-24 text-xl leading-10 text-[#757575]">
        <div className="col-span-2 px-8 space-y-12">
          <h1>
            {" "}
            <span className="font-bold text-black">Job Description :</span>{" "}
            {currentJob?.job_description}
          </h1>
          <h1>
            <span className="font-bold text-black">Job Responsibility : </span>
            {currentJob?.job_responsibility}
          </h1>
          <h4>
            <span className="font-bold text-black">
              Educational Requirements:
            </span>{" "}
            <br />
            {currentJob?.educational_requirements}
          </h4>
          <h4>
            <span className="font-bold text-black">Experiences:</span> <br />{" "}
            {currentJob?.experiences}
          </h4>
        </div>
        <div className="col-span-1 bg-[#f4f2ff]" />
      </div>
    </div>
  );
};

export default JobDetails;
