import React from "react";
import { useParams } from "react-router-dom";
import  DATA  from "../../Db/datadb";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { AddToCart,Remove,Decrease } from "../../Store/CartSlicer";
import { MdBrowserUpdated } from "react-icons/md";
export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  const cartedproducts = products.filter((item)=>item.id==id)
  const [quantity,setQuantity] =useState(cartedproducts.length)
  
  const [Add, setAdd] = useState(JSON.parse(localStorage.getItem("boolean"))||false);
  const [size,setSize] =useState("")
  
  localStorage.setItem("mycart", JSON.stringify(products));
  localStorage.setItem("boolean", JSON.stringify(Add));
  console.log(products)
 
   const handleSize=(e)=>{
     setSize(e.target.innerHTML)
   }
   const handleDecrease = (data) =>{
    if(quantity>0){
    setQuantity(prev=>prev-1)
    dispatch(Decrease(data))
    
    }else{
        return
    }
   }
   const handleIncrease=(data)=>{
    setQuantity(prev=>prev+1)
    dispatch(AddToCart(data))
    

   }
   useEffect(()=>{
    const found=products.find((item)=>item.id==id)
     if(found){
        setAdd(true)
     }else{
        setAdd(false)
     }
     
   },[quantity])
   
   console.log(quantity)
const Data = () => {
    for (const category in DATA) {
        for (const array in DATA[category]) {
            const filtered = DATA[category][array].find((item) => {
            
                return item.id==id
            });
            const updated = {...filtered}
             updated.userId=""
             updated.size=size
             
             
            
             
            return (
                
          <div className="md:mx-auto  flex md:max-w-[1200px] md:items-start md:gap-20 gap-10 w-full max-md:flex-col items-center  ">
            
            <img
              className="rounded-md object-cover max-[400px]:w-[calc(90%-10px)] object-center md:h-[500px] shadow-xl"
              src={filtered?.image}
              alt="Product"
            />
            <div className="flex md:items-start  gap-3 h-full flex-col px-10">
              <h1 className="font-semibold md:text-3xl text-2xl ">{filtered?.name}</h1>
              <h1 className="text-[rgba(0,0,0,0.5)] font-medium md:text-xl text-lg mt-3">
                <span className="md:text-2xl text-xl text-black font-bold">Price : </span>
                {""}
                {filtered?.price}
              </h1>
              <h1 className=" md:text-xl text-lg font-medium text-[rgba(0,0,0,0.4)]">
                <span className="md:text-2xl text-xl text-black font-bold">Brand : </span>{" "}
                {filtered?.brand}
              </h1>
              <h1 className="md:text-2xl text-xl text-black font-bold mt-2 ">
                Description :{" "}
              </h1>
              <p className="text-md  text-[rgba(0,0,0,0.4)]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                dolore vitae corporis aut perferendis quibusdam! Ab vero,
                consequatur at, dicta, repellat nisi adipisci odit quod
                doloribus ad suscipit quas eligendi!
              </p>
              <h1 className="md:text-2xl text-xl text-black font-bold my-2">Sizes : </h1>
              <div className="flex gap-4">
                <button onClick={(e)=>{handleSize(e)}} className="px-3 py-1 rounded-md font-semibold focus:bg-blue-700 focus:text-white bg-gray-100">
                  S
                </button>
                <button onClick={(e)=>{handleSize(e)}} className="px-3 py-1 rounded-md font-semibold focus:bg-blue-700 focus:text-white bg-gray-100">
                  M
                </button>
                <button onClick={(e)=>{handleSize(e)}} className="px-3 py-1 rounded-md font-semibold focus:bg-blue-700 focus:text-white bg-gray-100">
                  L
                </button>
                <button onClick={(e)=>{handleSize(e)}} className="px-3 py-1 rounded-md font-semibold focus:bg-blue-700 focus:text-white bg-gray-100">
                  XL
                </button>
              </div>
              <h1 className="md:text-2xl text-xl text-black font-bold my-2">Quantity : </h1>
              <div className="flex gap-1">
                <button onClick={()=>handleDecrease(updated)} className="text-xl  bg-slate-200  rounded-sm w-[30px]">-</button>
                 <span className="bg-gray-300 w-[50px] text-center rounded-sm text-lg">{cartedproducts.length}</span>
                <button onClick={()=>handleIncrease(updated)} className="text-xl bg-slate-200 rounded-sm  w-[30px]">+</button>
              </div>
              { 
              Add?(
                <button onClick={()=>{dispatch(Remove(updated)); setAdd(false)}}  className="text-white mt-3 max-w-[150px] bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Remove</button>
              ):(<button onClick={()=>{dispatch(AddToCart(updated)); setAdd(true)}} className="text-white mt-3 max-w-[150px] bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</button>)}
            </div>
          </div>
        );
      }
    }
  };

 
  return <div className=" h-full mt-32 mb-20 ">{Data()}</div>;
}
