import React, { useState } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import { createEmployee } from "../../../Api/Api";
import { ToastContainer, toast } from "react-toastify";

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
const WrokersModal = ({ open, setOpen, FetchData }) => {
  const [generateWorker, setGenerateWorker] = useState({});

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

  // generating email and password for manager...
  const GenerateEmailPass = () => {
    if (user.name.length > 0) {
      const first = user.name.split(" ")[0];
      const randomNum = Math.floor(Math.random() * 1000 + 10);
      const workerEmail = first.concat(randomNum + "@worker.com");
      const genetatePassword = `${Math.floor(Math.random() * 100000 + 1000)}`;
      const workerEmailPass = { workerEmail, genetatePassword };
      setGenerateWorker(workerEmailPass);
    }
  };

  const addWorker = async () => {
    console.log(user);
    try {
      if (
        user.email !== generateWorker.workerEmail ||
        user.password !== generateWorker.genetatePassword
      ) {
        toast.error("Use our email and password.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
      await createEmployee(user);
      FetchData();
      setGenerateWorker("");
      setUser("");
      setOpen(false)
    } catch (error) {
      console.log(error);
    }
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
                Generate worker's Email and password.
              </Button>
              {Object.keys(generateWorker).length > 0 && (
                <Box
                  sx={{
                    // bgcolor: "#eee",
                    width: "100%",
                    padding: ".5rem",
                    marginTop: "1.5rem",
                    fontSize: "1.1rem",
                    borderRadius: ".8rem",
                    boxShadow: "0px 3px 7px rgba(0,0,0,0.1)",
                  }}
                >
                  <p>Email : {generateWorker.workerEmail}</p>
                  <p>Password : {generateWorker.genetatePassword}</p>
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
                onClick={addWorker}
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

export default WrokersModal;
