import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/nav-bar/Navbar';
import Home from './components/pages/Home';
import './App.css';
import Chatbot from './components/pages/Chatbot';
import Services from './components/pages/Services';
//import SignIn from './components/pages/SignIn';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/chatbot" element={<Chatbot />}/>
          <Route exact path="/services" element={<Services />}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
