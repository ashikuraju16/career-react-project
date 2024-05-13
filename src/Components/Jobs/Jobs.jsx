/* eslint-disable react/prop-types */

const Jobs = ({ job }) => {
  const {
    id,
    job_title,
    logo,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div className="border m-4 p-8 rounded-lg">
      <img className="w-[25%]" src={logo} alt="" />
      <h1 className="text-2xl text-black font-extrabold mt-8">{job_title}</h1>
      <p className="text-[#757575] text-xl my-3">{company_name}</p>
      <div className="flex  space-x-6 text-lg  font-bold">
        <div className="rounded size-fit p-0.5  bg-gradient-to-r from-[#818eff] from-10% via-[#8a82ff] via-30% to-[#9576ff] to-85%  ">
          <div className="px-4 py-1 rounded bg-white ">{remote_or_onsite}</div>
        </div>
        <div className="rounded size-fit p-0.5  bg-gradient-to-r from-[#818eff] from-10% via-[#8a82ff] via-30% to-[#9576ff] to-85%  ">
          <div className="px-4 py-1 rounded  bg-white ">{job_type}</div>
        </div>
        
      </div>
    </div>
  );
};

export default Jobs;
