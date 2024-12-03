import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Workinprogress from './components/Workinprogress'
import Portfolio from './Portfolio'

function App() {



  return (
    <>

      <Routes>
        <Route path="/workinprogress" element={<Workinprogress />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>










    </>
  )
}

export default App
