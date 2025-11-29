import { createContext, useReducer } from "react";
import { reducer, searchIntitalState } from "../reducer/searchReducer";

//Export salary for global search
export const JobSalaryContext = createContext();

//Export salary provider for global search
export function JobSalaryProvider({children}){

    //use Reducer for salary range
    const [state, dispatch] = useReducer(reducer, searchIntitalState);

    return (
        <JobSalaryContext.Provider value={{salary:state.salary, dispatch }}>
            {children}
        </JobSalaryContext.Provider>
    )
}