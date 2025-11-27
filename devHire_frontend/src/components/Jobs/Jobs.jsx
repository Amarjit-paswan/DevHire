import React from 'react'
import SkillFilter from '../Skill_Filter/SkillFilter'
import Job_Card from './Job_Card'

function Jobs() {
  return (
    <div className="container  d-flex justify-content-between h-100  gap-5 ">
                    
        {/* import skill filter components  */}
        < SkillFilter />

        {/* Jobs list container */}
        <div className="jobs_list_container w-100 d-flex flex-column gap-3">
            <Job_Card />
            <Job_Card />
            <Job_Card />
        </div>
    </div>
  )
}

export default Jobs