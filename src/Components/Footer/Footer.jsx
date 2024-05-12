import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className=" md:p-10 bg-base-200 md:text-base-content max-md:grid">
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
          <h6 className="footer-title max-sm:text-xl max-sm:text-center text-2xl ">
            Services
          </h6>
          <NavLink className="link link-hover">Branding</NavLink>
          <NavLink className="link link-hover">Design</NavLink>
          <NavLink className="link link-hover">Marketing</NavLink>
          <NavLink className="link link-hover">Advertisement</NavLink>
        </nav>
        <nav>
          <h6 className="footer-title  max-sm:text-xl max-sm:text-center text-2xl">
            Company
          </h6>
          <NavLink className="link link-hover">About us</NavLink>
          <NavLink className="link link-hover">Contact</NavLink>
          <NavLink className="link link-hover">Jobs</NavLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
