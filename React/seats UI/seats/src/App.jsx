import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import Next from './components/Next'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/next" element={<Next />}/>

    </Routes>
    </BrowserRouter>
    
    </>
  )
  
}

export default App
