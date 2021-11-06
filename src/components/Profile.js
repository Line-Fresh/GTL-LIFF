import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const Profile = (props) => {
  const {profile} = props;
  console.log(profile)

  return (
    <div style={{paddingTop: '15px'}}>
      <div style={{float: 'left'}}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar 
            style={{ height: '60px', width: '60px' }} 
            src={profile.pictureUrl} 
          />
        </StyledBadge>
      </div>
      <div style={{ marginLeft: '100px', marginTop: '-15px'}}>
        <p style={{fontSize: '20px', fontWeight: 'bold'}}>虎尾闖關GO</p>
        <p style={{marginTop: '-10px'}}>{profile.displayName}</p>
      </div>
    </div>
  );
}

export default Profile;