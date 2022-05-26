import React from "react";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
const ScheduleNo = () => {
  return (
    <>
      <Grid xs={12} sm={6} md={8} item>
        <Card sx={{ px: 1, borderRadius: "1rem" }}>
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5">Schedules for employees</Typography>
              <Box
                sx={{
                  marginTop: "1rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#8D8DAA",
                    padding: ".5rem",
                    borderRadius: ".5rem",
                  }}
                >
                  <AccessAlarmIcon
                    sx={{
                      fontSize: "2rem",
                      color: "",
                    }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginLeft: "1rem" }}
                >
                  From 28/05/22 To 03/06/22
                </Typography>
              </Box>
            </Box>
            <Box>
              <img
                src="/img/schedule_img.jpg"
                alt=""
                className="w-11/12 h-48 rounded-xl"
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default ScheduleNo;
