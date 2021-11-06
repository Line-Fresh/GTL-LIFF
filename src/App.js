import React, { useEffect, useState } from 'react';
import { useLiff } from 'react-liff';
import { Routes, Route, Navigate } from "react-router-dom";
import Game from './pages/Game';

const App = () => {
  const [profile, setProfile] = useState({});
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
        <Route path="/game" element={<Game profile={profile} />} />
        <Route path="/" element={<Navigate replace to="/game" />} />
      </Routes>
    </div>
  )
}

export default App;
