/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink } from "react-router-dom";

const JobItems = ({ job }) => {
  return (
    <div className="mx-auto max-md:w-full lg:w-[85%] py-6">
      <div className="border-2 border-[#e8e8e8] m-4 p-8 md:p-5 max-sm:p-5 rounded-xl flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
          <div className="bg-[#f4f4f4] p-8 rounded-lg max-sm:p-6 md:p-4 lg:p-8  flex items-center justify-center">
            <img
              className="sm:h-28 max-sm:h-20 md:h-16 lg:h-24"
              src={job.logo}
              alt=""
            />
          </div>
          <div className="flex-1 flex flex-col justify-between my-7 space-y-2">
            <div>
              <h1 className="text-2xl text-black font-extrabold lg:text-3xl text-start">
                {job.job_title}
              </h1>
              <p className="text-[#757575] text-xl text-start">
                {job.company_name}
              </p>
            </div>
            <div className="flex flex-wrap space-x-2 text-lg max-sm:text-xs sm:text-xs font-bold">
              <div className="rounded p-0.5 bg-gradient-to-r from-[#818eff] via-[#8a82ff] to-[#9576ff]">
                <div className="px-4 py-1 sm:py-2 max-sm:py-2 md:py- rounded bg-white">
                  {job.remote_or_onsite}
                </div>
              </div>
              <div className="rounded p-0.5 bg-gradient-to-r from-[#818eff] via-[#8a82ff] to-[#9576ff]">
                <div className="px-4 py-1 sm:py-2 max-sm:py-2 rounded bg-white">
                  {job.job_type}
                </div>
              </div>
            </div>
            <div className="text-lg text-[#757575]">
              <div className="flex items-center">
                <Icon className="mr-2 mt-0.5" icon="mi:location" />
                <div>{job.location}</div>
              </div>
              <div className="flex items-center">
                <Icon className="mr-2 mt-0.5" icon="solar:dollar-outline" />
                <div>{job.salary} (per month)</div>
              </div>
            </div>
          </div>
        </div>

        {/* View Details */}
        <NavLink className="lg:my-28 sm:my-16 my-6 w-full md:w-auto h-12 text-white p-4 flex justify-center items-center rounded-md font-extrabold text-lg bg-gradient-to-r from-[#818eff] via-[#8a82ff] to-[#9576ff]">
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default JobItems;
