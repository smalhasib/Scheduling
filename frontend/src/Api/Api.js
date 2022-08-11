import axios from "axios";
const baseUrl = "http://localhost:5000/";
const API = axios.create({ baseURL: baseUrl });

//Projects part
export const CreateProject = async (data) => {
  const res = await API.post("/project/createproject", data);
  return res;
};
export const GetAllProject = async () => {
  const res = await API.get("/project/getproject");
  return res;
};
export const DeleteSingleProject = async (id) => {
  await API.delete(`/project/deleteproject/${id}`);
};

// Adding Admin functions......
export const createAdmin = async (data) => {
  const res = await API.post("/admin/createadmin", data);
  return res;
};
// update admin
export const updateAdmin = async(data, id)=>{
  const res = await API.put(`/admin/updateadmin/${id}`, data);
  return res;
}

export const getAdmin = async(id)=>{
  const res = await API.get(`/admin/getadmin/${id}`);
  return res;
}
//login controller for all users and admin...
export const LoginUsers = async (data) => {
  const res = await API.post("/admin/loginuser", data);
  return res;
};

// For employee.......
export const createEmployee = async (data) => {
  const res = await API.post("/employee/addemployee", data);
  return res;
};
export const getManagers = async () => {
  const res = await API.get("/employee/allmanagers");
  return res;
};
export const createWorkers = async (data) => {
  const res = await API.post("/employee/addworker", data);
  return res;
};
export const getWorkers = async () => {
  const res = await API.get("/employee/allworkers");
  return res;
};

export const deleteEmployee = async (id) => {
  const res = await API.delete(`/employee/delemployee/${id}`);
  return res;
};
export const getSingleEmployee = async (id) => {
  const res = await API.get(`/employee/singlemployee/${id}`);
  return res;
};

export const updateEmployee = async(data, id)=>{
  const res = await API.put(`employee/updateemp/${id}`, data);
  return res;
}
// Teams..
export const CreateTeams = async(data)=>{
  const res = await API.post("/team/createteam", data);
  return res;
}
export const GetTeams = async()=>{
  const res = await API.get("/team/geteam");
  return res;
}

// Works..
export const GetAllWork = async () => {
  const res = await API.get("/work/getwork");
  return res;
};

// Schedule
export const CreateSchedule = async(data) => {
  const res = await API.post("/schedule/createschedule", data)
  return res
}

export const GetAllSchedule = async () => {
  const res = await API.get("/schedule/getschedule");
  return res
}

export const DeleteSingleSchedule = async (id) => {
  await API.delete(`/schedule/deleteschedule/${id}`);
};
