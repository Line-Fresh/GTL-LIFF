import React, {useState, useEffect} from 'react'

const Game = (props) => {
  const {profile} = props;

  return(
    <div>
      Game
      {profile.displayName}
    </div>
  )
}

export default Game;
