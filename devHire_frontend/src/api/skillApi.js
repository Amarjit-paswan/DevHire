import axios from "axios";

// api url 
const API_URL = "http://localhost:8000";

//fetch job function for call backend
export const fetchSkill = async ()=>{
    const res = await axios.get(`${API_URL}/fetchSkill`);
    return res.data;
}

export const selectedJob_detail = async(id)=>{
    const res = await axios.get(`${API_URL}/job/${id}`);
    return res.data;
}


