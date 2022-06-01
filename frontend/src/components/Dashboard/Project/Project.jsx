import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
const Project = () => {
      const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          height: { xs: "auto", md: "100vh" },
          width: "100%",
        }}
      >
        <Button
          sx={{
            bgcolor: "#4e1ab6",
            textTransform: "capitalize",
            "&:hover": {
              bgcolor: "#5902EC",
            },
          }}
          variant="contained"
          className="relative left-5 top-20 md:left-80 md:top-24"
          onClick={() => setOpen(true)}
        >
          Add project
        </Button>
      </Box>
      <ProjectModal open={open} setOpen={setOpen}/>
    </>
  );
};

export default Project;
