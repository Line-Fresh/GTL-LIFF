import React, { useEffect, useState } from 'react';
import { useLiff } from 'react-liff';
import { HashRouter, Routes, Route } from "react-router-dom";
import Game from './pages/Game';
import Social from './pages/Social';

const Home = () => <div><h2>Home</h2></div>

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

  return (
    <HashRouter basename="/">
      
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={()=><Game profile={profile} />} />
          <Route exact path="/social" component={() => <Social profile={profile} />} />
        </Routes>
      
    </HashRouter>
  )
}

export default App;


// import React, { Component } from 'react';
// import { HashRouter,Routes, Route, Link } from "react-router-dom";


// const Home = () => <div><h2>Home</h2></div>
// const About = () => <div><h2>About</h2></div>

// class App extends Component {
//   render() {
//     return (
//       <HashRouter basename="/">
//         <div>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//           </ul>
//           <Routes>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           </Routes>
//         </div>
//       </HashRouter>
//     );
//   }
// }

// export default App;
