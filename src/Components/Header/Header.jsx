import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <div className="flex max-sm:flex-col max-sm:text-white max-sm:gap-4 max-sm:p-4 gap-12 text-black text-xl md:my-12">
        <NavLink
          to={"home"}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-fuchsia-700 rounded-tl-3xl rounded-br-3xl p-2 text-xl text-white"
              : isPending
              ? "opacity-60"
              : ""
          }
        >
          Home
        </NavLink>
        <NavLink>Statistics</NavLink>
        <NavLink>Applied Jobs</NavLink>
        <NavLink>Blogs</NavLink>
      </div>
    </>
  );

  return (
    <div className=" navbar bg max-sm:p-4 ">
      <div className="md:w-[80%] max-sm:w-full  mx-auto">

      <div className="navbar-start max-sm:flex ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden max-sm:mr-6">
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <h1 className=" text-3xl md:text-5xl max-sm:place-content-center  text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-indigo-500 from-15% via-sky-500 via-35% to-emerald-500 to-85%">
          CareerHub
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end grid ">
    <Link className="btn md:text-2xl text-white  text-[8px] md:p-2 bg-gradient-to-r from-indigo-500 via-blue-500 from-15% via-sky-500 via-35% to-emerald-500 to-85%">Apply Now</Link>
  </div>
      </div>
    </div>
  );
};

export default Header;
