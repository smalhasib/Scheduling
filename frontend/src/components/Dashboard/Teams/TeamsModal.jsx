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
  const [worker, setWorker] = useState({
    Id: "",
    Name: ""
  });
  const [manager, setManager] = useState({
    Id: "",
    Name: ""
  });
  const [workers, setWorkers] = useState([]);
  const [managers, setManagers] = useState([]);

  const addTeam = async () => {
    await CreateTeams({ worker, manager });
    setOpen(!open)
    setWorker("")
    setManager("")
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getManagers();
      setManagers(res.data);
      const res2 = await getWorkers();
      setWorkers(res2.data);
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
                value={worker.Id}
                onChange={(e) => setWorker({
                  Id: e.target.value,
                  Name: workers.filter(element => element.EID === e.target.value)[0].name
                })}
                sx={{ width: "100%", marginTop: "1.5rem" }}
              >
                {workers.length &&
                  workers.map((wor) => (
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
                value={manager.Id}
                onChange={(e) => setManager({
                  Id: e.target.value,
                  Name: managers.filter(element => element.EID === e.target.value)[0].name
                })}
                sx={{ width: "100%", marginTop: "1.5rem" }}
              >
                {managers.length &&
                  managers.map((man) => (
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
