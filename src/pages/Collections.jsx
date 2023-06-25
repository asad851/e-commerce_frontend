import React from 'react'
import DATA from '../Db/datadb'
import Cards from '../Components/Cards'
import { useParams } from 'react-router-dom'
import Categories from './Home/Categories'
function Collections() {
    const {endpoint}=useParams()
   const arr= Object.values(DATA).find((item)=>item["T-Shirts"])
   const updated = arr[endpoint]
   console.log(updated)
   const newarr= updated.map((item)=>{return item})
    
  return (
    <div className='w-full flex mt-32 mb-20 justify-center overflow-hidden '>
        <div className='h-full w-full xl:max-w-[1180px] mx-auto flex flex-wrap gap-5 justify-center 
        xl:justify-start'>
        {
            newarr.map((items,index)=>{
                
                return(
                    <Cards key={index} items={items}/>
                )
            })
        }
    </div>
    </div>
  )
}

export default Collections