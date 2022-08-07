import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import WorkerLists from "./WorkerLists";
import WrokersModal from "./WrokersModal";
import { getWorkers } from "../../../Api/Api";
import { useEffect } from "react";

const Worker = () => {
  const [open, setOpen] = useState(false);
    const [workers, setWorkers] = useState([]);
     const FetchData = async () => {
       const res = await getWorkers();
       setWorkers(res.data);
     };
     useEffect(() => {
       FetchData();
     }, []);
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
          Add worker
        </Button>
      </Box>
      <WrokersModal setOpen={setOpen} open={open} FetchData={FetchData}/>
      <WorkerLists workers = {workers} FetchData={FetchData}/>
    </>
  );
};

export default Worker;
