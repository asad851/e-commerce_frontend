import React from 'react'
import {data} from '../Db/data'
function Collections() {
   const newarr= data.men.clothing.filter((item)=>{
        const keyword =item.title.toUpperCase()
      
       return(keyword.includes("SHOES"))
    })
    // console.log(newarr)
  return (
    <div>Collections</div>
  )
}

export default Collections