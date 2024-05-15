/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
const Jobs = ({ job }) => {
  const {
    job_title,
    logo,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    id,
    salary,
  } = job;

  return (
    <div className="border-2 border-[#e8e8e8] m-4 p-8 rounded-xl">
      <img className=" h-12" src={logo} alt="" />
      <h1 className="text-2xl text-black font-extrabold mt-8">{job_title}</h1>
      <p className="text-[#757575] text-xl my-3">{company_name}</p>

      {/* remote_or_onsite && job_type */}
      <div className="flex max-sm:text-xs  space-x-6 text-lg  font-bold">
        <div className=" rounded size-fit p-0.5  bg-gradient-to-r from-[#818eff] from-10% via-[#8a82ff] via-30% to-[#9576ff] to-85%  ">
          <div className="px-4 py-1 rounded bg-white ">{remote_or_onsite}</div>
        </div>
        <div className="rounded size-fit p-0.5  bg-gradient-to-r from-[#818eff] from-10% via-[#8a82ff] via-30% to-[#9576ff] to-85%  ">
          <div className="px-4 py-1 rounded  bg-white ">{job_type}</div>
        </div>
      </div>
      {/* location && salary */}
      <div className="my-8 text-2xl text-[#757575]  lg:flex max-sm:flex-col  ">
        <div className="flex">
          <Icon className=" mr-4 mt-0.5" icon="mi:location" />
          <div>{location}</div>
        </div>
        <div className="flex">
          <Icon className="lg:ml-8 mr-4 mt-0.5 " icon="solar:dollar-outline" />
          <div>{salary}</div>
        </div>
      </div>
     
      <NavLink to={`/jobs/${id}`} className="px-2 py-3 ] max-sm:w-2/6 max-sm: text-xs font-bold xl:text-xl md:w-[45%] lg:w-[55%] xl:w-[30%]   md:text-xl text-white rounded-md bg-gradient-to-r from-[#818eff] from-10% via-[#8a82ff] via-35% to-[#9576ff] to-85%">
        View Details
      </NavLink>
    </div>
  );
};

export default Jobs;
