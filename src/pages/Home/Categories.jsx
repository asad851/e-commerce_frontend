import React from 'react'

function Categories() {
  return (
    <div className='my-16 flex flex-col items-center'>
        <h1 className='font-semibold md:text-3xl text-2xl'>Products by categories</h1>
        <div className='flex gap-[50px] flex-wrap justify-start w-[90%] py-8'>
            <div className=' box-border h-40 w-40   shadow-xl rounded-md'>
                <img className='h-full w-full object-top object-cover rounded-md' src="https://assets.ajio.com/medias/sys_master/root/20230602/PX12/64792d1842f9e729d70b8fde/-473Wx593H-461378045-multi-MODEL.jpg" alt="" />
                <p className='text-gray-400 text-center mt-2 text-[17px] font-semibold'>T-shirts</p>
            </div>
            <div className=' box-border h-40 w-40   shadow-xl rounded-md'>
                <img className='h-full w-full object-center object-cover rounded-md' src="https://louisphilippe.abfrl.in/blog/wp-content/uploads/2022/04/8118_Image-1600w-X-2398h-B.jpg" alt="" />
                <p className='text-gray-400 text-center mt-2 text-[17px] font-semibold'>Casual Shirts</p>
            </div>
            <div className=' box-border h-40 w-40   shadow-xl rounded-md'>
                <img className='h-full w-full object-center object-cover rounded-md' src="https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.lmsin.net/1000010598185-Grey-Grey-1000010598185-10282021_01-1200.jpg" alt="" />
                <p className='text-gray-400 text-center mt-2 text-[17px] font-semibold'>Formal Shirts</p>
            </div>
            <div className=' box-border h-40 w-40   shadow-xl rounded-md'>
                <img className='h-full w-full object-center object-cover rounded-md' src="https://www.fashionbeans.com/wp-content/uploads/2022/10/closedofficial.men_RedStripes_BestSweater.jpg" alt="" />
                <p className='text-gray-400 text-center mt-2 text-[17px] font-semibold'>Sweaters</p>
            </div>
            <div className=' box-border h-40 w-40   shadow-xl rounded-md'>
                <img className='h-full w-full object-center object-cover rounded-md' src="https://img.mensxp.com/media/content/2022/Sep/Amp_63206750df926.jpeg" alt="" />
                <p className='text-gray-400 text-center mt-2 text-[17px] font-semibold'>Jackets</p>
            </div>
            <div className=' box-border h-40 w-40   shadow-xl rounded-md'>
                <img className='h-full w-full object-center object-cover rounded-md' src="https://4.imimg.com/data4/DM/RM/MY-16551252/mens-blazer.jpg" alt="" />
                <p className='text-gray-400 text-center mt-2 text-[17px] font-semibold'>Blazers</p>
            </div>
            <div className=' box-border h-40 w-40   shadow-xl rounded-md'>
                <img className='h-full w-full object-top object-contain rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj4iHnsFo2CpNKSVEg9VWLRs7JLczDtIqirw&usqp=CAU" alt="" />
                <p className='text-gray-400 text-center mt-2 text-[17px] font-semibold'>Jackets</p>
            </div>
            <div className=' box-border h-40 w-40   shadow-xl rounded-md'>
                <img className='h-full w-full object-top object-contain rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj4iHnsFo2CpNKSVEg9VWLRs7JLczDtIqirw&usqp=CAU" alt="" />
                <p className='text-gray-400 text-center mt-2 text-[17px] font-semibold'>Jackets</p>
            </div>
        </div>
    </div>
  )
}

export default Categories