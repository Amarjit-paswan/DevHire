import { createContext, useReducer } from "react";
import { reducer, searchIntitalState } from "../reducer/searchReducer";

//Export filter for global 
export const FilterContext = createContext();

//Export filter provider function
export function FilterProvider({children}){
    
    //Use Reducer for global search
    const [state, dispatch] = useReducer(reducer, searchIntitalState);

    return (
     <FilterContext.Provider value={{filterSkill: state.filterSkill, dispatch}}>
        {children}
    </FilterContext.Provider>

    )
}