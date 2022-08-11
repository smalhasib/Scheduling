import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import {
  getAdmin,
  getSingleEmployee,
  updateEmployee,
  updateAdmin,
} from "../../../Api/Api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "1rem",
  p: 4,
};

const ProfileModal = ({ open, setOpen, fetchData }) => {
  const role = JSON.parse(localStorage.getItem("user")).role;
  const id = JSON.parse(localStorage.getItem("user")).id;
  const [pic, setPic] = useState();

  const [admin, setAdmin] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [employee, setEmployee] = useState({
    name: "",
    age: "",
    NID: "",
    address: "",
    phone: "",
  });

  const picUploading = async(pics)=>{
     try {
       if (pics.type === "image/jpeg" || pics.type === "image/png") {
         const data = new FormData();
         data.append("file", pics);
         data.append("upload_preset", "database_project");
         data.append("cloud_name", "shanto78");
         const imgData = await axios.post(
           "https://api.cloudinary.com/v1_1/shanto78/image/upload",
           data
         );
         setPic(imgData.data.url.toString());
       } else {
         alert("Please select an image")
       }
     } catch (error) {
       console.log(error);
     }
  }
  // calling for update..
  const updateAdminOrEmployee = async () => {
    if (role === "admin") {
      await updateAdmin({name:admin.name, address:admin.address,phone:admin.phone, pic}, id);
      fetchData();
    } else {
      console.log(employee);
      await updateEmployee(employee, id);
      fetchData();
    }
  };

  // getting data for update...
  const onValueChange = (e) => {
    if (role === "admin") {
      setAdmin({
        ...admin,
        [e.target.name]: e.target.value,
      });
    } else {
      setEmployee({
        ...employee,
        [e.target.name]: e.target.value,
      });
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      if (role === "admin") {
        const res = await getAdmin(id);
        setAdmin(res.data.data);
      } else {
        const res = await getSingleEmployee(id);
        setEmployee(res.data.data);
      }
    };
    fetchData();
  }, [id, role]);
  return (
    <>
      <Modal
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <TextField
            placeholder="Name"
            type="text"
            size="small"
            variant="outlined"
            name="name"
            value={role === "admin" ? admin.name : employee.name}
            onChange={onValueChange}
            sx={{ width: "100%", marginTop: "1.5rem" }}
          />
          {role !== "admin" ? (
            <TextField
              placeholder="Age"
              type="text"
              size="small"
              variant="outlined"
              name="age"
              value={employee.age}
              onChange={onValueChange}
              sx={{ width: "100%", marginTop: "1.5rem" }}
            />
          ) : null}
          {role !== "admin" ? (
            <TextField
              placeholder="NID"
              type="text"
              size="small"
              variant="outlined"
              name="NID"
              value={employee.NID}
              onChange={onValueChange}
              sx={{ width: "100%", marginTop: "1.5rem" }}
            />
          ) : null}
          <TextField
            placeholder="Address"
            type="text"
            size="small"
            variant="outlined"
            name="address"
            value={role === "admin" ? admin.address : employee.address}
            onChange={onValueChange}
            sx={{ width: "100%", marginTop: "1.5rem" }}
          />
          <TextField
            placeholder="Phone"
            type="text"
            size="small"
            variant="outlined"
            name="phone"
            value={role === "admin" ? admin.phone : employee.phone}
            onChange={onValueChange}
            sx={{ width: "100%", marginTop: "1.5rem" }}
          />
          <TextField
            placeholder="Change password"
            type="password"
            size="small"
            variant="outlined"
            name="password"
            value={role === "admin" ? admin.password : employee.password}
            onChange={onValueChange}
            sx={{ width: "100%", marginTop: "1.5rem" }}
          />
          <div className="flex items-center justify-center bg-grey-lighter">
            <label className="w-full mt-5 text-[20px] border-[1px] border-gray-400 px-3 py-1 flex flex-col items-center bg-white rounded-lg cursor-pointer hover:bg-[#4e1ab6] hover:text-white">
              <span className="text-[15px] text-base leading-normal">
                Choose Your File
              </span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => picUploading(e.target.files[0])}
              />
            </label>
          </div>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              marginTop: "1.5rem",
              bgcolor: "#4e1ab6",
              textTransform: "capitalize",
              fontSize: "1rem",
              ":hover": {
                bgcolor: "#4e1ab6",
              },
            }}
            onClick={() => {
              updateAdminOrEmployee();
              setOpen(false);
            }}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ProfileModal;
