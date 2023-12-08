import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Course from './Components/Course'
import Reviews from './Components/Reviews'
import Contact from './Components/Contact'

function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar/>
    
        <Routes>
          <Route path="/" element={<Home /> } />
         
          <Route path="/About" element={<About />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>

       
      </BrowserRouter>
     
    </>
  )
}

export default App
