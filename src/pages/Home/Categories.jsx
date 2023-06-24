import React from 'react'

function Categories() {
  return (
    <div className='my-16'>
        <h1 className='font-semibold md:text-3xl text-2xl'>Products by categories</h1>
        <div className='flex gap-10  '>
            <div className='p-1 box-border h-28 w-28 border-[1px] border-gray-500 shadow-lg rounded-md'>
                <img className='h-full w-full object-center object-cover rounded-md' src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Categories