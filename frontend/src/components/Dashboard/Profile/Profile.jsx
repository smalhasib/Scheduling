/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAdmin, getSingleEmployee } from "../../../Api/Api";
import ProfileModal from "./ProfileModal";

const Profile = () => {
  const [open, setOpen] = useState(false)
  const [admin, setAdmin] = useState({});
  const [employee, setEmployee] = useState({});

  const id = JSON.parse(localStorage.getItem("user")).id;
  const role = JSON.parse(localStorage.getItem("user")).role;

  // fetching data.....
      const fetchData = async () => {
        console.log(id);
        console.log(role);
        if (role === "admin") {
          const res = await getAdmin(id);
          console.log(res.data.data);
          setAdmin(res.data.data);
        } else {
          const res = await getSingleEmployee(id);
          console.log(res.data.data);
          setEmployee(res.data.data);
        }
      };
  useEffect(() => {
    fetchData();
  }, [id, role]);
  return (
    <>
      <Box
        sx={{
          height: { xs: "auto", md: "100vh" },
          width: "calc(100% - 280px)",
          position: "absolute",
          left: "280px",
          display: "flex",
          justifyContent: "center",
          // alignItems:"center",
          bgcolor: "#eee",
          // alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "40vh",
            display: "flex",
            justifyContent: "space-around",
            bgcolor: "#fff",
            padding: "2rem",
            marginTop: "10rem",
            borderRadius: "1rem",
          }}
        >
          <Box
            sx={{
              marginRight: "8rem",
            }}
          >
            <img
              src={role === "admin" ? admin.avatar: employee.avatar}
              alt=""
              className="h-52 w-52 p-2 rounded-md border-[1px] border-gray-300 "
            />
          </Box>
          <Box
            sx={{
              marginLeft: "5rem",
            }}
          >
            <span className="text-xl font-bold mt-3">
              ID : {role === "admin" ? admin.AID : employee.EID}
            </span>
            <h1 className="text-xl font-bold mt-3">
              Name : {role === "admin" ? admin.name : employee.name}
            </h1>
            <h1 className="text-xl font-bold mt-3">
              Email : {role === "admin" ? admin.email : employee.email}
            </h1>
            <h1 className="text-xl font-bold mt-3">
              Phone : {role === "admin" ? admin.phone : employee.phone}
            </h1>
            <h1 className="text-xl font-bold mt-3">
              Address : {role === "admin" ? admin.address : employee.address}
            </h1>
            <Box>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#4e1ab6",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                  marginTop: "1rem",
                  ":hover": {
                    bgcolor: "#4e1ab6",
                  },
                }}
                onClick={() => setOpen(!open)}
              >
                Edit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <ProfileModal
        open={open}
        setOpen={setOpen}
        employee={employee}
        admin={admin}
        fetchData={fetchData}
      />
    </>
  );
};

export default Profile;
