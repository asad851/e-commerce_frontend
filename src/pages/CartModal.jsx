import React from 'react'
import { useState,useEffect} from 'react'
import {IoCloseCircleOutline} from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function CartModal({setShowCartModal}) {
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()
  const {products} = useSelector(state=>state.cart)
  const productsPrice = products?.map((item)=>{
    return parseInt(item.price.slice(0,-2))
  })
  // i will have to make a seperate slicer for carted products which will eventually be uploaded to the products array
  useEffect(() => {
    if(productsPrice.length>0){
      const PriceArray = productsPrice?.reduce((a,b)=>{
        return a+b
      })
      setTotal(PriceArray)
    }
   
  }, [products])
  
  console.log(products)
  return (
    <div className='fixed top-0 botton-0 right-0 left-0 z-20 h-full w-full flex justify-center '>
     <div onClick={()=>setShowCartModal(false)} className='fixed top-0 botton-0 right-0 left-0 h-full w-full z-30 backdrop-blur-[3.5px] bg-[rgba(0,0,0,0.4)]'></div>
     <div className='md:w-[80%] w-full shadow-lg rounded-lg  absolute top-2 bottom-2 md:top-10 md:bottom-10  z-50 bg-white overflow-y-scroll'>
     <IoCloseCircleOutline onClick={()=>setShowCartModal(false)} className="absolute top-1 right-1 text-[25px] cursor-pointer text-gray-400"/>
      <div className=''>
      {products.length>0?(<div className='flex flex-col justify-center px-2 w-full md:px-12 py-12 h-full '>
          
          {products.map((item,index)=>{
            
            return(
              <div key={index} className='w-full h-full py-5 flex flex-col'>
                <div onClick={()=>{navigate(`Details/${item.id}`);setShowCartModal(false) }} className='w-full flex  gap-2 cursor-pointer md:gap-5 justify-between items-center'>
                  <img className="md:h-20 md:w-28 h-12 w-12 rounded-md object-cover object-top" src={item.image} alt=""  />
                  <span className='md:text-lg truncate max-md:max-w-[100px] max-w-[180px] text-sm text-[rgba(0,0,0,0.6)] mb-2'>{item.name}</span>
                  <span className='md:text-lg text-sm text-[rgba(0,0,0,0.6)] mb-2'>size : {item.size}</span>
                  <span className='md:text-lg text-sm text-[rgba(0,0,0,0.6)] mb-2'>{item.price}</span>
                  
                </div>
                <div className='w-full h-[1px] my-2 bg-gray-300'></div>
              </div>
            )
          })}
          <div className='flex w-full justify-end'>
            <div>
              Total: {total} Rs
            </div>
            </div>
      </div>):(<h1 className='text-2xl text-center   font-bold'>Add items to your cart</h1>)}
      </div>
     </div>
    </div>
  )
}

export default CartModal