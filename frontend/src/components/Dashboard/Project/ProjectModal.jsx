import React, { useEffect, useState } from "react";
import { Box, Button, MenuItem, Modal, TextField } from "@mui/material";
import { getManagers, CreateProject } from "../../../Api/Api";
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

const ProjectModal = ({ open, setOpen, getAllProject }) => {
  const [manager, setManager] = useState([]);
  const [project, setProject] = useState({
    name: "",
    summary: "",
    status: "",
    MID: ""
  });
  const onValueChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };
  const AddProject = async () => {
    try {
      await CreateProject(project);
      setProject("");
      getAllProject();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getManagers();
      setManager(res.data);
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
                label="Select manager ID"
                size="small"
                variant="outlined"
                select
                value={project.MID}
                onChange={(e) => setProject({
                  ...project,
                  MID: e.target.value,
                })}
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
                label="Name"
                type="text"
                size="small"
                variant="outlined"
                name="name"
                value={project.name}
                onChange={onValueChange}
                sx={{ width: "100%", marginTop: "1.5rem" }}
              />
              <TextField
                label="Summary"
                type="text"
                size="small"
                variant="outlined"
                name="summary"
                value={project.summary}
                onChange={onValueChange}
                sx={{ width: "100%", marginTop: "1.5rem" }}
              />
              <TextField
                label="Status"
                type="text"
                size="small"
                variant="outlined"
                name="status"
                value={project.status}
                onChange={onValueChange}
                sx={{ width: "100%", marginTop: "1.5rem" }}
              />
              <Button
                variant="contained"
                onClick={() => {
                  AddProject();
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

export default ProjectModal;
