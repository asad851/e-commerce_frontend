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
    <div className='h-screen w-full mt-20 mb-4 px-4 flex justify-center bg-[url(https://st4.depositphotos.com/3864435/39745/v/450/depositphotos_397454448-stock-illustration-new-smart-pos-terminal-payment.jpg)] bg-center  bg-contain bg-no-repeat '> 
        {/* <img className='h-[600px] w-[700px] object-contain object-center' src={image} alt="" /> */}
        <div className=''></div>

    </div>
  )
}

export default PaymentPage;