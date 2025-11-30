import React, { useState } from 'react'

function Pagination({currentPage,setCurrentPage}) {



  return (
    <div className='d-flex gap-2'>

        <button className='btn border border-danger btn-danger' onClick={(e)=> setCurrentPage(currentPage - 1)}> Prev</button>
        <button className='btn border border-danger'> 1</button>
        <button className='btn border border-danger'> 2</button>
        <button className='btn border border-danger'> 3</button>
        <button className='btn border border-danger btn-danger' onClick={(e)=> setCurrentPage(currentPage + 1)}> Next</button>

    </div>
  )
}

export default Pagination