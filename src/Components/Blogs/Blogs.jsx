const Blogs = () => {
  return (
    <div className=" h-fit py-20 sm:w-[90%] xl:w-[70%] mx-auto ">
      <div className="text-lg max-sm:text-lg text-[#757575] ">
        <h1 className="text-4xl max-sm:text-2xl max-sm:px-3 font-extrabold text-black">
          Technical Database Engineer:
        </h1>
        <div className="ml-10 space-y-4 my-8 max-sm:ml-5 leading-[28px]">
          <p>
            <span className="font-bold text-black text-xl">
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

      <div className="text-lg max-sm:text-lg text-[#757575]">
        <h1 className="text-4xl max-sm:text-2xl max-sm:px-3 font-extrabold text-black">
          Senior Product Designer:
        </h1>
        <div className="ml-10 space-y-4 my-8 max-sm:ml-5 max-sm:leading-6  leading-[28px]">
          <p>
            <span className="font-bold text-black text-xl max-sm:text-lg">
              {" "}
              InVision Blog:
            </span>{" "}
            InVision is a popular platform for digital product design and
            collaboration. Their blog covers UX/UI design, product strategy, and
            design thinking, with insights and tips from industry experts.
          </p>
          <p>
            <span className="font-bold text-black text-xl max-sm:text-lg">
              {" "}
              Smashing Magazine:
            </span>{" "}
            Smashing Magazine publishes articles on web design, front-end
            development, and user experience. It includes resources for
            designers at all levels, including senior professionals.
          </p>
        </div>
      </div>
      {/* Software Engineer: */}
      <div className="text-lg max-sm:text-lg text-[#757575]">
        <h1 className="text-4xl max-sm:text-2xl max-sm:px-3 font-extrabold text-black">
          Software Engineer:
        </h1>
        <div className="ml-10 space-y-4 my-8 max-sm:ml-5 max-sm:leading-6 leading-[28px]">
          <p>
            <span className="font-bold text-black text-xl max-sm:text-lg">
              {" "}
              Stack Overflow Blog: 
            </span>{" "}
         Stack Overflow is a widely used platform for
            programming Q&A. Their blog covers a variety of topics relevant to
            software engineers, including coding best practices, technology
            trends, and career advice.
          </p>
          <p>
            <span className="font-bold text-black text-xl max-sm:text-lg">
              {" "}
              Martin Fowler&apos;s Blog: 
            </span>{" "}
          Martin Fowler is a renowned software engineer and author known for his expertise in agile methodologies, software design, and architecture. His blog contains insightful articles on software development practices and industry trends.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
