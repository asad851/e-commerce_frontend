import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdPermIdentity } from "react-icons/md";
import logo from "../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
    const[opaque,setOpaque]=useState('hidden')
    function handleMouseOver (){
     
    }
  return (

    
    <>
    <nav className="  w-full flex justify-center px-[20px] mx-auto min-[768px]:py-[5px] min-[768px]:m-0 shadow-[0_8px_20px_-16px_rgba(0,0,0,0.3)]  box-border  ">
      <div className="flex items-center  w-[90%] justify-between max-w-[1300px] box-border ">
        <img className="w-[200px] cursor-pointer" src={logo} alt="logo" />
        <ul className="flex text-[18px] text-[rgba(0,0,0,0.7)] font-semibold  justify-between min-[768px]:gap-[30px] gap-[20px] box-border relative ">
          <li className="cursor-pointer hover:underline underline-offset-[4px] underline-thickness-2 decoration-2 decoration-red-300 Men py-[20px]" onMouseOver={handleMouseOver}>
            Men
          </li>
          
          <div className="hoverBox box-border z-10">
            <div>
                <h3>Topwear</h3>
                <p>T-Shirts</p>
                <p>Casual Shirts</p>
                <p>Formal Shirts</p>
                <p>SweatShirts</p>
                <p>Sweaters</p>
                <p>Jackets</p>
                <p>Blazers&Coats</p>
                <p>Suits</p>
                <p>Rain jackets</p>

            </div>
          
          </div>
          <li className="cursor-pointer hover:underline underline-offset-[4px] underline-thickness-2 decoration-2 decoration-red-300 py-[20px]">
            Women
          </li>
          <li className="cursor-pointer hover:underline underline-offset-[4px] underline-thickness-2 decoration-2 decoration-red-300 py-[20px]">
            Women
          </li>
          <li className="cursor-pointer hover:underline underline-offset-[4px] underline-thickness-2 decoration-2 decoration-red-300 py-[20px]">
            Kids
          </li>
          <li className="cursor-pointer hover:underline underline-offset-[4px] underline-thickness-2 decoration-2 decoration-red-300 py-[20px]">
            Home&Living
          </li>
          <li className="cursor-pointer hover:underline underline-offset-[4px] underline-thickness-2 decoration-2 decoration-red-300 py-[20px]">
            Beauty
          </li>
        </ul>

        <div className="flex items-center min-[768px]:gap-[30px] gap-[20px]  ">
          <form className="relative bg-[rgba(0,0,0,0.1)] min-w-[250px] w-full ">
            <input
              className="SearchInputNav px-[35px]  w-full text-[15px] focus-visible:outline-none border-none bg-transparent"
              type="text"
              name=""
              id=""
            />
            <BsSearch className="absolute top-[12px] left-2 mr-5 cursor-pointer" />
          </form>
          <MdPermIdentity className="text-[35px] font-light cursor-pointer" />
          <AiOutlineShoppingCart className="text-[30px] font-light cursor-pointer" />
        </div>
      </div>
    </nav>
    <div className={`opaque ${opaque} absolute top-[82px] bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.4)] z-[1]`}></div>
    </>
  );
}
