import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAdmin, getSingleEmployee } from "../../../Api/Api";

const Profile = () => {
  const [admin, setAdmin] = useState({});
  const [employee, setEmployee] = useState({});

  const id = JSON.parse(localStorage.getItem("user")).id;
  const role = JSON.parse(localStorage.getItem("user")).role;
  useEffect(() => {
    const fetchData = async () => {
      console.log(id);
      console.log(role);
      if (role === "admin") {
        const res = await getAdmin(id);
        console.log(res.data.data);
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
      <Box
        sx={{
          height: { xs: "auto", md: "100vh" },
          width: "calc(100% - 250px)",
          position: "absolute",
          left: "250px",
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Box
          sx={{
            marginTop: "10rem",
            marginRight: "8rem",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/163/163834.png?w=360"
            alt=""
            className="h-52 w-52 p-2 rounded-md border-[1px] border-gray-300 "
          />
        </Box>
        <Box
          sx={{
            marginTop: "10rem",
            marginLeft: "5rem",
          }}
        >
          <span className="text-xl font-bold mt-3">
            ID : {role === "admin" ? admin.AID : employee.EID}
          </span>
          <h3 className=" text-xl font-bold mt-3">
            Role : {role === "admin" ? admin.name : employee.name}
          </h3>
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
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
