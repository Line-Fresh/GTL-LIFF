import React, { useEffect, useState } from 'react';
import { useLiff } from 'react-liff';

import './App.css';

const App = () => {
  const [displayName, setDisplayName] = useState('');
  const { error, liff, isLoggedIn, ready } = useLiff();

  useEffect(() => {
    if (!isLoggedIn) return;

    (async () => {
      const profile = await liff.getProfile();
      setDisplayName(profile.displayName);
    })();
  }, [liff, isLoggedIn]);

  const showDisplayName = () => {
    if (error) return <p>Something is wrong.</p>;
    if (!ready) return <p>Loading...</p>;

    if (!isLoggedIn) {
      return <button className="App-button" onClick={liff.login}>Login</button>;
    }
    return (
      <>
        <p>Welcome to the react-liff demo app, {displayName}!</p>
        <button className="App-button" onClick={liff.logout}>Logout</button>
      </>
    );
  }

  return (
    <div className="App">
      <header className="App-header">{showDisplayName()}</header>
    </div>
  );
}

export default App;