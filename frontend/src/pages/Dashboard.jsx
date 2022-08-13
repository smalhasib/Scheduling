import { Box } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Dashboard/Header/Header";
import Home from "../components/Dashboard/Home/Home";
import Managers from "../components/Dashboard/Managers/Managers";
import Profile from "../components/Dashboard/Profile/Profile";
import Project from "../components/Dashboard/Project/Project";
import Schedule from "../components/Dashboard/Schedule/Schedule";
import Shift from "../components/Dashboard/Shift/Shift";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import Teams from "../components/Dashboard/Teams/Teams";
import Work from "../components/Dashboard/Work/Work";
import Worker from "../components/Dashboard/Workers/Worker";

const Dashboard = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(localStorage.getItem("show") || "home");

  useEffect(() => {
    localStorage.setItem("show", show);
    const token = localStorage.getItem("jwtoken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate, show]);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#F2F5F9",
        }}
      >
        <Header />
        <Sidebar show={show} setShow={setShow} />
        {show === "home" && <Home />}
        {show === "manager" && <Managers />}
        {show === "project" && <Project />}
        {show === "worker" && <Worker />}
        {show === "teams" && <Teams />}
        {show === "profile" && <Profile />}
        {show === "shift" && <Shift/>}
        {show === "schedule" && <Schedule />}
        {show === "works" && <Work />}
      </Box>
    </>
  );
};

export default Dashboard;
