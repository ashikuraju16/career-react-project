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
      <div className="flex space-x-6 bg-clip-text bg-gradient-to-r from-indigo-500 from-15% via-sky-500 via-35% to-emerald-500 to-85% text-lg font-bold">
        <div className="border-2 border- rounded-lg px-4 py-2 ">
          {remote_or_onsite}
        </div>
        <div className="border-2 rounded-lg px-4 py-2 ">{job_type}</div>
      </div>
    </div>
  );
};

export default Jobs;
