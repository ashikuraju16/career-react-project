/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const JobItems = ({ job }) => {
  return (
    <div className=" h-full mx-auto md:w-[80%] ">
      <div className="border-2 border-[#e8e8e8] m-4 p-8 rounded-xl flex justify-between">
        <div className="flex space-x-12">
          <div className="bg-[#f4f4f4] p-8  h-48 flex items-center">
            <img className="  " src={job.logo} alt="" />
          </div>
          <div className="my-7 space-y-2">
            <h1 className="text-2xl text-black font-extrabold text-start">
              {job.job_title}
            </h1>
            <p className="text-[#757575] text-xl text-start">
              {job.company_name}
            </p>
            {/* remote_or_onsite && job_type */}
            <div className="flex max-sm:text-xs  space-x-6 text-lg  font-bold">
              <div className=" rounded size-fit p-0.5  bg-gradient-to-r from-[#818eff] from-10% via-[#8a82ff] via-30% to-[#9576ff] to-85%  ">
                <div className="px-4 py-1 rounded bg-white ">
                  {job.remote_or_onsite}
                </div>
              </div>
              <div className="rounded size-fit p-0.5  bg-gradient-to-r from-[#818eff] from-10% via-[#8a82ff] via-30% to-[#9576ff] to-85%  ">
                <div className="px-4 py-1 rounded  bg-white ">
                  {job.job_type}
                </div>
              </div>
            </div>
            {/* location && salary */}
            <div className="my-8 text-lg text-[#757575]  lg:flex max-sm:flex-col  ">
              <div className="flex">
                <Icon className=" mr-2 mt-0.5" icon="mi:location" />
                <div>{job.location}</div>
              </div>
              <div className="flex">
                <Icon
                  className="lg:ml-8 mr-2 mt-0.5 "
                  icon="solar:dollar-outline"
                />
                <div>{job.salary} (per month)</div>
              </div>
            </div>
          </div>
        </div>

        {/* View Details */}
        <div>
          <NavLink>View Details</NavLink>
        </div>
      </div>
    </div>
  );
};

export default JobItems;
