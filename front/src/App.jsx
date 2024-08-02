import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import SignUp from './components/signUp/signUp'
import SignIn from './components/SignIn/SignIn'
import HomePage from './components/homePage/homePage'
import User from './components/user/user'
import DetailPage from './components/detailPage/detailPage'

import './App.css'

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/HomePage" element={<HomePage/>} />
        <Route path="/User" element={<User/>} />
        <Route path="/detail" element={<DetailPage/>} />
      </Routes>
    
      
    </>
  )
}

export default App
