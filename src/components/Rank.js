import React, { useEffect, useState } from 'react';
import {Typography} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const Rank = (props) => {
  const {rank_data, user_data } = props;
  let sorted_rank_data = rank_data.users;
  sorted_rank_data.sort((a, b) => ( b.total - a.total ))

  const LinearProgressWithLabel = (props) => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" value={100*props.value/rank_data.total} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}`}</Typography>
        </Box>
      </Box>
    );
  }
  return (
    <>
      <Typography variant="h6" style={{ fontWeight: 'bold'}}>
        | 即時排行榜 |
      </Typography>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: '100%',}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>參賽者</TableCell>
            <TableCell align="right">進度</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sorted_rank_data.map((user, idx) => (
            <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {idx+1} {user.name}
              </TableCell>
              <TableCell align="right"><LinearProgressWithLabel value={user.total} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default Rank;