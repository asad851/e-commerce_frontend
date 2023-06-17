import React from 'react'

function Cards({img,title,price}) {
  return (
    
<div className="w-full flex flex-col items-center max-w-[300px] bg-white border border-gray-200 rounded-lg shadow relative ">
    <a href="#" className='flex justify-center'>
        <img id="CardImg" className="rounded-t-lg object-cover object-center mt-2   md:w-60 md:h-40 h-30 w-30 " src={img} alt="product image" />
    </a>
    <div className="px-5 pb-5 mb-10 ">
        <a href="#" >
            <h5 className="text-xl font-semibold tracking-tight text-center text-gray-900 dark:text-white">{title}</h5>
        </a>
        
    </div>
        <div className="flex items-center justify-center left-6 absolute bottom-2 gap-[20px] mt-10">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
</div>

  )
}

export default Cards