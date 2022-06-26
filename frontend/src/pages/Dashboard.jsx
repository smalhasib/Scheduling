import { Box } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Dashboard/Header/Header";
import Home from "../components/Dashboard/Home/Home";
import Managers from "../components/Dashboard/Managers/Managers";
import Project from "../components/Dashboard/Project/Project";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  const [show, setShow] = useState(
    localStorage.getItem('show')
    ||"home");

  useEffect(()=>{
  localStorage.setItem("show",show);
  },[show])
  return (
    <>
      <Box
        sx={{
          height: "auto",
          width: "100%",
          bgcolor: "#F2F5F9",
        }}
      >
        <Header />
        <Sidebar show={show} setShow={setShow} />
        {show === "home" && <Home />}
        {show === "manager" && <Managers />}
        {show === "project" && <Project/>}
      </Box>
    </>
  );
};

export default Dashboard;
