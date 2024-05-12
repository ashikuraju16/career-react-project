const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2  ">
      <div className="flex flex-col justify-center sm:p-6 max-sm:p-4 my-6 w-full md:p-6 xl:w-[76%] 2xl:w-[67%] mx-auto">
        <h1 className=" max-sm:text-5xl max-lg:text-5xl text-7xl font-extrabold  md:w-full  text-start text-[#191919]">
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
        <button className="px-6 py-3 w-3/5 xl:w-2/6 xl:text-2xl sm:w-2/5  md:text-xl max-sm:w-3/6  text-white rounded-md bg-gradient-to-r from-[#818eff] from-10% via-[#8a82ff] via-35% to-[#9576ff] to-85%">Get Started</button>
      </div>
      <img className="w-full h-full " src="/src/assets/images/user.png" alt="" />
    </div>
  );
};

export default Banner;
