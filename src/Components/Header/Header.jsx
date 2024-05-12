import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <div className="max-sm:flex   max-sm:flex-col md:flex-col space-x-6 md:text-white max-sm:text-white max-sm:gap-4  text-black text-xl ">
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
    <div className=" navbar  max-sm:p-4 max-start md:p-8  xl:w-[85%]  mx-auto ">
      <div className="  w-full flex justify-between md:p-2">
        <div className="navbar- max-sm:flex md:flex w-[80%]">
          <details className="dropdown">
            <summary className="m-1 text-2xl lg:hidden">
              {" "}
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </details>

          <h1 className=" text-3xl ml-4 md:text-7xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-indigo-500 from-15% via-sky-500 via-35% to-emerald-500 to-85%">
            CareerHub
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end grid ">
          <Link className=" max-sm:text-xl max-sm:p-2 md:text-2xl md:p-4 rounded-xl text-white  bg-gradient-to-r from-indigo-500 via-blue-500 from-15% via-sky-500 via-35% to-emerald-500 to-85%">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
