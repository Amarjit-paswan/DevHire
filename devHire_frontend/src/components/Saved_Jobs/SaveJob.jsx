import React, { useContext } from 'react'
import { SaveJob_Context } from '../../context/JobSaveContext'
import { useNavigate } from 'react-router-dom';

function SaveJob() {

    const {saveJob} = useContext(SaveJob_Context);

    //Navigate to route
    const nav = useNavigate();
    console.log(saveJob);
    
  return (
      <>
          {/* Saved jobs list icon  */}
          
          <div className="m-0 fs-5 text-white d-flex align-items-center border p-2 rounded" onClick={()=> nav('/saved_job')} style={ {cursor:"pointer"}}>
            <i className="fa-solid fa-bookmark mx-0"></i> <div className="count_box d-flex justify-content-center align-items-center bg-warning  pb-1 px-1 fs-5 mx-1">{saveJob.length}</div> Saved Job
          </div>
        </>
  )
}

export default SaveJob