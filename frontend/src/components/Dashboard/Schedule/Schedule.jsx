import { Box } from '@mui/material';
import React from 'react'

const Schedule = () => {
  return (
    <>
      <Box
        sx={{
          height: { xs: "auto", md: "100vh" },
          width: "100%",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}
      >
        <h1 className='text-3xl font-bold'>Schedule page.</h1>
      </Box>
    </>
  );
}

export default Schedule