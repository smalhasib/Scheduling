import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../Landingpage/Navbar";
import { LoginUsers } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onValueChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const LoginUser = async () => {
    try {
      const res = await LoginUsers(user);
      console.log(res.data);
      const { token, id, role } = res.data;
      localStorage.setItem("jwtoken", token);
      localStorage.setItem("user", JSON.stringify({ id, role }));
      console.log(res.data);
      if (res.status === 200) {
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    } catch (error) {
      toast.error("Invalid Credentials", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          bgcolor: "#F2F5F9",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", md: "30%" },
            height: "400px",
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
            Login you account
          </Typography>
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
            onClick={LoginUser}
            variant="contained"
            sx={{ width: "100%", marginTop: "2rem" }}
          >
            Login
          </Button>
        </Box>
      </Box>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Login;
