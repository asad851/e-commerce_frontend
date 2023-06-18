import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homepage  from './pages/Home/Homepage'
import {Routes,Route} from 'react-router-dom'
import Details from './pages/Details/Details'


export default function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/Details/:productTitle" element={<Details/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
