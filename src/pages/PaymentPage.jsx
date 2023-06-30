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
    <div className='h-full w-full mt-24 box-border px-2 mb-4  flex justify-center items-center bg-[url(https://st4.depositphotos.com/3864435/39745/v/450/depositphotos_397454448-stock-illustration-new-smart-pos-terminal-payment.jpg)] bg-center  bg-contain bg-no-repeat '> 
        
        <div className='md:h-[80%] h-full lg:w-[40%] md:w-[50%] bg-[rgba(0,0,0,0.2)] backdrop-blur-[2.5px] w-full border-gray-300 border-[1px] flex flex-col gap-2 px-4 py-10 shadow-lg rounded-md'>
        

        <input className='rounded-md ' type="text" name=""  required placeholder='Name on card'/>
        <input className='rounded-md' type="text" name=""  required placeholder='Card number' />
        <div className='flex gap-2 w-full'>
        <input className='rounded-md w-full ' type="number" name=""  required placeholder='cvv'/>
        <input className='rounded-md w-full' type="date" name=""  require placeholder='Date on card' />
        </div>
        <div className='flex gap-2 justify-center items-center w-full'>
        <img className='object-center object-cover lg:h-10 h-5' src="https://d3.harvard.edu/platform-digit/wp-content/uploads/sites/2/2020/02/visa-logo-png-2026-1.png" alt="" />
        <img className='object-center object-cover lg:h-10 h-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/2560px-RuPay.svg.png" alt="" />
        <img className='object-center object-cover lg:h-10 h-5' src="data:image/png;base64,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" alt="" />
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