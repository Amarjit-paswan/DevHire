import React from 'react'
import { useNavigate } from 'react-router-dom'

// import jobs css file 
import './css/Jobs.css'

function Job_Card() {
    const nav = useNavigate();
  return (
    <div className='job_box p-3 rounded text-start d-flex justify-content-between align-items-center'>
        <div>

            {/* job title  */}
            <h2 className=''>Frontend Developer</h2>

            {/* Company name  */}
            <p className="m-0 text-secondary">Tech innovations</p>

            {/* Salary  */}
            <div className="job_salary d-flex gap-3 align-items-center">
                <p className="m-0 fw-bold">$120,000 per year</p>
                <div className="box btn btn-jobType ">
                    Full-time
                </div>
            </div>

            {/* Skills must have for job */}
            <div className="skills mt-2 d-flex gap-2">
                <div className="skill btn btn-skill">React</div>
                <div className="skill btn btn-skill">JavaScript</div>
                <div className="skill btn btn-skill">Laravel</div>
            </div>

        </div>

        <div className='pe-5'>
            <button type='button' className=" btn btn-lg btn-danger" onClick={()=> nav("/job") }>View Job Details</button>
        </div>


    </div>
  )
}

export default Job_Card