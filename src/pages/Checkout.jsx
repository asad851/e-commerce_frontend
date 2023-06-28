import React from 'react'

function Checkout() {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center  mt-36 mb-10 gap-3'>
       
        <h1 className='text-3xl font-semibold my-3'>Please provide your shipment details to complete the process</h1>
        <div className='h-full w-[50%] border-gray-300 border-[1px] flex flex-col gap-2 px-4 py-8 shadow-lg rounded-md'>
        <h1 className='text-2xl font-semibold my-3'>Shipment Details</h1>

        <input className='rounded-md ' type="text" name=""  required={true} placeholder='Address Line 1'/>
        <input className='rounded-md' type="text" name=""  require={true} placeholder='Address Line 1' />
        <div className='flex gap-2 w-full'>
        <input className='rounded-md w-full ' type="text" name=""  required={true} placeholder='Town/City'/>
        <input className='rounded-md w-full' type="number" name=""  require={true} placeholder='Postcode' />
        </div>
        <div className='flex gap-2 w-full'>
        <input className='rounded-md w-full ' type="number" name=""  required={true} placeholder='Phone no.'/>
        <input className='rounded-md w-full' type="text" name=""  require={true} placeholder='Email id' />
        </div>
        <button onClick={()=>{navigate(`/Checkout`); setShowCartModal(false)}} className="text-white mt-8 mb-5  bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
             Proceed to Payment
            </button>
        </div>
        
    </div>
  )
}

export default Checkout