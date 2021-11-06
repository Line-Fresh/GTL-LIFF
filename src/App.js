import React, { useEffect, useState } from 'react';
import {init, getProfile} from './utils/liffHelper';
import './App.css';

const App = () => {
  const [profile, setProfile] = useState("")
  init()

  useEffect(() => {
    getProfile()
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     liffHelper.init();
  //   })();
  // }, []]);

  return (
    <div>
      home{profile}
    </div>
  );
}

export default App;

