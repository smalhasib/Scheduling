import { Box, Button, MenuItem, Modal, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getManagers, getWorkers, CreateTeams } from "../../../Api/Api";

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

const TeamsModal = ({ open, setOpen }) => {
  const [workerId, setWorkerId] = useState("");
  const [managerId, setManagerId] = useState("");
  const [worker, setWorker] = useState([]);
  const [manager, setManager] = useState([]);

  const addTeam = async () => {
    await CreateTeams({ workerId, managerId });
    setOpen(!open)
    setWorkerId("")
    setManagerId("")
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getManagers();
      setManager(res.data);
      const res2 = await getWorkers();
      setWorker(res2.data);
    };
    fetchData();
  }, []);
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
                label="Select worker ID"
                size="small"
                variant="outlined"
                select
                value={workerId}
                onChange={(e) => setWorkerId(e.target.value)}
                sx={{ width: "100%", marginTop: "1.5rem" }}
              >
                {worker.length &&
                  worker.map((wor) => (
                    <MenuItem key={wor.EID} value={wor.EID}>
                      {wor.EID} - {wor.name}
                    </MenuItem>
                  ))}
              </TextField>
              <TextField
                label="Select manager ID"
                size="small"
                variant="outlined"
                select
                value={managerId}
                onChange={(e) => setManagerId(e.target.value)}
                sx={{ width: "100%", marginTop: "1.5rem" }}
              >
                {manager.length &&
                  manager.map((man) => (
                    <MenuItem key={man.EID} value={man.EID}>
                      {man.EID} - {man.name}
                    </MenuItem>
                  ))}
              </TextField>
              <Button
                onClick={addTeam}
                variant="contained"
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

export default TeamsModal;
