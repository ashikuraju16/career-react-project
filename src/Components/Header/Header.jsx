import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <div className="max-sm:flex max-sm:flex-col  text-[#757575] text-2xl font-extrabold md:flex-col md:space-x-24  max-sm:text-white max-sm:gap-4  ">
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
          Statistics
        </NavLink>
        <NavLink
          to={"appliedJobs"}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-fuchsia-700 rounded-tl-3xl rounded-br-3xl p-2 text-xl text-white"
              : isPending
              ? "opacity-60"
              : ""
          }
        >
          Applied Jobs
        </NavLink>
        <NavLink
          to={"blogs"}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-fuchsia-700 rounded-tl-3xl rounded-br-3xl p-2 text-xl text-white"
              : isPending
              ? "opacity-60"
              : ""
          }
        >
          Blogs
        </NavLink>
      </div>
    </>
  );

  return (
    <div className=" navbar md:p-2 bg  xl:w-[85%]  mx-auto ">
      <div className="  w-full flex justify-between md:p-2 ">
        <div className="navbar max-sm:flex md:flex w-[90%] justify-between ">
          <div className="dropdown  lg:hidden">
            <div tabIndex={0} role="button" className="">
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:w-10 md:h-10 "
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
          <h1 className="max-sm:mt-2 max-sm:text-4xl max-md:text-6xl  md:text-7xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-indigo-500 from-15% via-sky-500 via-35% to-emerald-500 to-85%">
            CareerHub
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end grid ">
          <Link className=" max-sm:text-base max-sm:p-2 max-md:text-2xl max-md:p-4 md:text-2xl p-4 rounded-xl text-white bg-gradient-to-r from-[#818eff] from-10% via-[#8a82ff] via-30% to-[#9576ff] to-85%">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
