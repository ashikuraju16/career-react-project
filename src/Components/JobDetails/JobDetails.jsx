import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { saveJobApplication } from "../LocalStore";


const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = Number.parseInt(id);
  const currentJob = jobs.find((job) => job.id === idInt);
 
  
  const action = () => {
    saveJobApplication(idInt);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "your application has been submitted",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className=" max-w-screen-2xl mx-auto h-[90]">
      <h1 className="text-5xl text-black font-extrabold text-center pt-24 max-sm:pt-12">
        Job Details
      </h1>
      <div className="grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-24 max-sm:py-12 text-xl leading-10 text-[#757575]">
        <div className="col-span-2 px-8 max-sm:px-4 space-y-8  pb-8 ">
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
        <div className="max-sm:px-4 sm:px-8 sm:col-span-2 lg:col-span-1">
          <div className="col-span-1 py-12 px-12 rounded-lg text-2xl lg:p-6  max-sm:text-xl max-sm:px-3 bg-[#f4f2ff]">
            <div className=" ">
              <h6 className="font-extrabold text-3xl text-black">
                Job Details
              </h6>
              <div className="border border-[#d4d0ff] mt-6 " />
              <div className=" mt-6 space-y-4">
                {/* salary */}
                <h6 className="flex ">
                  <img
                    className=" h-8 mt-1 mr-5"
                    src="/src/assets/g logos/usd.png"
                    alt=""
                  />
                  <p className="mt-3 max-sm:mt-2 md:mt-1 ">
                    {" "}
                    <span className="font-bold text-black mr-1">Salary : </span>
                    {currentJob?.salary} (Per Month)
                  </p>
                </h6>

                {/* job title */}
                <h6 className="flex ">
                  <img
                    className=" h-8 mt-1 md:mt-2 mr-4"
                    src="/src/assets/g logos/title.png"
                    alt=""
                  />
                  <p className="mt-3">
                    <span className="font-bold text-black mr-1">
                      Job Title :{" "}
                    </span>
                    {currentJob?.job_title}
                  </p>
                </h6>
              </div>
            </div>
            {/* Contact Information */}
            <div className=" my-12 ">
              <h6 className="font-extrabold text-3xl text-black">
                Contact Information
              </h6>
              <div className="border border-[#d4d0ff] mt-6" />
            </div>
            {/* phone */}
            <h6 className="flex ">
              <figure>
                <img
                  className=" h-8  mr-6"
                  src="/src/assets/g logos/phone.png"
                  alt=""
                />
              </figure>
              <p className="mt-2">
                {" "}
                <span className="font-bold text-black mr-1">Phone : </span>
                {currentJob?.contact_information.phone}
              </p>
            </h6>
            {/* Email */}
            <h6 className="flex mt-6 ">
              <img
                className=" h-8  mr-4"
                src="/src/assets/g logos/email.png"
                alt=""
              />
              <p className="mt-2">
                {" "}
                <span className="font-bold text-black mr-1 max-sm:pl-1">
                  Email :
                </span>
                {currentJob?.contact_information.email}
              </p>
            </h6>
            {/* Address : */}
            <h6 className="flex mt-6 ">
              <img
                className=" h-8 mt-2 mr-6"
                src="/src/assets/g logos/location.png"
                alt=""
              />
              <p className="mt-2">
                {" "}
                <span className="font-bold text-black mr-1 ">Address :</span>
                {currentJob?.contact_information.address}
              </p>
            </h6>
          </div>{" "}
          <div className="sm:pb-28 sm:pt-8">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              onClick={action}
              className="text-3xl w-full rounded-lg  text-white font-extrabold  bg-gradient-to-r from-[#818eff] from-10% via-[#8a82ff] via-30% to-[#9576ff] to-85% my-6 h-16 "
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
