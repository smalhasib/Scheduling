import React, { useState } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import { addShift } from "../../../Api/Api";

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
const ShiftModal = ({ open, setOpen, fetchData }) => {
  const [shiftName, setShiftName] = useState("");
  const [shiftTime, setShiftTime] = useState("");

  const AddShift = async () => {
    await addShift({ shiftName, shiftTime });
    fetchData();
  };

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
          <TextField
            label="Shift name"
            size="small"
            variant="outlined"
            value={shiftName}
            onChange={(e) => setShiftName(e.target.value)}
            sx={{ width: "100%", marginTop: "1.5rem" }}
          />
          <TextField
            label="Shift time"
            size="small"
            variant="outlined"
            value={shiftTime}
            onChange={(e) => setShiftTime(e.target.value)}
            sx={{ width: "100%", marginTop: "1.5rem" }}
          />
          <Button
            variant="contained"
            onClick={() => {
              AddShift();
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
      </Modal>
    </>
  );
};

export default ShiftModal;
