import React from "react";
import ParticlesContainer from "./components/particles/ParticlesContainer";
import Navbar from './components/Navbar/Navbar';
import './App.css'
import Name from './components/NameTyping/Hello'

function App() {
  return (
    <div>
    <Navbar/>
      <ParticlesContainer/>
      <Name/>
    </div>
    
  );
}

export default App;