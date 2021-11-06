import React, { useEffect, useState } from 'react';
import './App.css';

const liff = window.liff;
const liffId = process.env.REACT_APP_LINE_LIFF_ID;

const App = () => {
  const [profile, setProfile] = useState("")

  const initializeApp = () =>{
    profile = JSON.stringify(liff.getProfile());
  }

  useEffect(() => {
    liff
        .init({
            liffId
        })
        .then(() => {
            initializeApp();
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

