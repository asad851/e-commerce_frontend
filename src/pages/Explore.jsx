import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DATA  from "../Db/datadb"
import Cards from '../Components/Cards'
import image from '../assets/vector-error-404-unavailable-web-page-file-not-found-concept.jpg' 
function Explore() {
    const {Category,Type} = useParams()
    const category =Category.toUpperCase()
    const type = Type.toUpperCase()
    // const updatedType = type.slice(0,-1)
    // console.log(type)
    const getDATA=()=>{
        try{
            const data =DATA[category][Type]
        const newdata = Object.values(data)
        // console.log(newdata)
        return newdata.map((item,index)=>{
            return(<Cards key={index} filtered={item}/>)
        })
        }catch(err){
            console.log(`error:${err}`)
        }
    
    }
    
  return (
    <div className='flex justify-center w-full'>
        
        <div className='mt-36  mb-10 flex  justify-center gap-5 flex-wrap  '>
        {DATA[category]&&getDATA()}
    </div>
        {!DATA[category]&&<div className='w-full h-[60%] md:mt-5 mt-14 overflow-hidden flex justify-end mb-1 '>
            <img className='h-[70%] w-[80%] object-center object-cover' src={image} alt="" />
            </div>}
    </div>
  )
}

export default Explore