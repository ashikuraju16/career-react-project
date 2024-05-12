const Banner = () => {
  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10">
      <div className=" place-content-center  my-6 w-[80%] mx-auto ">
        <h1 className="text-5xl md:text-8xl font-bold md:w-[80%] mx-auto text-start text-[#191919]">
          One Step Closer To Your{" "}
          <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-indigo-500 from-15% via-sky-500 via-35% to-emerald-500 to-85%">
            Dream Job
          </span>
        </h1>
        <p className="text-xl  my-4  md:my-12 md:w-[70%] mx-auto">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button>Get Started</button>
      </div>
      <img  className="" src="/src/assets/images/user.png" alt="" />
    </div>
  );
};

export default Banner;
