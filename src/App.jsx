import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route }from'react-router-dom'
import Logo from './assets/logo.png'
import LandingPage from './Pages/LandingPage.jsx';
import Signup from '../src/Pages/Signup.jsx';
import Signin from '../src/Pages/Signin.jsx';
import Navbar from './Component/Navbar.jsx';
import './App.css'



function App() {

  return (
    <>

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
