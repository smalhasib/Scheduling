import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import ManagerLists from "./ManagerLists";
import ManagerModal from "./ManagerModal";
import { ToastContainer, toast } from "react-toastify";

const Managers = () => {
  const [open, setOpen] = useState(false);
  const checkAdmin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.role !== "admin") {
      toast.error("Only admin can add managers.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setOpen(!open);
    }
  };
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
          onClick={checkAdmin}
        >
          Add manager
        </Button>
      </Box>
      <ManagerModal setOpen={setOpen} open={open} />
      <ManagerLists />
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

export default Managers;
