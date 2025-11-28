import React from 'react'
import { useNavigate } from 'react-router-dom'

// import jobs css file 
import './css/Jobs.css'

function Job_Card({job, onSelect, isSaved, OntoggleSaveJob}) {
    const nav = useNavigate();
  return (
    <div className='job_box p-3 rounded text-start d-flex justify-content-between align-items-center'>
        <div>

            {/* job title  */}
            <h2 className=''>{job.title}</h2>

            {/* Company name  */}
            <p className="m-0 text-secondary">{job.company}</p>

            {/* Salary  */}
            <div className="job_salary d-flex gap-3 align-items-center">
                <p className="m-0 fw-bold">${job.salary} per year</p>
                <div className="box btn btn-jobType ">
                    {job.jobType}
                </div>
            </div>

            {/* Skills must have for job */}
            <div className="skills mt-2 d-flex gap-2">
                { job.skills && (
                    job.skills.map((skill)=>

                        <div className="skill btn btn-skill">{skill}</div>
                    )
                )}
               
            </div>

        </div>

        <div className='pe-5 d-flex flex-column gap-4'>
            {/* Redirect to selected job detail  */}
            <button type='button' className=" btn btn-lg btn-danger" onClick={onSelect}>View Job Details</button>

            {/* Save job  */}
            <button type='button' className=" btn btn-lg bg-white border border-warning " onClick={OntoggleSaveJob}> <i className={ `${isSaved ? "fa-solid" : "fa-regular" } fa-bookmark`}></i> {isSaved ? 'Saved' : 'Save Job'}   </button>
        </div>


    </div>
  )
}

export default Job_Card