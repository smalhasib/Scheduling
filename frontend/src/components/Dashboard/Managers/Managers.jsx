import { Box, Button } from "@mui/material";
import React,{useState} from "react";
import ManagerModal from "./ManagerModal";



const Managers = () => {
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
          Add manager
        </Button>
      </Box>
      <ManagerModal setOpen={setOpen} open={open} />
    </>
  );
};

export default Managers;
