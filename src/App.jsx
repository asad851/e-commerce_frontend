import React, { useEffect } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homepage  from './pages/Home/Homepage'
import {Routes,Route} from 'react-router-dom'
import Details from './pages/Details/Details'
import Explore from './pages/Explore'
import { useLocation } from 'react-router-dom'
import Resultpage from './pages/Resultpage'
import Collections from './pages/Collections'
import Checkout from './pages/Checkout'
export default function App() {
  const location = useLocation()
  useEffect(()=>{
  window.scrollTo(0,0)
  },[location])
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/Details/:id" element={<Details/>}/>
      <Route path="/Explore/:Category/:Type" element={<Explore/>}/>
      <Route path="/Collection/:Productsby/:endpoint" element={<Collections/>}/>
      <Route path="/Results/:query" element={<Resultpage/>}/>
      <Route path="/Checkout" element={<Checkout/>}/>
    </Routes>
    <Footer/>
    </> 
  )
}
