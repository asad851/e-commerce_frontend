import React from 'react'
import DATA from '../../Db/datadb'
import Cards from '../../Components/Cards';
function Shopwithus() {
    const arr = Object.values(DATA)
        .flatMap((Category) => Object.values(Category))
        .flatMap((subcateg) => Object.values(subcateg));
    const items= arr.map(item=>{return item})
    const Items= items.slice(0,16)
    console.log(items)
  return (
    <div className="w-full  mt-10 mb-20 justify-center overflow-hidden ">
        <h1 className='font-semibold md:text-3xl text-2xl text-center mb-10'>Shop with us</h1>
     <div
          className="h-full w-full xl:max-w-[1180px] mx-auto flex flex-wrap gap-5 justify-center 
            xl:justify-start"
        >
          {Items.map((items, index) => {
            return <Cards key={index} items={items} />;
          })}
        </div>
  </div>
  )
}

export default Shopwithus