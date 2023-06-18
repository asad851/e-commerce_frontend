import React from 'react'
import {data} from '../Db/data'
import Cards from '../Components/Cards'
function Collections() {
   const newarr= data.men.shoes.filter((item)=>{
        const keyword =item.title.toUpperCase()
        return(keyword.includes(" "))
      
    })
    // const result=[]
    // for(const category in data){
        
    //     for(const array in data[category]){
            
    //        const filtered = data[category][array].filter((item)=>item.title.toUpperCase().includes("JEANS")) 
    //         result.push(...filtered)
    //         console.log(result)
    //     }
    // }
    // console.log(data.men)
    // console.log(newarr)
  return (
    <div className='h-full w-full flex flex-wrap gap-5 justify-center'>
        {
            newarr.map((items,index)=>{
                
                return(
                    <Cards key={index} img={items.image1||items.image2} title={items.title} price={items.price}/>
                )
            })
        }
    </div>
  )
}

export default Collections