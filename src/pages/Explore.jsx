import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import{ DATA } from "../Db/myntradb"
import Cards from '../Components/Cards'
function Explore() {
    const{Category,Subcategory,Type} = useParams()
    const category =Category.toUpperCase()
    const type = Type.toUpperCase()
    const updatedType = type.slice(0,-1)
    console.log(type)
    const getDATA=()=>{
    
    const toFilter = DATA[category]?.[Subcategory]
    const filtered = toFilter?.filter((item)=>{
        return(item.name.toUpperCase().includes(updatedType))
    })
    console.log(filtered)
    return (filtered.map((filtered,index)=>{
            return(
                <Cards key={index}img={filtered?.image} title={filtered?.name} price={filtered?.price} />
            )
           }))
    }
    
  return (
    <div className='mt-[100px] flex justify-center flex-wrap'>
        {getDATA()}
    </div>
  )
}

export default Explore