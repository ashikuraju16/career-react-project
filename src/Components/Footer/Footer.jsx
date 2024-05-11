import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer className=" p-10 bg-base-200 text-base-content">
        <div className="footer w-[70%] mx-auto">
        <aside>
        
    
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