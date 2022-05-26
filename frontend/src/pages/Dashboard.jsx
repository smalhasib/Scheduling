import { Box } from "@mui/material"
import { useState } from "react"
import Header from "../components/Dashboard/Header/Header"
import Home from "../components/Dashboard/Home/Home"
import Sidebar from "../components/Dashboard/Sidebar/Sidebar"


const Dashboard = () => {
  const [show, setShow] = useState('home')
  return (
    <>
      <Box
        sx={{
          height:"auto",
          width: "100%",
          bgcolor: "#F2F5F9",
        }}
      >
        <Header />
        <Sidebar show={show} setShow={setShow}/>
        {show==='home' && <Home/>}
      </Box>
    </>
  );
}

export default Dashboard