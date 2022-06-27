import React, { useState } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";

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
const ManagerModal = ({ open, setOpen }) => {
  const [generateManager, setGenerateManger] = useState({});

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onValueChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const GenerateEmailPass = () => {
    if (user.name.length > 0) {
      const first = user.name.split(" ")[0];
      const randomNum = Math.floor(Math.random() * 1000 + 10);
      const managerEmail = first.concat(randomNum + "@admin.com");
      const genetatePassword = `${Math.floor(Math.random() * 100000 + 1000)}`;
      const managerEmailPass = { managerEmail, genetatePassword };
      console.log(managerEmailPass);
      setGenerateManger(managerEmailPass);
    }
  };

  const addManager = () => {
    console.log(user);
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
                label="Name"
                type="text"
                size="small"
                variant="outlined"
                name="name"
                value={user.name}
                onChange={onValueChange}
                sx={{ width: "100%", marginTop: "1.5rem" }}
              />
              <Button
                onClick={GenerateEmailPass}
                variant="contained"
                sx={{
                  width: "100%",
                  marginTop: "2rem",
                  textTransform: "capitalize",
                  bgcolor: "#4e1ab6",
                  "&:hover": {
                    bgcolor: "#5902EC",
                  },
                }}
              >
                Generate manager's Email and password.
              </Button>
              {Object.keys(generateManager).length > 0 && (
                <Box
                  sx={{
                    // bgcolor: "#eee",
                    width: "100%",
                    padding: ".5rem",
                    marginTop: "1.5rem",
                    fontSize: "1.1rem",
                    borderRadius: ".8rem",
                    boxShadow:"0px 3px 7px rgba(0,0,0,0.1)"
                  }}
                >
                  <p>Email : {generateManager.managerEmail}</p>
                  <p>Password : {generateManager.genetatePassword}</p>
                </Box>
              )}
              <TextField
                label="Email"
                type="text"
                size="small"
                variant="outlined"
                name="email"
                value={user.email}
                onChange={onValueChange}
                sx={{ width: "100%", marginTop: "1.5rem" }}
              />
              <TextField
                label="Password"
                type="password"
                size="small"
                variant="outlined"
                name="password"
                value={user.password}
                onChange={onValueChange}
                sx={{ width: "100%", marginTop: "1.5rem" }}
              />
              <Button
                onClick={addManager}
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

export default ManagerModal;
