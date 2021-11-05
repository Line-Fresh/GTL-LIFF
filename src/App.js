import React, { useEffect, useState } from 'react';
import { useLiff } from 'react-liff';
import { HashRouter, Route } from "react-router-dom";
import Game from './pages/Game';
import Social from './pages/Social';

const App = () => {
  const [profile, setProfile] = useState('');
  const { error, liff, isLoggedIn, ready } = useLiff();

  useEffect(() => {
    if (!isLoggedIn) return;

    (async () => {
      const profile = await liff.getProfile();
      setProfile(profile);
    })();
  }, [liff, isLoggedIn]);

  return (
    <HashRouter basename="/">
      {(error || !isLoggedIn || !ready)? <p>Loading...</p>:
        <div>
          <Route exact path="/game" component={()=><Game profile={profile} />} />
          <Route exact path="/social" component={() => <Social profile={profile} />} />
        </div>
      }
    </HashRouter>
  )
}

export default App;