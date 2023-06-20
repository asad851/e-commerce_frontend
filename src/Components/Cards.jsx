import React from 'react'
import noimage from '../assets/Image Not found.svg'
import { useNavigate } from 'react-router-dom'
function Cards({img,title,price}) {
    const navigate = useNavigate()
    const encodedTitle = encodeURIComponent(title);
  return (
    
<div className="w-full flex flex-col items-center md:max-w-[280px] max-w-[250px] bg-white border border-gray-200 rounded-lg shadow relative ">
    <div  className='flex justify-center cursor-pointer w-full h-72'>
        <img id="CardImg" className="rounded-t-lg object-cover  object-top   h-full w-full " src={img} alt="product image" onClick={()=>navigate(`/Details/${encodedTitle}`)} />
    </div>
    <div className="px-2 pb-5 md:px-5  mb-10 mt-4 cursor-pointer ">
        
            <h5 className="md:text-xl text-lg font-semibold tracking-tight text-center text-gray-900 dark:text-white" onClick={()=>navigate(`/Details/${encodedTitle}`)}>{title}</h5>
        
        
    </div>
        <div className="flex items-center justify-center md:left-6 left-0 right-0 absolute bottom-2 gap-[20px] mt-10">
            <span className="md:text-3xl text-xl font-bold text-gray-900 dark:text-white">{price}</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
</div>

  )
}

export default Cards