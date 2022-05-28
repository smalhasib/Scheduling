import React from 'react'
import { Box, Button, Modal, Typography, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius:"1rem",
  p: 4,
};
const ManagerModal = ({open, setOpen }) => {
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
                sx={{ width: "100%", marginTop: "1.5rem" }}
              />
              <TextField
                label="Email"
                type="text"
                size="small"
                variant="outlined"
                sx={{ width: "100%", marginTop: "1.5rem" }}
              />
              <TextField
                label="Password"
                type="password"
                size="small"
                variant="outlined"
                sx={{ width: "100%", marginTop: "1.5rem" }}
              />
              <Button
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

export default ManagerModal