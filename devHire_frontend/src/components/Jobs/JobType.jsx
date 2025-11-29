import React, { useContext } from 'react'
import { JobTypeContext } from '../../context/JobTypeContext'

function JobType() {

    //UseContext for jobtype
    const {jobType,dispatch} = useContext(JobTypeContext);
    console.log(jobType);
    

  return (
    //Job type container
    <div className='skillfilter_box border p-3'>
         {/* Title  */}
         <div className="tilte text-start"><h5 className='text-danger'>Filter by Job Type</h5></div>

        {/* Types of jobs  */}
        <div className="input_box d-flex align-items-center gap-2 py-1" >
            <input type="checkbox" name="" id="" value={"Part-time"} onChange={(e)=>dispatch({type:'select-jobType', payload: "Part-time"})}/>
            <label htmlFor="" className="form-label ">Part-time</label>
        </div>
        <div className="input_box d-flex align-items-center gap-2 py-1" >
            <input type="checkbox" name="" id="" value={"Full-time"} onChange={(e)=>dispatch({type:'select-jobType', payload: "Full-time"})}/>
            <label htmlFor="" className="form-label ">Full-time</label>
        </div>
    </div>
  )
}

export default JobType