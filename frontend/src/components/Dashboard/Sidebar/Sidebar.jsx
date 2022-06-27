import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FaceIcon from "@mui/icons-material/Face";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LogoutIcon from "@mui/icons-material/Logout";
import WorkIcon from "@mui/icons-material/Work";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isDrawerOpen, show, setShow }) => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("jwtoken", "userID", "userRole");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <>
      <List
        sx={{
          position: "fixed",
          width: "280px",
          height: "100vh",
          bgcolor: "#4e1ab6",
          color: "#fff",
          padding: "1rem",
          display: { xs: isDrawerOpen ? "block" : "none", md: "block" },
          boxShadow:
            "rgb(159 162 191 / 18%) 2px 0px 3px, rgb(159 162 191 / 32%) 1px 0px 1px",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <Box
          sx={{
            width: "100%",
            height: "auto",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-center",
            alignItems: "center",
            padding: ".5rem",
          }}
        >
          <img
            src="/img/database_logo.png"
            alt="logo"
            className="h-7 w-7 ml-3"
          />
          <Box to="/dashobard">
            <span className="text-2xl font-bold ml-3">DATABASE</span>
          </Box>
        </Box>
        <Box
          className={`hover:bg-gray-500 hover:rounded-xl ${
            show === "home" ? "bg-gray-500 rounded-xl" : "none"
          }`}
          onClick={() => setShow("home")}
        >
          <ListItemButton sx={{ marginTop: ".5rem" }}>
            <ListItemIcon>
              <HomeIcon className="text-[#fff]" />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </Box>
        <Box
          className={`hover:bg-gray-500 hover:rounded-xl ${
            show === "manager" ? "bg-gray-500 rounded-xl" : "none"
          }`}
          onClick={() => setShow("manager")}
        >
          <ListItemButton sx={{ marginTop: ".5rem" }}>
            <ListItemIcon>
              <PersonIcon className="text-[#fff]" />
            </ListItemIcon>
            <ListItemText primary="Managers" />
          </ListItemButton>
        </Box>
        <Box
          className={`hover:bg-gray-500 hover:rounded-xl ${
            show === "worker" ? "bg-gray-500 rounded-xl" : "none"
          }`}
          onClick={() => setShow("worker")}
        >
          <ListItemButton sx={{ marginTop: ".5rem" }}>
            <ListItemIcon>
              <GroupIcon className="text-[#fff]" />
            </ListItemIcon>
            <ListItemText primary="Workers" />
          </ListItemButton>
        </Box>
        <Box
          className={`hover:bg-gray-500 hover:rounded-xl ${
            show === "project" ? "bg-gray-500 rounded-xl" : "none"
          }`}
          onClick={() => setShow("project")}
        >
          <ListItemButton sx={{ marginTop: ".5rem" }}>
            <ListItemIcon>
              <WorkIcon className="text-[#fff]" />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </Box>
        <Box
          className={`hover:bg-gray-500 hover:rounded-xl ${
            show === "schedule" ? "bg-gray-500 rounded-xl" : "none"
          }`}
          onClick={() => setShow("schedule")}
        >
          <ListItemButton sx={{ marginTop: ".5rem" }}>
            <ListItemIcon>
              <AccessTimeIcon className="text-[#fff]" />
            </ListItemIcon>
            <ListItemText primary="Schedule" />
          </ListItemButton>
        </Box>
        <Box
          className={`hover:bg-gray-500 hover:rounded-xl ${
            show === "profile" ? "bg-gray-500 rounded-xl" : "none"
          }`}
          onClick={() => setShow("profile")}
        >
          <ListItemButton sx={{ marginTop: ".5rem" }}>
            <ListItemIcon>
              <FaceIcon className="text-[#fff]" />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </Box>
        <Box onClick={logOut} className={`hover:bg-gray-500 hover:rounded-xl`}>
          <ListItemButton sx={{ marginTop: ".5rem" }}>
            <ListItemIcon>
              <LogoutIcon className="text-[#fff]" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </Box>
      </List>
    </>
  );
};

export default Sidebar;
