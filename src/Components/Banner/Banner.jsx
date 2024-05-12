const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
      <div className="flex flex-col justify-center sm:p-6 max-sm:p-4 my-6 w-full md:p-6 xl:w-[60%] mx-auto">
        <h1 className=" max-sm:text-4xl text-7xl font-extrabold  md:w-full text-start text-[#191919]">
          One Step Closer To Your{" "}
          <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-indigo-500 from-15% via-sky-500 via-35% to-emerald-500 to-85%">
            Dream Job
          </span>
        </h1>
        <p className="my-4 md:text-2xl sm:text-xl md:my-6 w-full p-2 text-black">
          Explore thousands of job opportunities with all the information you
          need. It's your future. Come find it. Manage all your job applications
          from start to finish.
        </p>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button className="px-6 py-3 w-3/5 sm:w-2/5  md:text-2xl max-sm:w-3/6  bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400">Get Started</button>
      </div>
      <img className="w-full" src="/src/assets/images/user.png" alt="" />
    </div>
  );
};

export default Banner;
