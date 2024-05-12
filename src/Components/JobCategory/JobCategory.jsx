

const JobCategory = () => {
    return (
        <div className="mt-28">
           <div className="text-center font-extrabold " >
           <h1 className="text-6xl  text-black">
            Job Category List
            </h1>
            <p className="text-2xl text-[#757575] mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-8 w-[90%] mx-auto md:w-[70%] ">
            <div className="bg-[#f9f9ff] p-8 ">
                <img className="bg-[#edeeff] p-4 rounded-lg" src="/src/assets/icons/accounts.png" alt="" />
                <h6 className="font-extrabold text-2xl text-black mt-6">Account & Finance</h6>
                <h6 className=" text-xl text=[#a3a3a3]">300 Jobs Available</h6>
            </div>
            <div className="bg-[#f9f9ff] p-8">
                <img className="bg-[#edeeff] p-4 rounded-lg" src="/src/assets/icons/accounts.png" alt="" />
                <h6 className="font-extrabold text-2xl mt-6 text-black">Account & Finance</h6>
                <h6 className=" text-xl text=[#a3a3a3]">300 Jobs Available</h6>
            </div>
            <div className="bg-[#f9f9ff] p-8">
                <img className="bg-[#edeeff] p-4 rounded-lg" src="/src/assets/icons/accounts.png" alt="" />
                <h6 className="font-extrabold text-2xl mt-6 text-black">Account & Finance</h6>
                <h6 className=" text-xl text=[#a3a3a3]">300 Jobs Available</h6>
            </div>
            <div className="bg-[#f9f9ff] p-8">
                <img className="bg-[#edeeff] p-4 rounded-lg" src="/src/assets/icons/accounts.png" alt="" />
                <h6 className="font-extrabold text-2xl mt-6 text-black">Account & Finance</h6>
                <h6 className=" text-xl text=[#a3a3a3]">300 Jobs Available</h6>
            </div>
           </div>
        </div>
    );
};

export default JobCategory;