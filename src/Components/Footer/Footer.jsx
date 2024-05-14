import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className=" md:p-10 pb-16 bg-base-200 md:text-base-content max-md:grid">
      <div className="footer w-[70%] mx-auto md:w-full sm:grid sm:grid-cols-3 sm:py-10 sm:w-[90%] lg:w-[90%]">
        <aside className="text-4xl flex  max-sm:gap-20 md:gap-12 mt-12 sm:gap-10 ">
          <a href="https://www.facebook.com/ashikuraju16">
            <Icon
              className="transition-all hover:rounded-bl-full hover:rounded-tr-full  hover:bg-fuchsia-700 hover:scale-150 duration-1000 hover:cursor-pointer"
              icon="logos:facebook"
            />
          </a>
          <a href=" https://github.com/ashikuraju16">
            <Icon
              className="transition-all hover:rounded-bl-full hover:rounded-tr-full  hover:bg-fuchsia-700 hover:scale-150 duration-1000 hover:cursor-pointer"
              icon="grommet-icons:github"
            />
          </a>
          <a href="https://www.fiverr.com/ashik_raju?up_rollout=true">
            <Icon
              className="transition-all hover:rounded-bl-full hover:rounded-tr-full  hover:bg-fuchsia-700 hover:scale-150 duration-1000 hover:cursor-pointer bg-green-700  p-1 rounded-3xl  text-white"
              icon="jam:fiverr"
            />
          </a>
        </aside>
        <nav className="">
          <h6 className="footer-title max-sm:text-xl max-sm:text-center text-3xl ">
            Services
          </h6>
          <NavLink className="text-base hover:bg-fuchsia-700 text-white p-1 rounded-bl-3xl rounded-tr-3xl font-extrabold">Branding</NavLink>
          <NavLink className="text-base hover:bg-blue-700 text-white p-1 rounded-bl-3xl rounded-tr-3xl font-extrabold">Design</NavLink>
          <NavLink className="text-base hover:bg-yellow-700 text-white p-1 rounded-bl-3xl rounded-tr-3xl font-extrabold">Marketing</NavLink>
          <NavLink className="text-base hover:bg-lime-700 text-white p-1 rounded-bl-3xl rounded-tr-3xl font-extrabold">Advertisement</NavLink>
        </nav>
        <nav>
          <h6 className="footer-title  max-sm:text-xl max-sm:text-center text-3xl">
            Company
          </h6>
          <NavLink className="text-base hover:bg-orange-700 text-white p-1 rounded-bl-3xl rounded-tr-3xl ">About us</NavLink>
          <NavLink className="text-base  hover:bg-teal-700 text-white p-1 rounded-bl-3xl rounded-tr-3xl font-extrabold">Contact</NavLink>
          <NavLink to="/job" className="text-base  hover:bg-indigo-700 text-white p-1 rounded-bl-3xl rounded-tr-3xl font-extrabold">Jobs</NavLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
