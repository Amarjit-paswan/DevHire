import React, { useContext } from 'react'
import JobForm from './JobForm'
import { useParams } from 'react-router-dom'
import { JobContext } from '../../context/JobContext';

function JobDetail() {

    const {selectedJob} = useContext(JobContext);
    console.log(selectedJob);
     

    // Fetch url parameter 
    const {id} = useParams();
  return (
    <div className='d-flex justify-content-between align-items-center  gap-4 w-100'>
        
      

        {/* Selected Job Details  */}
        <div className="selected_job_details text-start w-100 p-3">

            {/* Job Title */}
            <h1>{selectedJob.title}</h1>

            {/* Company Name  */}
            <p className="text-secondary">{selectedJob.company}</p>

            {/* Salary with job type  */}
            <div className="d-flex align-items-center gap-2">
                <div className="box btn btn-jobType ">
                    {selectedJob.jobType}
                </div>
                <p className="m-0 fw-bold">${selectedJob.salary} per year</p>
            </div>

            {/* Job Description  */}
            <div className="job_description my-4">
                <h3>Job Description</h3>
                <p className="text-secondary">{selectedJob.description}</p>
            </div>

             {/* Skills must have for job */}
            <div className="skills mt-2 d-flex gap-2">
                {selectedJob.skills && selectedJob.skills.map((skill)=>
                
                <div className="skill btn btn-skill">{skill}</div>
                )}
               
            </div>
        </div>

        {/* Job form component  */}
        <JobForm />
        
        {/* Apply now form button  */}
        <div className='w-75 d-grid'>
            <button type='button' className=" btn btn-lg btn-danger w-100" data-bs-toggle="modal" data-bs-target="#ApplyJobModal" >Apply Job</button>
        </div>

    </div>
  )
}

export default JobDetail