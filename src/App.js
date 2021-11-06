import React, { useEffect, useState } from 'react';
import './App.css';

const liff = window.liff;
const liffId = process.env.REACT_APP_LINE_LIFF_ID;

const App = () => {
  const [profile, setProfile] = useState("")


  useEffect(() => {
    liff
        .init({
            liffId
        })
        .then(() => {
          setProfile(JSON.stringify(liff.getProfile()))
        })
        .catch((err) => {
            alert('fail to open');
        });
  }, []);

  return (
    <div>
      home {profile}
    </div>
  );
}

export default App;

