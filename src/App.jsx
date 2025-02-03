import React from 'react'
import { BrowserRouter as Router, Routes, Route } from'react-router-dom'
// import Logo from './assets/logo.png'
import LandingPage from './Pages/LandingPage.jsx';
import Signup from '../src/Pages/Signup.jsx';
import Signin from '../src/Pages/Signin.jsx';
import Navbar from './Component/Navbar.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Layout from './Component/Layout.jsx';
import Assesments from "./Pages/Assesments";
import Classes from "./Pages/Classes";
import MarkingScheme from "./Pages/MarkingScheme";
import Analytics from "./Pages/Analytics";
import Settings from "./Pages/Settings";
import './App.css'



function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<Layout />} >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="assesments" element={<Assesments />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="classes" element={<Classes />} />
          <Route path="markingscheme" element={<MarkingScheme />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
