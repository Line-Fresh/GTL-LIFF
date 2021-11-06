import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import { Box, Typography, LinearProgress } from '@mui/material';

const styles = props => ({
  colorPrimary: {
    backgroundColor: '#B2DFDB',
  },
  barColorPrimary: {
    backgroundColor: 'Teal',
  }
});

const ColoredLinearProgress = (props) => {
    const { classes } = props;
    return (<Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Box sx={{ width: '100%', mr: 1 }}>
    <LinearProgress variant='determinate' {...props} classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}}/>
    </Box>
    <Box sx={{ minWidth: 35 }}>
      <Typography variant="body2" color="text.secondary">{`${Math.round(
        props.value,
      )}%`}</Typography>
    </Box>
  </Box>)
}

export default  withStyles(styles)(ColoredLinearProgress);