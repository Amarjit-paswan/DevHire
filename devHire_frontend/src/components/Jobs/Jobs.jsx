import React, { useContext, useReducer, useState } from 'react'
import SkillFilter from '../Skill_Filter/SkillFilter'
import Job_Card from './Job_Card'
import '../../data/JobData'
import { jobData } from '../../data/JobData';
import { JobContext } from '../../context/JobContext';
import { useNavigate } from 'react-router-dom';
import { SaveJob_Context } from '../../context/JobSaveContext';
import { SearchContext } from '../../context/SearchContext';
import { FilterContext } from '../../context/FilterContext';
import JobType from './JobType';
import { JobTypeContext } from '../../context/JobTypeContext';
import JobSalary from './JobSalary';
import { JobSalaryContext } from '../../context/JobSalaryContext';
import { reducer, searchIntitalState } from '../../reducer/searchReducer';
import Pagination from '../Pagination/Pagination';

function Jobs() {



  //Use jobs for global context
  const {jobs, setSelectedJob} = useContext(JobContext) ;

  //use searchcontext value for filtered jobs
  const {searchValue} = useContext(SearchContext);

  //use filtercontext for skill filter
  const {filterSkill} = useContext(FilterContext);

  //use jobTypeContext for jobtype filter
  const {jobType} = useContext(JobTypeContext);

  //use salaryrangeContext for filter
  const {salary} = useContext(JobSalaryContext);

  //use Reducer for salary range
      // const [state, dispatch] = useReducer(reducer, searchIntitalState);
      const { state, dispatch } = useContext(FilterContext);

  

  //Apply filtered jobs
  const filteredjobs = jobs.filter(  //filter by search
      (job)=> job.title.toLowerCase()
      .includes(searchValue.toLowerCase())
    )
    //filter by skill
    .filter((job) => 
      filterSkill.length === 0 ? true : filterSkill.every((skill)=> job.skills.includes(skill)))

    //filter by job type
    .filter((job)=> jobType.length === 0 ? true : jobType.every((type)=> job.jobType.includes(type) ))

    //filter by salary range
    .filter((job)=> job.salary >= salary);


       //Per page job
  const jobPerPage = 3;

  //Page no.
  let [current_page, setCurrentPage] = useState(1);

  //Formula for each page job show
  const start = (current_page - 1) * jobPerPage;
  const end = start + jobPerPage;

  const PaginationJobs = filteredjobs.slice(start,end);

  //Use save job for global context
  const {saveJob, setSaveJob, toggleSaveJob, isSaved} = useContext(SaveJob_Context);

  //Reset value so we have to remove from mutiple context
  const { dispatch: searchDispatch } = useContext(SearchContext);
  const { dispatch: skillDispatch } = useContext(FilterContext);
  const { dispatch: jobTypeDispatch } = useContext(JobTypeContext);
  const { dispatch: salaryDispatch } = useContext(JobSalaryContext);

 
  
  //Navigate the page
  const nav = useNavigate();
  
  
  

  return (
    <div className="container  d-flex justify-content-between h-100  gap-5 ">
        
        <div className="d-flex flex-column gap-3">
          {/* import skill filter components  */}
          < SkillFilter />

          {/* import job type filter components  */}
          <JobType />

          {/* import salary range filter components  */}
          <JobSalary />

          <div className="reset_button text-end">
           <button
              className="btn btn-success"
              onClick={() => {
                searchDispatch({ type: "RESET" });
                skillDispatch({ type: "RESET" });
                jobTypeDispatch({ type: "RESET" });
                salaryDispatch({ type: "RESET" });
              }}
            >
              Reset
            </button>

          </div>
        </div>
        

        {/* Jobs list container */}
        <div className="jobs_list_container w-100 d-flex flex-column gap-3">
          
          {/* Dummy jobs prints  */}

          {/* If searchValue doesn't exist in jobs list  */}
          {filteredjobs.length === 0 ? (
              <p className="text-secondary fs-2">No jobs found </p>
          ) : (
          PaginationJobs && (PaginationJobs.map((job)=> 
            
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
            

          ))) }

          {/* Pagination container  */}
        <div className="pagination d-flex w-100 justify-content-center">
          <Pagination currentPage={current_page} setCurrentPage={setCurrentPage} />
        </div>
           
        </div>

        
    </div>
  )
}

export default Jobs