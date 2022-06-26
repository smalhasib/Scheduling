import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import Navbar from "../Landingpage/Navbar";
import { createAdmin } from "../../Api/Api";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();
  const [generateAdmin, setGenerateAdmin] = useState({});

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Generating admin email and password....
  const GenerateEmailPass = () => {
    if(user.name.length > 0){
      const first = user.name.split(" ")[0];
      const randomNum = Math.floor(Math.random() * 1000 + 10);
      const adminEmail = first.concat(randomNum + "@admin.com");
      const genetatePassword = Math.floor(Math.random() * 100000 + 1000);
      const adminUser = { adminEmail, genetatePassword };
      setGenerateAdmin(adminUser);
    }
  };

  const onValueChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const SignupUser = async () => {
    const res = await createAdmin(user);
    if (res.status === 200) {
      navigate("/login");
    }
  };
  return (
    <>
      <Navbar />
      <Box
        sx={{
          position: "absolute",
          top: "10vh",
          height: "90vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          bgcolor: "#F2F5F9",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", md: "30%" },
            height: "600px",
            boxShadow: "0 15px 25px rgba(0, 0, 0, 0.2)",
            borderRadius: "1rem",
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            top: "10%",
          }}
        >
          <img src="/img/database_logo.png" alt="logo" />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginTop: "1rem" }}
          >
            Create your account
          </Typography>
          <TextField
            label="Name"
            type="text"
            size="small"
            variant="outlined"
            name="name"
            value={user.name}
            onChange={onValueChange}
            sx={{ width: "100%", marginTop: "1.5rem" }}
          />
          <Button
            onClick={GenerateEmailPass}
            variant="contained"
            sx={{
              width: "100%",
              marginTop: "2rem",
              textTransform: "capitalize",
            }}
          >
            Generate admin Email and password.
          </Button>
          {Object.keys(generateAdmin).length > 0 && (
            <Box
              sx={{
                bgcolor: "#eee",
                width: "100%",
                padding: ".5rem",
                marginTop: "1.5rem",
                fontSize: "1.1rem",
                borderRadius: ".8rem",
              }}
            >
              <p>Email : {generateAdmin.adminEmail}</p>
              <p>Password : {generateAdmin.genetatePassword}</p>
            </Box>
          )}
          <TextField
            label="Email"
            type="text"
            size="small"
            variant="outlined"
            name="email"
            value={user.email}
            onChange={onValueChange}
            sx={{ width: "100%", marginTop: "1.5rem" }}
          />
          <TextField
            label="Password"
            type="password"
            size="small"
            variant="outlined"
            name="password"
            value={user.password}
            onChange={onValueChange}
            sx={{ width: "100%", marginTop: "1.5rem" }}
          />
          <Button
            onClick={SignupUser}
            variant="contained"
            sx={{ width: "100%", marginTop: "2rem" }}
          >
            SignUp
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
