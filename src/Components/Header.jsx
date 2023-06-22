import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdPermIdentity } from "react-icons/md";
import logo from "../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import HoverComponent from "./HoverComponent";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";
import { BsArrowLeft } from "react-icons/bs";
import SignupOrInModal from "./SignupOrInModal";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const {products} = useSelector(state=>state.cart)
  const [opaque, setOpaque] = useState("hidden");
  const [item, setItem] = useState(null);
  const [showSlider, setShowSlider] = useState(false);
  const [showSubSlider, setShowSubSlider] = useState(false);
  const [showSearch, setShowSeacrh] = useState(false);
  const [showAccountModal,setShowAccountModal] =useState(false);
  const [hideCategoryModal,setHideCategoryModal] =useState("")
  const [showCartNum, setShowCartNum] = useState("hidden")
  const navigate = useNavigate()

  function handleMouseOver(item) {
    setOpaque("block");
    setItem(item);
  }
  
  const hoverOver = () => {
    setOpaque("block");
  };
  function handleMouseLeave() {
    setOpaque("hidden");
  }
  const mobileMenuClickHandler = (data) => {
    setShowSubSlider(true);
    setItem(data);
  };
  const handleClickAccount=()=>{
    setShowSlider(false)
    setShowAccountModal(true)
  }
  useEffect(()=>{
    setShowCartNum("block")
    setTimeout(() => {
      setShowCartNum("hidden")
    }, 800);
  },[products])
  const NavArray = ["Men", "Women", "Kids", "Beauty"];
  const SearchBar = () => {
    return(
      <div className="absolute left-0 right-0 top-[80px] flex justify-center w-screen z-30 overflow-hidden ">
        <form className="relative   w-[90%] rounded-[5px] ">
      <input
        className="pl-[35px]  py-[8px] rounded-[8px] w-full text-[15px] focus-visible:outline-none border-none bg-white placeholder:truncate"
        type="text"
        name=""
        id=""
        placeholder="Search for clothes & brands..."
      />
      <BsSearch className="absolute top-[50%] bottom-[50%]  translate-x-[-10%] translate-y-[-50%]    left-3 mr-5 cursor-pointer" />
    </form>
      </div>
    )
  };
  
  return (
    <>
      <div
        className={`  ${opaque} fixed z-[5] top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.3)]    `}
      ></div>
      <nav className="flex bg-white z-10 h-[80px] max-[400px]:h-[70px]  w-full fixed top-0   py-[5px] shadow-[0_8px_22px_-14px_rgba(0,0,0,0.4)]   ">
        <div className=" items-center hidden min-[1000px]:flex w-full justify-between  box-border ">
          <img
            onClick={()=> navigate("/")}
            className="w-[17%] cursor-pointer ml-[45px]"
            src={logo}
            alt="logo"
          />
          <ul className="flex w-[32%] text-[1.35vw]  text-[rgba(0,0,0,0.7)] font-bold    box-border relative items-center ">
            {NavArray.map((data, index) => {
              return (
                <>
                  <Link to={`/explore/${item}`}
                    key={index}
                    className={`cursor-pointer hover:underline underline-offset-[20px]  decoration-[3px] decoration-red-300 ${data}  py-[20px] px-[10px] `}
                    onMouseOver={() => {
                      handleMouseOver(data);
                    }}
                    onMouseLeave={handleMouseLeave}
                    
                  >
                    {data}
                  </Link>
                  <div
                  style={{display:hideCategoryModal}}
                    className={`hoverBox  z-10 `}
                    onMouseOver={hoverOver}
                    onMouseLeave={handleMouseLeave}
                    
                  >
                    <HoverComponent item={item} setHideCategoryModal={setHideCategoryModal} />
                  </div>
                </>
              );
            })}
          </ul>

          <div className="flex w-[33%] items-center min-[768px]:gap-[35px] gap-[20px] relative  ">
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
            
            <MdPermIdentity onClick={()=>setShowAccountModal(true)} className="text-[35px]  w-[8%] font-light cursor-pointer" />
            
            <AiOutlineShoppingCart onClick={()=>navigate("/Cart")} className="text-[30px] w-[8%] font-light cursor-pointer" ></AiOutlineShoppingCart>
            <span className={`absolute right-11 -top-1 h-4 w-4  rounded-2xl bg-black text-white text-center text-xs ${showCartNum} `}>{products.length}</span>
          </div>
        </div>

        {/* MOBILE MENU */}

        <div className=" items-center flex min-[1000px]:hidden w-screen justify-between px-[25px] box-border ">
          <img onClick={()=>navigate('/')} className=" cursor-pointer " src={logo} alt="logo" />
          <div className="flex gap-[25px] items-centert">
            <BsSearch className=" cursor-pointer" onClick={()=>setShowSeacrh(true)} />
            <RxHamburgerMenu
              className="text-xl font-bold cursor-pointer"
              onClick={() => setShowSlider(true)}
            />
          </div>
          {showSearch&&
          <div className=" min-[1000px]:hidden fixed top-[0px] bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.3)] z-10" >
          <div
              className=" min-[1000px]:hidden fixed top-[0px] bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.3)] z-10 "
              onClick={() => setShowSeacrh(false)}
            ></div>
            {SearchBar()}
          </div>}
          {showSlider && (
            <div
              className=" max-[1000px]:hidden absolute top-[0px] bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.3)] z-10 "
              onClick={() => setShowSlider(false)}
            ></div>
          )}
          <div
            id="drawer-right-example"
            className={`fixed top-0 ${
              showSlider ? "right-[0px] " : "right-[-500px]"
            } z-40 p-4 overflow-y-auto transition-[right] duration-500 w-[100%] min-[400px]:w-[40%] h-screen bg-white ease-out shadow-xl  box-border`}
            tabIndex="-1"
            aria-labelledby="drawer-right-label"
          >
            <button
              type="button"
              data-drawer-hide="drawer-right-example"
              aria-controls="drawer-right-example"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-4 right-3 inline-flex items-center "
              onClick={() => setShowSlider(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <div className="flex flex-col w-full gap-[100px] text-[20px] font-bold mt-[100px] px-[50px] box-border">
              <ul className="flex flex-col w-full  gap-[30px] text-[20px] items-center overflow-hidden  text-[rgba(0,0,0,0.7)]     box-border relative  ">
                {NavArray.map((data, index) => {
                  return (
                    <>
                      <div
                        className="flex items-center justify-between gap-[15px] w-full cursor-pointer active:bg-gray-100 rounded-[5px] px-[10px]  "
                        onClick={() => mobileMenuClickHandler(data)}
                      >
                        <li key={index} className={`  `}>
                          {data}
                        </li>
                        <RxCaretRight />
                      </div>
                    </>
                  );
                })}
              </ul>
              <div className="flex flex-col gap-[10px] text-slate-100">
                <div className="w-full flex items-center cursor-pointer   bg-gradient-to-br from-pink-500 to-orange-400 rounded-md justify-center gap-[5px] p-[5px]" onClick={()=>handleClickAccount()} >
                  <p>Account</p>
                  <MdPermIdentity className="text-[25px]" />
                </div>
                <div onClick={()=>{navigate("/Cart"); setShowSlider(false)}} className="w-full flex items-center cursor-pointer  bg-gradient-to-br from-pink-500 to-orange-400 rounded-md justify-center gap-[5px] p-[5px]">
                  <p>Cart</p>
                  <AiOutlineShoppingCart className="text-[22px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SUB MENU */}

        <div
          id="drawer-right-example"
          className={`fixed top-0 ${
            showSubSlider ? "right-[0px] " : "right-[-550px]"
          } z-40 p-4 overflow-y-auto transition-[right] duration-500 w-[100%] min-[400px]:w-[40%] h-screen bg-white ease-out shadow-xl  box-border`}
          tabIndex="-1"
          aria-labelledby="drawer-right-label"
        >
          <button
            type="button"
            data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-4 right-3 inline-flex items-center "
            onClick={() => setShowSubSlider(false)}
          >
            <BsArrowLeft className="text-[23px]" />
            <span className="sr-only">Close menu</span>
          </button>
          <div className="mt-[50px] flex  ">
            <HoverComponent item={item} setShowSubSlider={setShowSubSlider} setShowSlider={setShowSlider} />
          </div>
        </div>
      </nav>
      {showAccountModal&&<SignupOrInModal setShowAccountModal={setShowAccountModal}/>}
    </>
  );
}
