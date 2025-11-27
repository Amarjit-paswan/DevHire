import React from 'react'
// home css file 
import './css/Home.css'
import SearchBar from '../SearchBar/SearchBar'
import Jobs from '../Jobs/Jobs'
import { Outlet } from 'react-router-dom'


function Home() {
  return (
    <>
        {/* Home page container start  */}
        <div className="container-fluid d-flex justify-content-start align-items-start   w-100">    
            <div className="home_box  vw-100">
                {/* Header section start  */}
                <div className="header bg-danger py-3 p-2 d-flex justify-content-between align-items-center border px-4">
                    {/* Title  */}
                    <div className="title ">
                        <h2 className='fw-bold text-white'>Dev<span className='text-black'>Hire</span></h2>
                    </div>

                    {/* Import SearchBar components  */}
                    <SearchBar />
                </div>

                {/* Body section start  */}
                <div className="container  h-100 p-4 ">
                    
                   {/* import dynamic components  */}
                   <Outlet />
                </div>

            </div>
            
        </div>
    
    </>
  )
}

export default Home