import React, { Component } from 'react';
import { HashRouter,Routes, Route, Link } from "react-router-dom";


const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
