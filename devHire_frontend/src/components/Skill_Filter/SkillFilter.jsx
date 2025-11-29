import React, { useContext } from 'react'

//Import skillfilter css file
import './css/SkillFilter.css'

//Import dummy skills
import { skills } from '../../data/SkillData';
import { FilterContext } from '../../context/FilterContext';

function SkillFilter() {

  //Use context api for filter job
  const { filterSkill, dispatch} = useContext(FilterContext);  
  
    
  return (
    <div>
        {/* Filter box  */}
        <div className="skillfilter_box border p-3">
            {/* Title  */}
            <div className="tilte text-start"><h5 className='text-danger'>Filter by Skills</h5></div>

            {/* Skills lists with checkbox  */}
            { skills && (
                skills.map((skill)=> (
                    <div className="input_box d-flex align-items-center gap-2 py-1" key={skill.id}>
                        <input type="checkbox" name="" id="" value={skill.skill} onChange={(e) => dispatch({type:'selected-skill', payload:skill.skill})} />
                        <label htmlFor="" className="form-label ">{skill.skill}</label>
                    </div>
                ))
            ) }
            
            
        </div>
    </div>
  )
}

export default SkillFilter