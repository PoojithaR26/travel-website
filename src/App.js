import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/nav-bar/Navbar';
import Home from './components/pages/Home';
import './App.css';
import Feedback from './components/pages/Feedback';
import Services from './components/pages/Services';
import SignIn from './components/pages/SignIn';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/feedback" element={<Feedback />}/>
          <Route exact path="/services" element={<Services />}/>
          <Route exact path="/sign-in" element={<SignIn />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
