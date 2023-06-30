import React, { useEffect,useState } from 'react'
import image from '..//assets/payment.png'
import { useSelector } from 'react-redux';

function PaymentPage () {
 const [total,setTotal] = useState(null)
 const {products} = useSelector(state=>state.cart)
 const productsPrice = products?.map((item) => {
    return parseInt(item.price.slice(0, -2));
  });
  useEffect(() => {
    if (productsPrice.length > 0) {
        const PriceArray = productsPrice?.reduce((a, b) => {
          return a + b;
        });
        setTotal(PriceArray);
      }
  }, [])
  
   return (
    <div className='h-screen w-full mt-20 mb-4 px-4 flex justify-center items-center bg-[url(https://st4.depositphotos.com/3864435/39745/v/450/depositphotos_397454448-stock-illustration-new-smart-pos-terminal-payment.jpg)] bg-center  bg-contain bg-no-repeat '> 
        
        <div className='md:h-[80%] h-full md:w-[40%] bg-[rgba(0,0,0,0.2)] backdrop-blur-[3.5px] w-full border-gray-300 border-[1px] flex flex-col gap-2 px-4 py-10 shadow-lg rounded-md'>
        

        <input className='rounded-md ' type="text" name=""  required placeholder='Name on card'/>
        <input className='rounded-md' type="text" name=""  required placeholder='Card number' />
        <div className='flex gap-2 w-full'>
        <input className='rounded-md w-full ' type="number" name=""  required placeholder='cvv'/>
        <input className='rounded-md w-full' type="date" name=""  require placeholder='Date on card' />
        </div>
        <div className='flex gap-2 w-full'>
        
        </div>
        <button onClick={()=>navigate(`/Payment`)} className="text-white mt-8 mb-5  bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
             Proceed to Pay {total} Rs
            </button>
        </div>
    </div>
  )
}

export default PaymentPage;