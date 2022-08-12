import React, { useEffect, useState } from "react";
import { Box, Button, MenuItem, Modal, TextField } from "@mui/material";
import { CreateSchedule, getManagers, getShift } from "../../../Api/Api";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "1rem",
  p: 4,
};

const ScheduleModal = ({ open, setOpen, getAllSchedule }) => {
  const [manager, setManager] = useState([]);
  const [shifts, setShifts] = useState([]);
  const [schedule, setSchedule] = useState({
    shift: "",
    date: null,
    managerID: "",
  });


  const AddSchedule = async() => {
    try {
        await CreateSchedule(schedule);
        setSchedule("")
        getAllSchedule();
        setOpen(false);
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
        const res = await getManagers();
        const res2 = await getShift();
        console.log(res.data)
        console.log(res2.data)
        setManager(res.data)
        setShifts(res2.data)
    };
    fetchData();
  }, [])

  return (
    <>
      <Modal
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                height: "auto",
                width: "100%",
                borderRadius: "1rem",
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <TextField
                label="Select manager ID"
                size="small"
                variant="outlined"
                select
                value={schedule.managerID}
                onChange={(e) =>
                  setSchedule({
                    ...schedule,
                    managerID: e.target.value,
                  })
                }
                sx={{ width: "100%", marginTop: "1.5rem" }}
              >
                {manager.length &&
                  manager.map((man) => (
                    <MenuItem key={man.EID} value={man.EID}>
                      {man.EID} - {man.name}
                    </MenuItem>
                  ))}
              </TextField>
              <TextField
                label="Select shift"
                size="small"
                variant="outlined"
                select
                value={schedule.shift}
                onChange={(e) =>
                  setSchedule({
                    ...schedule,
                    shift: e.target.value,

                  })
                }
                sx={{ width: "100%", marginTop: "1.5rem" }}
              >
                {shifts.map((shift) => (
                  <MenuItem key={shift.key} value={shift.SID}>
                    {shift.SID} - {shift.Shift_name} 
                  </MenuItem>
                ))}
              </TextField>
              <Box sx={{marginTop:"1.5rem", width:"100%"}}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Select Date"
                    value={schedule.date}
                    forma
                    onChange={(e) =>
                      setSchedule({
                        ...schedule,
                        date: e.toISOString().slice(0, 19).replace("T", " "),
                      })
                    }
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              {/* <TextField
                label="Select status"
                size="small"
                variant="outlined"
                select
                value={schedule.status}
                onChange={(e) =>
                  setSchedule({
                    ...schedule,
                    status: e.target.value,
                  })
                }
                sx={{ width: "100%", marginTop: "1.5rem" }}
              >
                {statuses.map((status) => (
                  <MenuItem key={status.key} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField> */}
              <Button
                variant="contained"
                onClick={() => {
                  AddSchedule();
                  setOpen(false);
                }}
                sx={{
                  width: "100%",
                  marginTop: "1rem",
                  bgcolor: "#4e1ab6",
                  textTransform: "capitalize",
                  "&:hover": {
                    bgcolor: "#5902EC",
                  },
                }}
              >
                Add
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ScheduleModal;