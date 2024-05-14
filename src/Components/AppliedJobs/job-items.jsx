import React from 'react';

const JobItems = ({job}) => {
    return (
        <li key={job.id} >
        <span className="text-black"> {job.job_title}  <br /> {job.company_name}</span>
        </li>
    );
};

export default JobItems;