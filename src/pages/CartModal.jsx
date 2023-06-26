import React from 'react'
import {IoCloseCircleOutline} from 'react-icons/io5'
import { useSelector } from 'react-redux'
function CartModal({setShowCartModal}) {
  const {products} = useSelector(state=>state.cart)
  // console.log("heya")
  return (
    <div className='fixed top-0 botton-0 right-0 left-0 z-20 h-full w-full flex justify-center '>
     <div onClick={()=>setShowCartModal(false)} className='fixed top-0 botton-0 right-0 left-0 h-full w-full z-30 backdrop-blur-[3.5px] bg-[rgba(0,0,0,0.4)]'></div>
     <div className='md:w-[80%] w-[90%] shadow-lg rounded-lg  absolute  top-10 bottom-10  z-50 bg-white '>
     <IoCloseCircleOutline onClick={()=>setShowCartModal(false)} className="absolute top-1 right-1 text-[25px] cursor-pointer text-gray-400"/>
      <div className=''>
      {products?(<div className='flex flex-col justify-center  w-full px-12 py-12 h-full'>
          
          {products.map((item)=>{
            return(
              <div className='w-full h-full py-5 flex flex-col'>
                <div className='w-full flex items-end gap-5'>
                  <img className="md:h-20 md:w-28 h-12 w-12 rounded-md object-cover object-top" src={item.image} alt="" srcset="" />
                  <span className='md:text-lg text-md text-[rgba(0,0,0,0.6)] mb-2'>{item.name}</span>
                  <span className='text-lg text-[rgba(0,0,0,0.6)] mb-2'>{item.price}</span>
                  
                </div>
                <div className='w-full h-[1px] my-2 bg-gray-300'></div>
              </div>
            )
          })}
      </div>):(<h1>Add items to your cart</h1>)}
      </div>
     </div>
    </div>
  )
}

export default CartModal