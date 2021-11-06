import React, { useEffect, useState } from 'react';
import Game from './Game';


const Games = (props) => {
  const {user_data, map_data, reply} = props;

  return (
    <>
      {map_data.games.map((game, idx) => <Game game={game} key={'game'+idx} pass={user_data.details[idx]} reply={reply}/>)}
    </>
  );
}

export default Games;