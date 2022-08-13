import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import ScheduleModal from "./ScheduleModal";
import ScheduleList from "./ScheduleList";
import { GetAllSchedule, GetEmployeeSchedule, GetManagerSchedule } from "../../../Api/Api";

const Schedule = () => {
  const [open, setOpen] = useState(false);
  const [scheduleLists, setScheduleLists] = useState([]);
  const [employeeSchedule, setEmployeeSchedule] = useState([]);
  const [managerSchedule, setManagerSchedule] = useState([]);

  const getAllSchedule = async () => {
    const res = await GetAllSchedule();
    console.log(res.data)
    setScheduleLists(res.data);
  };
  const getEmployeeSchedule = async()=>{
    const res = await GetEmployeeSchedule();
    console.log(res.data)
    setEmployeeSchedule(res.data)
  }
  const getManagerSchedule = async()=>{
    const res = await GetManagerSchedule();
    setManagerSchedule(res.data);
  }
   const role = JSON.parse(localStorage.getItem("user")).role;
  useEffect(() => {
    getAllSchedule();
    getEmployeeSchedule();
    getManagerSchedule()
  }, []);

  return (
    <>
      <Box
        sx={{
          height: { xs: "auto", md: "100vh" },
          width: "100%",
        }}
      >
        {role === "admin" && (
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
            Add Schedule
          </Button>
        )}
      </Box>
      <ScheduleModal
        open={open}
        setOpen={setOpen}
        getAllSchedule={getAllSchedule}
      />
      <ScheduleList
        getAllSchedule={getAllSchedule}
        scheduleLists={scheduleLists}
        employeeSchedule={employeeSchedule}
        managerSchedule={managerSchedule}
      />
    </>
  );
};

export default Schedule;
