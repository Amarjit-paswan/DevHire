import React from 'react'

// import search bar css file 
import './css/SearchBar.css'

function SearchBar() {
  return (
    <div>
        {/* SearchBar Box  */}
        <div className="searchbar_box bg-white border px-3 p-2 d-flex align-items-center gap-2">
            <i class="fa-solid fa-magnifying-glass text-danger"></i>
            <input type="text" name="" id=""  placeholder='Search Jobs...'/>
        </div>     
    </div>
  )
}

export default SearchBar