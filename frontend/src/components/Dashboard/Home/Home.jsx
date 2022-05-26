import { Grid, Box } from "@mui/material";
import React from "react";
import ManagerNo from "./ManagerNo";
import ProjectNo from "./ProjectNo";
import ScheduleNo from "./ScheduleNo";
import WorkersNo from "./WorkersNo";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          height: { xs: "auto", md: "100vh" },
          width: "100%",
          display: "flex",
        }}
      >
        <Grid
          container
          spacing={6}
          sx={{
            width: { xs: "100%", md: "calc(100% - 280px)" },
            display: "flex",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: { xs: "center", md: "space-around" },
            padding: { xs: "1rem", md: "none" },
            marginTop: { xs: "1rem", md: "5rem" },
            position: "absolute",
            right: { xs: "22px", md: 0 },
          }}
        >
          <ManagerNo />
          <WorkersNo />
          <ProjectNo />
          <ScheduleNo />
        </Grid>
      </Box>
    </>
  );
};

export default Home;
