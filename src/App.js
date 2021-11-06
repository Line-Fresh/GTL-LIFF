import React, { useEffect, useState } from 'react';
import liffHelper from './utils/liffHelper';
import './App.css';

const App = () => {
  const [profile, setProfile] = useState("")

  useEffect(() => {
    (async () => {
      liffHelper.init();
      const profile = JSON.strongify(liffHelper.getProfile());
    })();
  }, []);


  return (
    <div>
      home{profile}
    </div>
  );
}

export default App;

