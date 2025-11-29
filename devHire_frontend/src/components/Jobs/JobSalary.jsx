import React, { useContext } from 'react'
import { JobSalaryContext } from '../../context/JobSalaryContext'

function JobSalary() {

    //use salarycontext for value change
    const {salary,dispatch} = useContext(JobSalaryContext);
    console.log(salary);
    
  return (
    //Salary range of job
    <div className='skillfilter_box border p-3'>
        {/* Title  */}
         <div className="tilte text-start"><h5 className='text-danger'>Filter by Job Type</h5></div>

        <div className="d-grid">

         <input type="range" name="" id="" min={1000} max={100000}  value={salary} onChange={(e)=> dispatch({type:'salary-range', payload:e.target.value})} />
        </div>
           {/* Min and max labels */}
            <div className="d-flex justify-content-between text-secondary">
                <span>1000 LPA</span>
                <span>100000 LPA</span>
            </div>
    </div>
  )
}

export default JobSalary