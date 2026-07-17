import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './Pages/Login'
import Home from './Pages/Home'

const App = () => {
  return (
    <>
      <Navbar/>
      <br />
      <br />
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/About'  element={<h1>About Page</h1>}/>
        <Route path='/Contact'  element={<h1>Contact Page</h1>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App