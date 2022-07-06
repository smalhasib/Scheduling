import { Box } from "@mui/material";
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
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="text-3xl">
          {role === "admin" ? admin.AID : employee.EID}
        </h1>
        <h1 className="text-3xl">
          {role === "admin" ? admin.name : employee.name}
        </h1>
        <h1 className="text-3xl">
          {role === "admin" ? admin.email : employee.email}
        </h1>
        <h1 className="text-3xl">
          {role === "admin" ? admin.phone : employee.phone}
        </h1>
        <h1 className="text-3xl">
          {role === "admin" ? admin.address : employee.address}
        </h1>
      </Box>
    </>
  );
};

export default Profile;
