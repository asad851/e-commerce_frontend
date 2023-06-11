import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdPermIdentity } from "react-icons/md";
import logo from "../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import HoverComponent from "./HoverComponent";

export default function Header() {
    const[opaque,setOpaque]=useState('hidden');
    const [item, setItem] = useState(null)
    
    function handleMouseOver (item){
      setOpaque("block")
      setItem(item)
    }
    const hoverOver=()=>{
        setOpaque("block")
        
    }
    function handleMouseLeave(){
        
        setOpaque("hidden")
    }

    
  const NavArray = ["Men","Women","Kids","Beauty"];
  
  return (

    
    <>
    <div className={` hidden min-[1000px]:${opaque} absolute top-[0px] bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.3)] -z-10 `}></div>
    <nav className="hidden min-[1000px]:flex bg-white z-10  w-full    min-[768px]:py-[5px] shadow-[0_8px_20px_-16px_rgba(0,0,0,0.3)]   ">
      <div className="flex items-center  w-full justify-between  box-border ">
        <img className="w-[17%] cursor-pointer ml-[45px]" src={logo} alt="logo" />
        <ul className="flex w-[32%] text-[1.35vw]  text-[rgba(0,0,0,0.7)] font-bold    box-border relative items-center ">
         {NavArray.map((data,index)=>{
           return(
            <  >
            <li key={index} className={`cursor-pointer hover:underline underline-offset-[20px]  decoration-[3px] decoration-red-300 ${data}  py-[20px] px-[10px] `} onMouseOver={()=>{handleMouseOver(data)}} onMouseLeave={handleMouseLeave}>
            {data}
           </li>
             <div className="hoverBox  z-10 " onMouseOver={hoverOver} onMouseLeave={handleMouseLeave}><HoverComponent item={item}/></div>
            </>
           )
         })}
          
        </ul>

        <div className="flex w-[33%] items-center min-[768px]:gap-[35px] gap-[20px]  ">
          <form className="relative bg-[rgba(0,0,0,0.1)] w-[55%] rounded-[5px] ">
            <input
              className="pl-[35px] pr-[10px] py-[5px] rounded-[5px] w-full text-[15px] focus-visible:outline-none border-none bg-transparent placeholder:truncate"
              type="text"
              name=""
              id=""
              placeholder="Search for clothes & brands..."
            />
            <BsSearch className="absolute top-[50%] bottom-[50%]  translate-x-[-50%] translate-y-[-50%]    left-3 mr-5 cursor-pointer" />
          </form>
          <MdPermIdentity className="text-[35px]  w-[8%] font-light cursor-pointer" />
          <AiOutlineShoppingCart className="text-[30px] w-[8%] font-light cursor-pointer" />
        </div>
      </div>
    </nav>
    
    </>
  );
}
