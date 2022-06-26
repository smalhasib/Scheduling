import axios from 'axios'
const baseUrl = 'http://localhost:5000/'
const API = axios.create({ baseURL: baseUrl });

//Projects part
export const CreateProject = async (data)=>{
    const res = await API.post("/project/createproject", data);
    return res;
}
export const GetAllProject = async ()=>{
    const res = await API.get("/project/getproject");
    return res;
}
export const DeleteSingleProject = async(id)=>{
    await API.delete(`/project/deleteproject/${id}`);
}

// Adding Admin functions......
export const createAdmin = async(data) =>{
     const res = await API.post("/admin/createadmin", data);
     return res;
}
//login controller for all users and admin...
export const LoginUsers = async (data) => {
  const res = await API.post("/admin/loginadmin", data);
  return res;
};