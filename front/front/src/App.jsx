import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import SignUp from './components/signUp/signUp'
import SignIn from './components/SignIn/SignIn'
import HomePage from './components/homePage/homePage'

import './App.css'

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/HomePage" element={<HomePage/>} />
      </Routes>
    
      
    </>
  )
}

export default App
