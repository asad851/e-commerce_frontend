import React from 'react'
import HeroBanner from './HeroBanner'
import Collections from '../Collections'
import Categories from './Categories'

function Homepage() {
  return (
    <div className='border-none '>
    <HeroBanner/>
    <Categories/>
    {/* <Collections/> */}
    </div>
  )
}

export default Homepage