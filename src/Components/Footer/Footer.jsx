import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer className=" p-10 bg-base-200 text-base-content">
        <div className="footer w-[70%] mx-auto">
        <aside className="text-4xl flex gap-12 mt-12 ">
        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
        <a href=""><Icon className="transition-all hover:rounded-bl-full hover:rounded-tr-full  hover:bg-fuchsia-700 hover:scale-150 duration-1000 hover:cursor-pointer" icon="logos:facebook" /></a>
        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
        <a href=""><Icon className="transition-all hover:rounded-bl-full hover:rounded-tr-full  hover:bg-fuchsia-700 hover:scale-150 duration-1000 hover:cursor-pointer" icon="grommet-icons:github" /></a>
        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
        <a href=""><Icon className="transition-all hover:rounded-bl-full hover:rounded-tr-full  hover:bg-fuchsia-700 hover:scale-150 duration-1000 hover:cursor-pointer bg-green-700  p-1 rounded-3xl  text-white" icon="jam:fiverr" /></a>
    
      </aside> 
      <nav>
        <h6 className="footer-title">Services</h6> 
        <NavLink className="link link-hover">Branding</NavLink>
        <NavLink className="link link-hover">Design</NavLink>
        <NavLink className="link link-hover">Marketing</NavLink>
        <NavLink className="link link-hover">Advertisement</NavLink>
      </nav> 
      <nav>
        <h6 className="footer-title">Company</h6> 
        <NavLink className="link link-hover">About us</NavLink>
        <NavLink className="link link-hover">Contact</NavLink>
        <NavLink className="link link-hover">Jobs</NavLink>
   
      </nav> 
        </div>
        
      </footer>
    );
};

export default Footer;