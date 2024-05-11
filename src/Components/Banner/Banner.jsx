const Banner = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="text-center w-[70%] mx-auto">
        <h1 className="text-7xl font-bold w-[70%] mx-auto text-start">
          One Step Closer To Your{" "}
          <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-indigo-500 from-15% via-sky-500 via-35% to-emerald-500 to-85%">
            Dream Job
          </span>
        </h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button>Get Started</button>
      </div>
      <img src="/src/assets/images/user.png" alt="" />
    </div>
  );
};

export default Banner;
