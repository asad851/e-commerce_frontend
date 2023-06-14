import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdPermIdentity } from "react-icons/md";
import logo from "../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import HoverComponent from "./HoverComponent";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import { Drawer } from "flowbite";
export default function Header() {
  const [opaque, setOpaque] = useState("hidden");
  const [item, setItem] = useState(null);
  const [showSlider, setShowSlider] = useState(false);
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

  const NavArray = ["Men", "Women", "Kids", "Beauty"];

  return (
    <>
      <div
        className={` hidden min-[1000px]:${opaque} absolute top-[0px] bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.3)] -z-10 `}
      ></div>
      <nav className="flex bg-white z-10  w-screen    py-[5px] shadow-[0_8px_20px_-16px_rgba(0,0,0,0.3)]   ">
        <div className=" items-center hidden min-[1000px]:flex w-full justify-between  box-border ">
          <img
            className="w-[17%] cursor-pointer ml-[45px]"
            src={logo}
            alt="logo"
          />
          <ul className="flex w-[32%] text-[1.35vw]  text-[rgba(0,0,0,0.7)] font-bold    box-border relative items-center ">
            {NavArray.map((data, index) => {
              return (
                <>
                  <li
                    key={index}
                    className={`cursor-pointer hover:underline underline-offset-[20px]  decoration-[3px] decoration-red-300 ${data}  py-[20px] px-[10px] `}
                    onMouseOver={() => {
                      handleMouseOver(data);
                    }}
                    onMouseLeave={handleMouseLeave}
                  >
                    {data}
                  </li>
                  <div
                    className="hoverBox  z-10 "
                    onMouseOver={hoverOver}
                    onMouseLeave={handleMouseLeave}
                  >
                    <HoverComponent item={item} />
                  </div>
                </>
              );
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

        {/* MOBILE MENU */}

        <div className=" items-center flex min-[1000px]:hidden w-screen justify-between px-[25px] box-border ">
          <img className=" cursor-pointer " src={logo} alt="logo" />
          {!showSlider ? (
            <RxHamburgerMenu
              className="text-xl font-bold"
              onClick={() => setShowSlider(true)}
            />
          ) : (
            <VscChromeClose
              className="text-xl font-bold"
              onClick={() => setShowSlider(false)}
            />
          )}
          
              
              <div
                id="drawer-right-example"
                class={`fixed top-0 ${showSlider?"right-[240px]":"right-0"} z-40 h-[90%] p-4 overflow-y-auto transition-[right] translate-x-full w-[60%] bg
                 shadow-[0_8px_20px_-16px_rgba(0,0,0,0.3)]`}
                tabindex="-1"
                aria-labelledby="drawer-right-label"
              >
                <h5
                  id="drawer-right-label"
                  class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
                >
                  <svg
                    class="w-5 h-5 mr-2"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Right drawer
                </h5>
                <button
                  type="button"
                  data-drawer-hide="drawer-right-example"
                  aria-controls="drawer-right-example"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
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
                  <span class="sr-only">Close menu</span>
                </button>
                <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
                  Supercharge your hiring by taking advantage of our{" "}
                  <a
                    href="#"
                    class="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline"
                  >
                    limited-time sale
                  </a>{" "}
                  for Flowbite Docs + Job Board. Unlimited access to over 190K
                  top-ranked candidates and the #1 design job board.
                </p>
                <div class="grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    class="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Learn more
                  </a>
                  <a
                    href="#"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Get access{" "}
                    <svg
                      class="w-4 h-4 ml-2"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
           
        </div>
      </nav>
    </>
  );
}
