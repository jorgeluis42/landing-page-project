import React from 'react';
import {
    BrowserRouter as Router,
    Switch, 
    Route
  }
  from  'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ParticlesContainer from './components/particles/ParticlesContainer'
import Userdisplay from './components/Userdisplay/Userdisplay';
import Projectdisplay from './components/Projectdisplay/Projectdisplay';
import Contactdisplay from './components/Contactdisplay/Contactdisplay';

function App() {
  return (
    <Router>
    <Navbar/>
    <ParticlesContainer/>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/project" component={Projectdisplay}/>
    <Route path="/contact" component={Contactdisplay}/>
    </Switch>
    </Router>
  );
}

const Home = () => (
  <div>
  <Userdisplay/>
  </div>
)

export default App;