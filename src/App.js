import React, { useEffect, useState } from 'react';
import { useLiff } from 'react-liff';
import HomePage from './pages/HomePage';
import './App.css';

const App = () => {
  const [profile, setProfile] = useState({});
  const { error, liff, isLoggedIn, ready } = useLiff();

  useEffect(() => {
    if (!isLoggedIn) return;
    (async () => {
      const profile = await liff.getProfile()
      setProfile(profile)
    })();
  }, [liff, isLoggedIn]);

  if (error) alert("Something is wrong.")
  // if (!ready) alert("Loading...")
  if (!isLoggedIn) {
    return(
      <div className="App">
        <button className="App-button" onClick={liff.login}>Login</button>
      </div>
    )
  }
  return (
    <HomePage profile={profile} />
  );
}

export default App;