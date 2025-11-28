
//Import dummy job data
import { createContext, useState } from "react";
import { jobData } from "../data/JobData.js";

//Create a context api
export const JobContext = createContext();

//Create a context provider
export function JobProvider({children}){

    //Global job list (dummy data)
    const [jobs, setJobs] = useState(jobData);

    //Global selected job
    const [selectedJob, setSelectedJob] = useState(null);

    return (
        <JobContext.Provider value={{
            jobs,
            setJobs,
            selectedJob,
            setSelectedJob
        }}>
            {children}
        </JobContext.Provider>
    )
}