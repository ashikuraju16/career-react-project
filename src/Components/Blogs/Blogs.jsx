const Blogs = () => {
  return (
    <div className=" h-fit  ">
      <div className="text-lg max-sm:text-xs text-[#757575] sm:w-[90%] xl:w-[60%] mx-auto">
        <h1 className="text-3xl max-sm:text-2xl max-sm:px-3 font-extrabold text-black">
          Technical Database Engineer:
        </h1>
        <div className="ml-10 space-y-4 my-8 max-sm:ml-5">
          <p>
            <span className="font-bold text-black text-xl max-sm:text-lg">
              {" "}
              Percona Database Performance Blog:
            </span>{" "}
            Percona is a leading provider of open-source database software and
            services. Their blog covers a wide range of topics related to
            database performance, optimization, and management.
          </p>
          <p>
            <span className="font-bold text-black text-xl max-sm:text-lg">
              {" "}
              Planet PostgreSQL:
            </span>{" "}
            This is an aggregator of blogs related to PostgreSQL, an open-source
            relational database management system. It features articles,
            tutorials, and news about PostgreSQL and related technologies.
          </p>
        </div>
      </div>
      {/* Senior Product Designer: */}

      <div className="text-lg max-sm:text-xs text-[#757575] sm:w-[90%] xl:w-[60%] mx-auto">
        <h1 className="text-3xl max-sm:text-2xl max-sm:px-3 font-extrabold text-black">
          Senior Product Designer:
        </h1>
        <div className="ml-10 space-y-4 my-8 max-sm:ml-5">
          <p>
            <span className="font-bold text-black text-xl max-sm:text-lg">
              {" "}
              Percona Database Performance Blog:
            </span>{" "}
            Percona is a leading provider of open-source database software and
            services. Their blog covers a wide range of topics related to
            database performance, optimization, and management.
          </p>
          <p>
            <span className="font-bold text-black text-xl max-sm:text-lg">
              {" "}
              Planet PostgreSQL:
            </span>{" "}
            This is an aggregator of blogs related to PostgreSQL, an open-source
            relational database management system. It features articles,
            tutorials, and news about PostgreSQL and related technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
