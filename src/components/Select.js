import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';

const Item = ({title, selected}) => {
  let style = {textAlign: 'center', borderBottom: '1px solid lightgrey', paddingBottom:'6px', paddingTop: '10px'}
  if(selected) style.borderBottom = '2px solid lightgreen'
  return(
    <div style={style}>
      {title}
    </div>
  )
};
  
const Progress = (props) => {
  const {mode, setMode} = props

  const handleClick = (e) => {
    setMode(e)
  }

  return (
    <div style={{ width: '100%'}}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2 }} columns={{ xs: 6 }}>
            <Grid item xs={2} onClick={() => handleClick(0)}>
              <Item title="遊戲進度" selected={mode == 0}/>
            </Grid>
            <Grid item xs={2} onClick={() => handleClick(1)}>
              <Item title="即時排名" selected={mode == 1} />
            </Grid>
            <Grid item xs={2} onClick={() => handleClick(2)}>
              <Item title="遊戲地圖" selected={mode == 2} />
            </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Progress;