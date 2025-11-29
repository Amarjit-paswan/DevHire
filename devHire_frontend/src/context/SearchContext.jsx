import { createContext, useReducer } from "react";
import { searchIntitalState } from "../reducer/searchReducer";
import {reducer} from "../reducer/searchReducer"

//Export global search value
export const SearchContext = createContext();

//Export search provider
export function SearchProvider({children}){

  // UseReducer hook for global serach 
  const [state, dispatch] = useReducer(reducer, searchIntitalState)

  return (
    <SearchContext.Provider value={{ searchValue: state.searchValue, dispatch }}>
        {children}
    </SearchContext.Provider>
  )
}