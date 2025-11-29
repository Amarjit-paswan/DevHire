import React, { useContext, useReducer } from 'react'

// import search bar css file 
import './css/SearchBar.css'
import { SearchContext } from '../../context/SearchContext'

function SearchBar() {

  //Fetch state
  const {searchValue, dispatch} = useContext(SearchContext);

  return (
    <div>
        {/* SearchBar Box  */}
        <div className="searchbar_box bg-white border px-3 p-2 d-flex align-items-center gap-2">
            <i className="fa-solid fa-magnifying-glass text-danger"></i>
            <input type="text" name="" id=""  placeholder='Search Jobs...' value={searchValue} onChange={(e)=> dispatch({type:'search-job', payload: e.target.value})}/>
        </div>     
    </div>
  )
}

export default SearchBar