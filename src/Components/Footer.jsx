import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const listStyle =
  "transition-all ease-linear text-gray-500 duration-300 text-[16px] min-[768px]:text-[16px] hover:text-[#da2f68] max-[350px]:text-[12px]";
const iconStyle =
  "w-[50px] h-[50px] rounded-[50%]  bg-gray-700 flex items-center justify-center pointer transition-all ease-linear duration-300 hover:shadow-[0_0_0.625em_#f75959] cursor-pointer text-[#ffffff] ";

const Footer = () => {
  return (
    <footer className="bg-white -z-10 relative  shadow-[0_-4px_5px_-6px_rgba(0,0,0,0.5)]  py-[50px] text-white" >
      <div className="flex items-center flex-col">
        <ul className="flex items-center judtify-center gap-[10px] list-none mb-[20px] min-[768px]:mb-[30px] min-[768px]:gap-[30px] ">
          <li className={listStyle}>Terms Of Use</li>
          <li className={listStyle}>Privacy-Policy</li>
          <li className={listStyle}>About</li>
          <li className={listStyle}>Blog</li>
          <li className={listStyle}>FAQ</li>
        </ul>
        <div className="text-[12px] text-gray-600 opacity-[0.5] text-center max-w-[800px] mb-[20px] min-[768px]:text-[14px] min-[768px]:mb-[30px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="flex items-center -z-10 justify-center gap-[10px]">
          <span className={iconStyle}>
            <FaFacebookF />
          </span>
          <span className={iconStyle}>
            <FaInstagram />
          </span>
          <span className={iconStyle}>
            <FaTwitter />
          </span>
          <span className={iconStyle}>
            <FaLinkedin />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;