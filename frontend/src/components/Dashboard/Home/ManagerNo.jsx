import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const ManagerNo = () => {
  return (
    <Grid xs={12} sm={6} md={4} item>
      <Card sx={{ px: 1, borderRadius: "1rem" }}>
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" noWrap>
            Number of Managers
          </Typography>
          <Box
            sx={{
              pt: 3,
              display: "flex",
              alignItems:"center",
              justifyContent: "flex-start",
            }}
          >
            <Box
              sx={{
                padding: ".5rem",
                bgcolor: "#7FB5FF",
                borderRadius: ".5rem",
              }}
            >
              <PeopleAltIcon
                sx={{ fontSize: "2rem", color: "#2155CD", fontWeight: "bold" }}
              />
            </Box>

            <Typography
              variant="h6"
              gutterBottom
              noWrap
              sx={{ marginLeft: "1rem" }}
            >
              Total - 5
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ManagerNo;
