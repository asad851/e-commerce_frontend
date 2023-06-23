import React from 'react'
import DATA from '../Db/datadb'
import Cards from '../Components/Cards'
function Collections() {
   const newarr= DATA.MEN.clothing.filter((item)=>{
        const keyword =item?.name.toUpperCase()
        
        return(keyword.includes(""))
      
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
                    <Cards key={index} items={items}/>
                )
            })
        }
    </div>
  )
}

export default Collections