import React, {useState, useEffect} from 'react';

const Home = (props) =>{
  const {profile} = props;

  return(
    <div>
        Home
        {profile.displayName}
    </div>
  )
}

export default Home;
