import React from 'react'

//Import skillfilter css file
import './css/SkillFilter.css'

function SkillFilter() {
  return (
    <div>
        {/* Filter box  */}
        <div className="skillfilter_box border p-3">
            {/* Title  */}
            <div className="tilte text-start"><h5 className='text-danger'>Filter by Skills</h5></div>

            {/* Skills lists with checkbox  */}
            <div className="input_box d-flex align-items-center gap-2 py-1">
                <input type="checkbox" name="" id=""  />
                <label htmlFor="" className="form-label ">JavaScript</label>
            </div>
            <div className="input_box d-flex align-items-center gap-2 py-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className="form-label">JavaScript</label>
            </div>
            <div className="input_box d-flex align-items-center gap-2 py-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className="form-label">JavaScript</label>
            </div>
            <div className="input_box d-flex align-items-center gap-2 py-1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className="form-label">JavaScript</label>
            </div>
        </div>
    </div>
  )
}

export default SkillFilter