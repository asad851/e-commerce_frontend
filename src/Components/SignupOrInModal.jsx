import React from "react";
import { useState } from "react";
function SignupOrInModal({setShowAccountModal}) {
  const [Switch, setSwitch] = useState("Sign in");
  const SwitchKey = (current) => {
    setSwitch(current);
  };
  return (
    <div className="flex justify-center items-center mx-[20px] ">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.4)] backdrop-blur-[3.5px]  "
        onClick={() => setShowAccountModal(false)}
      ></div>
      <div className="shadow-xl bg-white p-7  rounded-lg max-w-[500px] max-h-[500px] h-full min-h-[500px]  z-50 w-full relative flex  flex-col overflow-hidden">
        <div className="flex w-full text-[18px] font-medium">
          <div
            className={`w-[50%] bg-gray-100 py-2 text-center ${
              Switch === "Sign in"
                ? ""
                : "shadow-[inset_-10px_-10px_8px_-10px_rgba(0,0,0,0.3)] border-r-gray-300 border-b-gray-300 border-r-[1px] border-b-[1px]"
            } cursor-pointer box-border rounded-l-md transition-all ease-out duration-300`}
            onClick={(e) => SwitchKey("Sign in")}
          >
            Sign in
          </div>
          <div
            className={`w-[50%] bg-gray-100 ${
              Switch === "Sign Up"
                ? ""
                : "shadow-[inset_10px_-10px_8px_-10px_rgba(0,0,0,0.3)]  border-r-gray-300 border-b-gray-300 border-r-[1px] border-b-[1px]"
            } py-2 text-center cursor-pointer box-border rounded-r-md transition-all ease-out duration-300`}
            onClick={(e) => SwitchKey("Sign Up")}
          >
            Sign Up
          </div>
        </div>
        <div
          className={`bg-red-300 w-full  h-[428px] absolute ${
            Switch === "Sign in" ? "left-0 top-[72px]  " : "top-[72px] left-[-500px]"
          } transition-[left] duration-400 ease-out `}
        >
            <input type="text" />
            <input type="email" name="email" id="" />
            <input type="password" name="password" id="" />
            <button>Sign in</button>
            </div>
        <div
          className={`bg-red-300 w-full h-[428px] absolute ${
            Switch === "Sign Up" ? "right-0 top-[72px] " : " top-[72px] right-[-500px]"
          } transition-[right] duration-400 ease-in-out `}
        >
        <input type="text" />
        <input type="email" name="email" id="" />
        <input type="password" name="password" id="" />
        <button>Sign in</button></div>
      </div>
    </div>
  );
}

export default SignupOrInModal;
