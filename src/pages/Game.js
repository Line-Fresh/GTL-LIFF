import React, {useState, useEffect} from 'react'

const Game = (props) => {
  const {profile} = props;

  return(
    <div>
      Game
      {JSON.stringify(profile)}
    </div>
  )
}

export default Game;
