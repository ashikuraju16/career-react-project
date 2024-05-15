

const JobItems = ({ job }) => {
    return (
        <div>
            <div className="border-2 border-[#e8e8e8] m-4 p-8 rounded-xl">
                <h1>{job.job_title}</h1>
                <p>{job.company_name}</p>
                <p>{job.location}</p>
            </div>
            
        </div>
    );
};

export default JobItems;