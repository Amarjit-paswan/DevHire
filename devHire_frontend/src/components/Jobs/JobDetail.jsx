import React from 'react'
import JobForm from './JobForm'

function JobDetail() {
  return (
    <div className='d-flex justify-content-between align-items-center  gap-4 w-100'>
        
      

        {/* Selected Job Details  */}
        <div className="selected_job_details text-start p-3">

            {/* Job Title */}
            <h1>Frontend Developer</h1>

            {/* Company Name  */}
            <p className="text-secondary">Web Solutions Pvt. Ltd</p>

            {/* Salary with job type  */}
            <div className="d-flex align-items-center gap-2">
                <div className="box btn btn-jobType ">
                    Full-time
                </div>
                <p className="m-0 fw-bold">$120,000 per year</p>
            </div>

            {/* Job Description  */}
            <div className="job_description my-4">
                <h3>Job Description</h3>
                <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque modi laboriosam a ipsam, voluptatibus odit. Deserunt ex iusto, nostrum tenetur odit autem delectus tempore aspernatur culpa amet voluptatibus repellendus saepe repellat officia fugit perspiciatis neque nobis eveniet animi reprehenderit ullam sint? Ad at quas error. Enim quaerat error aspernatur aliquid, non molestiae numquam velit ab nam dolorum deserunt accusantium nulla asperiores perspiciatis sequi dolorem iusto hic saepe necessitatibus quod at, aliquam magni impedit provident? Laborum corporis eligendi ab rem dolor voluptas a, ratione totam mollitia, minus assumenda adipisci sed quod sit facilis! Culpa cupiditate distinctio consequuntur alias earum illo saepe.</p>
            </div>

             {/* Skills must have for job */}
            <div className="skills mt-2 d-flex gap-2">
                <div className="skill btn btn-skill">React</div>
                <div className="skill btn btn-skill">JavaScript</div>
                <div className="skill btn btn-skill">Laravel</div>
            </div>
        </div>

        {/* Job form component  */}
        <JobForm />
        
        {/* Apply now form button  */}
        <div className='w-100 d-grid'>
            <button type='button' className=" btn btn-lg btn-danger w-100" data-bs-toggle="modal" data-bs-target="#ApplyJobModal" >Apply Job</button>
        </div>

    </div>
  )
}

export default JobDetail