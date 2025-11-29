import React, { useReducer } from 'react'
  
  //Export serach value
  export const searchIntitalState = {
    searchValue: "",
    filterSkill: [],
    jobType: [],
    salary: 0
  }

  //reducer function (actions)
  export function reducer(state, action){

    switch(action.type){

      //Update search value
      case 'search-job':
        return {
          ...state,
          searchValue: action.payload
        };
      
      //Add job in filter
      case 'selected-skill':
        return {
          ...state,
          filterSkill: state.filterSkill.includes(action.payload) ? 
                        //deselect filter if already exists 
                       state.filterSkill.filter((skill)=> skill !== action.payload) 
                       : 
                       //select filter if doesn't exist
                       [...state.filterSkill, action.payload],
        };

        //Show job by type
        case 'select-jobType':
          return {
            ...state,
            jobType: state.jobType.includes(action.payload) ? 
                    //Deselect job type
                    state.jobType.filter((type) => type !== action.payload)
                    :
                    //select job type if doesn't exist
                    [...state.jobType, action.payload]
          };

        case 'salary-range':
          return {
            ...state,
            salary: action.payload
          };

          case 'RESET':
            return searchIntitalState;

      default:
        return state;
    }

  }

  
