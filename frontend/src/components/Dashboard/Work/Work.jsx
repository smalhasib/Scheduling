import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import WorkLists from "./WorkList";
import { GetAllWork } from "../../../Api/Api";

const Work = () => {
  const [workLists, setworkLists] = useState([]);

  const getAllWork = async () => {
    const res = await GetAllWork();
    setworkLists(res.data);
  };
  useEffect(() => {
    getAllWork();
  }, []);

  return (
    <>
      <>
        <Box
          sx={{
            height: { xs: "auto", md: "100vh" },
            width: "100%",
          }}
        >
          <h1 className="text-3xl font-bold">Works page.</h1>
        </Box>
        <WorkLists getAllWork={getAllWork} workLists={workLists} />
      </>
    </>
  );
};

export default Work;
