import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          //   alignItems: "center",
          bgcolor: "#F2F5F9",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", md: "30%" },
            height: "auto",
            boxShadow: "0 15px 25px rgba(0, 0, 0, 0.2)",
            borderRadius: "1rem",
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "absolute",
            top: "15%",
          }}
        >
            <img src="/img/database_logo.png" alt="logo" />
          <Typography variant="h6" sx={{fontWeight:"bold", marginTop:"1rem"}}>Login you account</Typography>
          <TextField
            label="Email"
            type="text"
            size="small"
            variant="outlined"
            sx={{ width: "100%", marginTop: "1.5rem" }}
          />
          <TextField
            label="Password"
            type="password"
            size="small"
            variant="outlined"
            sx={{ width: "100%", marginTop: "1.5rem" }}
          />
          <Button variant="contained" sx={{ width: "100%", marginTop: "2rem" }}>
            Login
          </Button>
          <Box></Box>
        </Box>
      </Box>
    </>
  );
}

export default Login