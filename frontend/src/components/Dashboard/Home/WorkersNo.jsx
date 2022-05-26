import React from 'react'
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
const WorkersNo = () => {
  return (
    <Grid xs={12} sm={6} md={4} item>
      <Card sx={{ px: 1, borderRadius: "1rem" }}>
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" noWrap>
            Number of Workers
          </Typography>
          <Box
            sx={{
              pt: 3,
              display: "flex",
              alignItems:"center",
              justifyContent: "flex-start",
            }}
          >
            <Box sx={{ padding: ".5rem", bgcolor: "#A1E3D8", borderRadius:".5rem"}}>
              <GroupIcon
                sx={{ fontSize: "2rem", color: "#069A8E", fontWeight: "bold" }}
              />
            </Box>
            <Typography
              variant="h6"
              gutterBottom
              noWrap
              sx={{ marginLeft: "1rem" }}
            >
              Total - 30
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default WorkersNo