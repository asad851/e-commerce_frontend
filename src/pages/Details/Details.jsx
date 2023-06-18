import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../Db/data'
import { useEffect,useState } from 'react'
export default function Details() {
    const {productTitle} =useParams();
    const [product, setProduct] = useState(null)
    const Data=()=>{
        
    for(const category in data){
        
        for(const array in data[category]){
            
            const filtered = data[category][array].find((item)=>item.title.toUpperCase().includes("TRIPLE S SNEAKERS")) 

            setProduct(filtered)
            // console.log(filtered[0]?.title)
        }
    }
}
console.log(product)
    useEffect(() => {
     Data()

     
    }, [])
  return (
    <div className='text-3xl text-red-600 h-full my-[100px]'>
        <p>{product?.title}</p>
        
    </div>
  )
}
