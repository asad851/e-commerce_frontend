import React from 'react'
import HeroBanner from './HeroBanner'

import Categories from './Categories'
import ByBrands from './ByBrands'
import Shopwithus from './Shopwithus'

function Homepage() {
  return (
    <div className='border-none '>
    <HeroBanner/>
    <Shopwithus/>
    <Categories/>
    <ByBrands/>
    
    </div>
  )
}

export default Homepage