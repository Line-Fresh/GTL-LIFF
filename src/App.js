import React, { useEffect, useState } from 'react';
import { useLiff } from 'react-liff';
import { Routes, Route } from "react-router-dom";
import Game from './pages/Game';
import Social from './pages/Social';
import Home from './pages/Home';

const App = () => {
  const [profile, setProfile] = useState({});
  //{"displayName":"displayName","pictureUrl":"https://example.com/test.jpg","statusMessage":"","userId":"userId"}
  const { error, liff, isLoggedIn, ready } = useLiff();

  useEffect(() => {
    if (!isLoggedIn) return;

    (async () => {
      const profile = await liff.getProfile();
      setProfile(profile);
    })();
  }, [liff, isLoggedIn]);

  if (!ready) return <p>Loading...</p>

  if (!isLoggedIn) {
    return <button className="App-button" onClick={liff.login}>Login</button>
  }

  return (
    <div>
      Top Bar
      <Routes>
        <Route path="/" element={<Home profile={profile} />} />
        <Route path="/game" element={<Game profile={profile} />} />
        <Route path="/social" element={<Social profile={profile} />} />
      </Routes>
    </div>
  )
}

export default App;
