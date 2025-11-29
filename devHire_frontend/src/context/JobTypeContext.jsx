import { createContext, useReducer } from "react";
import { reducer, searchIntitalState } from "../reducer/searchReducer";

//Export job type for global search
export const JobTypeContext = createContext();

//Export job type provider
export function JobTypeProvider({children}){

    //Use reducer for search
    const [state, dispatch] = useReducer(reducer, searchIntitalState);

    return (
        <JobTypeContext.Provider value={{jobType:state.jobType, dispatch}}>
            {children}
        </JobTypeContext.Provider>
    )
}