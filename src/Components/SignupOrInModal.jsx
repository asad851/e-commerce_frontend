import React from "react";
import { useState,useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { SignUp } from "../Store/userSlicer";

function SignupOrInModal({ setShowAccountModal }) {
  const [Switch, setSwitch] = useState("Sign in");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch()
  const {user} = useSelector(state=>state.userDetails)
  const USER = {
    id: nanoid(),
    name: name,
    email: email,
    password: password,
  };
  const handleSignup=()=>{
    dispatch(SignUp(USER))
  }
  useEffect(() => {
   localStorage.setItem("USER",JSON.stringify(user))
  }, [user])
  
  const SwitchKey = (current) => {
    setSwitch(current);
  };
  return (
    <div className="flex justify-center z-10 items-center  fixed top-0 left-0 bottom-0 right-0">
      <div
        className="  fixed top-0 left-0 bottom-0 right-0  bg-[rgba(0,0,0,0.4)] backdrop-blur-[3.5px]  "
        onClick={() => setShowAccountModal(false)}
      ></div>
      <div className="shadow-xl  bg-white p-7  rounded-lg max-w-[500px] max-h-[500px] h-full min-h-[500px]   w-full relative flex  flex-col overflow-hidden min-[400px]:items-center mx-[20px]">
        <IoCloseCircleOutline
          onClick={() => setShowAccountModal(false)}
          className="absolute top-1 right-1 text-[25px] cursor-pointer text-gray-400"
        />
        <div className="flex w-full text-[18px] font-medium">
          <div
            className={`w-[50%] bg-gray-100 py-2 text-center ${
              Switch === "Sign in"
                ? ""
                : "shadow-[inset_-10px_-10px_8px_-10px_rgba(0,0,0,0.3)] border-r-gray-300 border-b-gray-300 border-r-[1px] border-b-[1px]"
            } cursor-pointer box-border  transition-all ease-out duration-300 rounded-tl-md`}
            onClick={(e) => SwitchKey("Sign in")}
          >
            Sign in
          </div>
          <div
            className={`w-[50%] bg-gray-100 ${
              Switch === "Sign Up"
                ? ""
                : "shadow-[inset_10px_-10px_8px_-10px_rgba(0,0,0,0.3)]  border-l-gray-300 border-b-gray-300 border-l-[1px] border-b-[1px]"
            } py-2 text-center cursor-pointer box-border  transition-all ease-out duration-300 rounded-tr-md`}
            onClick={(e) => SwitchKey("Sign Up")}
          >
            Sign Up
          </div>
        </div>
        <div
          className={`Signin bg-gray-100 w-full  h-[428px] absolute ${
            Switch === "Sign in"
              ? "left-0 top-[71px]  "
              : "top-[71px] left-[-500px]"
          } transition-[left] duration-400 ease-out flex flex-col  px-6 min-[400px]:px-8`}
        >
          <span>Email </span>
          <input
            type="email"
            name="email"
           
            onChange={(e)=>{setEmail(e.target.value)}}
            required
            placeholder="Enter your email"
          />
          <span>password</span>
          <input
            type="password"
            name="password"
            onChange={(e)=>{e.target.value}}
            
            required
            placeholder="Enter your password"
          />
          <p className="text-[14px] my-[25px] text-center text-[rgba(0,0,0,0.6)]">
            If you already have an account Sign in or{" "}
            <span
              onClick={() => SwitchKey("Sign Up")}
              className="text-blue-400 underline font-semibold cursor-pointer"
            >
              Sign up{" "}
            </span>{" "}
            {""} if you are new{" "}
          </p>
          <button className="bg-gradient-to-br from-pink-500 to-orange-400  py-2 rounded-md mx-auto w-[50%] mt-[25px]">
            Sign in
          </button>
        </div>
        <div
          className={`Signin bg-gray-100 w-full h-[428px] absolute ${
            Switch === "Sign Up"
              ? "right-0 top-[71px] "
              : " top-[71px] right-[-500px]"
          } transition-[right] duration-400 ease-out flex flex-col px-6 min-[400px]:px-8 ring-0`}
        >
          <span>Name</span>
          <input onChange={(e)=>setName(e.target.value)} type="text" required placeholder="Enter your name" />
          <span>Email </span>
          <input
            type="email"
            name="email"
            
            onChange={(e)=>setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
          <span>password</span>
          <input
            type="password"
            name="password"
           
            onChange={(e)=>setPassword(e.target.value) }
            required
            placeholder="Enter your password"
          />
          <p className="text-[14px] my-[25px] text-center text-[rgba(0,0,0,0.6)]">
            If you don't have an account Sign up or{" "}
            <span
              onClick={() => SwitchKey("Sign in")}
              className="text-blue-400 underline font-semibold cursor-pointer"
            >
              Sign in{" "}
            </span>
          </p>
          <button onClick={()=>dispatch(SignUp(USER))} className="bg-gradient-to-br from-pink-500 to-orange-400  py-2 rounded-md mx-auto w-[50%] mt-[25px]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupOrInModal;
