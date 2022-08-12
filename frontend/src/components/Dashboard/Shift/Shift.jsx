import { Box, Button } from "@mui/material";
import ShiftModal from "./ShiftModal";
import ShiftList from "./ShiftList";
import { useState } from "react";
import { useEffect } from "react";
import { getShift } from "../../../Api/Api";

const Shift = () => {
  const [open, setOpen] = useState(false);
  const [shift, setShift] = useState([])


    const fetchData = async () => {
      const res = await getShift();
      console.log(res);
      setShift(res.data)
    };
  useEffect(()=>{
    fetchData();
  },[])

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
          onClick={()=> setOpen(!open)}
          variant="contained"
          className="relative left-5 top-20 md:left-80 md:top-24"
        >
          Add shift
        </Button>
      </Box>
      <ShiftModal setOpen={setOpen} open={open} fetchData={fetchData}/>
      <ShiftList shift={shift} fetchData={fetchData} />
 
    </>
  );
};

export default Shift;
