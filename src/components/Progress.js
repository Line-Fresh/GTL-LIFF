import React, { useEffect, useState } from 'react';
import {LinearProgress, Box, Typography} from '@mui/material';
import ColoredLinearProgress from './ColoredLinearProgress';

const Progress = (props) => {
  const {progress} = props;

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <ColoredLinearProgress value={progress} />
      </Box>
    </>
  );
}

export default Progress;