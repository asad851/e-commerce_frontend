import React from 'react'
import HeroBanner from './HeroBanner'
import Collections from '../Collections'
import Categories from './Categories'
import ByBrands from './ByBrands'

function Homepage() {
  return (
    <div className='border-none '>
    <HeroBanner/>
    <Categories/>
    <ByBrands/>
    {/* <Collections/> */}
    </div>
  )
}

export default Homepage