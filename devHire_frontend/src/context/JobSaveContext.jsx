import { createContext, useState } from "react";

//Export global saved job
export const SaveJob_Context = createContext();

//Export Savejob provider
export function SaveJob_Provider({children}){

    //Store saved jobs
    const [saveJob, setSaveJob] = useState([]);

    //Is job already save or not
  const isSaved = (jobId) => saveJob.some((job)=> job.id === jobId);

  //Add or remove from save job
  const toggleSaveJob = (job)=>{

    //If job is a already save 
    if(isSaved(job.id)){
      //Remove it
      setSaveJob(saveJob.filter((Sjob)=> Sjob.id !== job.id));
    }else{
      //Add it
      setSaveJob([...saveJob,job])
    }
  }

    return (
        <SaveJob_Context.Provider 
            value={{
                saveJob,
                isSaved,
                toggleSaveJob
            }}
        >
            {children}
        </SaveJob_Context.Provider>
    )
}