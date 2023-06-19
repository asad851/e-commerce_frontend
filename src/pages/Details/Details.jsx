import React from 'react'
import { useParams } from 'react-router-dom'
import { DATA } from '../../Db/myntradb'
import { useEffect,useState } from 'react'
export default function Details() {
    const {productTitle} =useParams();
    const [product, setProduct] = useState()
    const decodedTitle = decodeURIComponent(productTitle);
    const Data=()=>{
        
    for(const category in DATA){
        
        for(const array in DATA[category]){
            
            const filtered = DATA[category][array].find((item)=> {return(item.name.toUpperCase().includes(`${decodedTitle.toUpperCase()}`))})
            return(
                <div>
                    <h1>{filtered?.name}</h1>
                    <img src={filtered?.image} alt="Product" />
                </div>
            )
        }
    }
}
   
    useEffect(() => {
     
     
    }, [])
  return (
    <div className='text-3xl text-red-600 h-full my-[100px]'>
        {Data()}
        
    </div>
  )
}
