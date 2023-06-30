import React from 'react'
import { useNavigate } from 'react-router-dom'

function Checkout() {
  const navigate = useNavigate()
  return (
    <div className='h-full w-full flex flex-col justify-center items-center p-5  mt-36 mb-10 gap-3'>
       
        <h1 className='text-3xl font-semibold my-3'>Please provide your shipment details to complete the process</h1>
        <div className='h-full md:w-[50%] w-full border-gray-300 border-[1px] flex flex-col gap-2 px-4 py-8 shadow-lg rounded-md'>
        <h1 className='text-2xl font-semibold my-3'>Shipment Details</h1>

        <input className='rounded-md ' type="text" name=""  required placeholder='Address Line 1'/>
        <input className='rounded-md' type="text" name=""  required placeholder='Address Line 1' />
        <div className='flex gap-2 w-full'>
        <input className='rounded-md w-full ' type="text" name=""  required placeholder='Town/City'/>
        <input className='rounded-md w-full' type="number" name=""  require placeholder='Postcode' />
        </div>
        <div className='flex gap-2 w-full'>
        <input className='rounded-md w-full ' type="number" name=""  required placeholder='Phone no.'/>
        <input className='rounded-md w-full' type="text" name=""  required placeholder='Email id' />
        </div>
        <button onClick={()=>navigate(`/Payment`)} className="text-white mt-8 mb-5  bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
             Proceed to Payment
            </button>
        </div>
        
    </div>
  )
}

export default Checkout