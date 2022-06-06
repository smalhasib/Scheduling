import axios from 'axios'
const baseUrl = 'http://localhost:5000/'
const API = axios.create({ baseURL: baseUrl });

//Projects part
export const CreateProject = async (data)=>{
    const res = API.post("/project/createproject", data);
    return res;
}