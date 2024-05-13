import { useLoaderData, useParams } from "react-router-dom";



const JobDetails = () => {
const jobs =   useLoaderData()

  const { jobsId } = useParams();
  const currentJob =jobs.find((job) => job.id === Number.parseInt(jobsId))
    return (
        <div>
            <h1 className="text-5xl text-black font-extrabold text-center">Job Details </h1>
       name :{currentJob?.job_title}
       

        </div>
    );
};

export default JobDetails;