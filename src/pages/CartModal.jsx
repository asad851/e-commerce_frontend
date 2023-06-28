import React from "react";
import { useState, useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddToCart, Decrease } from "../Store/CartSlicer";

function CartModal({ setShowCartModal }) {
  const { products } = useSelector((state) => state.cart);
  
  // console.log(cartedproducts.length);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const productsPrice = products?.map((item) => {
    return parseInt(item.price.slice(0, -2));
  });
  localStorage.setItem("mycart", JSON.stringify(products));
  const productsItems = products.filter((item,index,self)=>self.findIndex(i=>i.id==item.id)===index)
 
  
  
  useEffect(() => {
    if (productsPrice.length > 0) {
      const PriceArray = productsPrice?.reduce((a, b) => {
        return a + b;
      });
      setTotal(PriceArray);
    }
  }, [products]);

  
  return (
    <div className="fixed top-0 botton-0 right-0 left-0 z-20 h-full w-full flex justify-center ">
      <div
        onClick={() => setShowCartModal(false)}
        className="fixed top-0 botton-0 right-0 left-0 h-full w-full z-30 backdrop-blur-[3.5px] bg-[rgba(0,0,0,0.4)]"
      ></div>
      <div className="md:w-[80%] w-full shadow-lg rounded-lg  absolute top-2 bottom-2 md:top-10 md:bottom-10  z-50 bg-white overflow-y-scroll">
        <IoCloseCircleOutline
          onClick={() => setShowCartModal(false)}
          className="absolute top-1 right-1 text-[25px] cursor-pointer text-gray-400"
        />
        <div className="">
          {products.length > 0 ? (
            <div className="flex flex-col justify-center px-3 w-full md:px-12 py-12 h-full ">
              {productsItems.map((item, index) => {
                const cartedproducts = products.filter((product) => product.id == item.id);
               
                return (
                  <div key={index} className="w-full h-full py-5 flex flex-col">
                    <div
                      
                      className="w-full flex  gap-2 cursor-pointer md:gap-5 justify-between items-center"
                    >
                      <img
                        onClick={() => {
                          navigate(`Details/${item.id}`);
                          setShowCartModal(false);
                        }}
                        className="md:h-20 md:w-28 h-12 w-12 rounded-md object-cover object-top"
                        src={item.image}
                        alt=""
                      />
                      <span onClick={() => {
                        navigate(`Details/${item.id}`);
                        setShowCartModal(false);
                      }} className="md:text-lg truncate max-md:max-w-[100px] max-w-[180px] text-sm text-[rgba(0,0,0,0.6)] mb-2">
                        {item.name}
                      </span>
                      <span className="md:text-lg text-sm text-[rgba(0,0,0,0.6)] mb-2">
                        size : {item.size}
                      </span>
                      <div className="flex gap-1 items-center">
                        <button
                          onClick={() => dispatch(Decrease(item))}
                          className="md:text-xl text-md bg-slate-200 w-5 rounded-sm md:w-[30px] w-[25px]active:bg-slate-300"
                        >
                          -
                        </button>
                        <span className="bg-gray-300 md:w-[50px] w-[25px] text-md text-center rounded-sm md:text-lg ">
                          {cartedproducts.length}
                        </span>
                        <button
                          onClick={() => dispatch(AddToCart(item))}
                          className="md:text-xl text-md  bg-slate-200 rounded-sm w-5 md:w-[30px] active:bg-slate-300"
                        >
                          +
                        </button>
                      </div>
                      <span className="md:text-lg text-sm text-[rgba(0,0,0,0.6)] mb-2 md:min-w-[95px]">
                        {item.price}{" "}x{cartedproducts.length}
                      </span>
                    </div>
                    <div className="w-full h-[1px] my-2 bg-gray-300"></div>
                  </div>
                );
              })}
              <div className="flex w-full justify-end">
                <div className="text-lg ">Total: {total} Rs</div>
              </div>
              
              <div className="flex justify-end mt-3">
              <button onClick={()=>{navigate(`/Checkout`); setShowCartModal(false)}} className="text-white mt-3  bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
             Proceed to Checkout
            </button>
              </div>
              
            </div>
          ) : (
            <div className="flex items-center max-md:flex-col max-md:mt-10 justify-around  ">
              <h1 className="text-2xl font-semibold mx-w-[400px] " >Your cart seems to be empty, you can go and explore now</h1>
              <img className="  float-right object-cover object-center md:h-[500px] h-[400px] " src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png" alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartModal;
