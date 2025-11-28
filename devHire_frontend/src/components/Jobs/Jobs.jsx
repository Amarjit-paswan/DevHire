import React, { useContext } from 'react'
import SkillFilter from '../Skill_Filter/SkillFilter'
import Job_Card from './Job_Card'
import '../../data/JobData'
import { jobData } from '../../data/JobData';
import { JobContext } from '../../context/JobContext';
import { useNavigate } from 'react-router-dom';
import { SaveJob_Context } from '../../context/JobSaveContext';

function Jobs() {

  //Use jobs for global context
  const {jobs, setSelectedJob} = useContext(JobContext) ;

  //Use save job for global context
  const {saveJob, setSaveJob, toggleSaveJob, isSaved} = useContext(SaveJob_Context);

  

  //Navigate the page
  const nav = useNavigate();
  
  
  

  return (
    <div className="container  d-flex justify-content-between h-100  gap-5 ">
                    
        {/* import skill filter components  */}
        < SkillFilter />

        {/* Jobs list container */}
        <div className="jobs_list_container w-100 d-flex flex-column gap-3">
          
          {/* Dummy jobs prints  */}
          { jobs && (jobs.map((job)=> 
            

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
           
        </div>
    </div>
  )
}

export default Jobs