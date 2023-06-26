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
      {products?(<div className='flex flex-col '>
          {products.map((item)=>{
            return(
              <div className=''>

              </div>
            )
          })}
      </div>):(<></>)}
      </div>
     </div>
    </div>
  )
}

export default CartModal