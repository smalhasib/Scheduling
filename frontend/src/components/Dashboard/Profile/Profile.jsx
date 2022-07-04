import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const Profile = () => {
//   const [employee, setEmployee] = useState({});
//   const [admin, setAdmin] = useState({});

//   useEffect(() => {
//     const fetchData = () => {
//       const id = JSON.parse(localStorage.getItem("user")).id;
//       const role = JSON.parse(localStorage.getItem("user")).role;
//       console.log(id);
//       console.log(role);
//       if(role === "admin"){

//       }
//     };
//     fetchData();
//   }, []);
  return (
    <>
      <Box
        sx={{
          height: { xs: "auto", md: "100vh" },
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="text-3xl">Profile</h1>
      </Box>
    </>
  );
};

export default Profile;
