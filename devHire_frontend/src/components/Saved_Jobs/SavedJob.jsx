import React, { useContext } from 'react'
import { SaveJob_Context } from '../../context/JobSaveContext';
import SkillFilter from '../Skill_Filter/SkillFilter';
import Job_Card from '../Jobs/Job_Card';
import { JobContext } from '../../context/JobContext';
import { useNavigate } from 'react-router-dom';

function SavedJob() {

    //Use jobs for global context
    const {jobs, setSelectedJob} = useContext(JobContext) ;

    //Access savejob value
    const {saveJob, isSaved, toggleSaveJob} = useContext(SaveJob_Context);

    //Navigate page
    const nav = useNavigate();
  return (
        <div className="container  d-flex justify-content-between h-100  gap-5 ">
                    
        {/* import skill filter components  */}
        < SkillFilter />

        {/* Jobs list container */}
        <div className="jobs_list_container w-100 d-flex flex-column gap-3">

        {/* Savejob is empty    */}
        { saveJob.length === 0 && (
          <p className="text-secondary">No jobs saved yet.</p>
        )}  
          {/* Dummy jobs prints  */}
          { saveJob && (saveJob.map((job)=> 
            

              <Job_Card 
                key={job.id} 
                job={job}
                isSaved={isSaved(job.id)}
                onSelect = {()=> {
                  setSelectedJob(job); //Store selected job
                  nav(`/job/${job.id}`) // go to jobDetail page
                }} 
                OntoggleSaveJob={()=>toggleSaveJob(job)}
                />
            

          )) }

            {/* Back to home page  */}
            <div className="d-flex justify-content-end">
                <button type='button' className="btn btn-success" onClick={()=>nav('/')}>Back</button>
            </div>
        </div>
    </div>
  )
}

export default SavedJob