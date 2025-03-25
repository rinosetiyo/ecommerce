import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './views/Login'
// import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
