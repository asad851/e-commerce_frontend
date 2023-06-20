import React, { useEffect } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homepage  from './pages/Home/Homepage'
import {Routes,Route} from 'react-router-dom'
import Details from './pages/Details/Details'
import Explore from './pages/Explore'
import { useLocation } from 'react-router-dom'
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
      <Route path="/Details/:productTitle" element={<Details/>}/>
      <Route path="/Explore/:Category/:Subcategory/:Type" element={<Explore/>}/>
    </Routes>
    <Footer/>
    </> 
  )
}
