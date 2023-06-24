import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DATA  from "../Db/datadb"
import Cards from '../Components/Cards'
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
    <div className='flex justify-between w-full'>
        <div className='w-[300px]  top-20 bg-white shadow-md left-0 mt-36 h-screen'></div>
        <div className='mt-36 gap-5 mb-10 flex lg:justify-start justify-center  flex-wrap w-[1000px] '>
        {DATA[category]&&getDATA()}
        {!DATA[category]&&<div className='text-3xl font-bold text-center'>
            Sorry, We are Working on it
            </div>}
    </div>
    </div>
  )
}

export default Explore