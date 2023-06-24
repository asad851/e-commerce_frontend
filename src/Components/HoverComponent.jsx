import React from "react";
import { useNavigate } from "react-router-dom";
function HoverComponent({ item,setShowSlider,setShowSubSlider,setHideCategoryModal}) {
  const navigate =useNavigate()
  const handleClick=()=>{
    setShowSlider(false);
    setShowSubSlider(false)
    setHideCategoryModal("none")
  }
  function renderHoverItem() {
    if (item == "Men") {
      return (
        <div className=" box-border w-full flex gap-[5px] max-[1000px]:flex-col max-lg:gap-0">
          <div className="text-[1.15vw] flex flex-col  max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] p-[2.1vw] ">
            <h3 className="min-[1000px]:hidden my-3  text-[23px] text-red-400 font-semibold cursor-pointer">
              All
            </h3>
            <h3 className="text-[1.25vw]  max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
              Topwear
            </h3>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100" >T-Shirts</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Casual Shirts</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">SweatShirts</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Formal Shirts</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Sweaters</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Jackets</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Blazers</p>
           
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Suits</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Rain Jackets</p>
            <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold">
              Indian & festive Wear
            </h3>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Kurta and Kurta Sets</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Sherwanis</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Nehru Jackets</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Dhotis</p>
          <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          </div>
          <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa] max-[1000px]:bg-transparent  p-[2.1vw]">
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
              Bottomwear
            </h3>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Jeans</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">casual Trousers</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Formal Trousers</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Shorts</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Track Pants & Joggers</p>

            <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px] w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold">
              Inner Wear & Sleepwear
            </h3>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Breif & Trunks</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Boxers</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Vests</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Sleepear & Loungewear</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Thermals</p>
          <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          </div>
          <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] p-[2.1vw]">
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
              Footwear
            </h3>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Casual Shoes</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Sport Shoes</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Formal Shoes</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Sneakers</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Sandals & Floaters</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Flip FLops</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Socks</p>
                    
            <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px] w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
            
            
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] my-[10px] cursor-pointer text-black font-semibold">
              Sunglasses & Frames
            </h3>
            <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] my-[10px] cursor-pointer text-black font-semibold">
              Watches

            </h3>
            <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          </div>
          <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa] max-[1000px]:bg-transparent  p-[2.1vw]">
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
              Sports & Activewear
            </h3>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Sport Shoes</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Sport Sandals</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Active T-Shirts</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Trackpants & Shorts</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Jackets & Sweatshirts</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">TrackSuits</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Sport Accesories</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Swimsuit</p>

            <div className="my-[20px] h-[1px] w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
            
          </div>
          
          
        </div>
      );
      
      
    }else if(item==="Women"){
        return(
            <div className=" box-border w-full flex max-[1000px]:flex-col gap-[5px] max-lg:gap-0">
          <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] p-[2.1vw]">
          <h3 className="min-[1000px]:hidden my-3  text-[23px] text-red-400 font-semibold cursor-pointer">
              All
            </h3>
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
              Indian & fusion Wear
            </h3>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Kurta & Suits</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Kurtis,Tunics & Tops</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Sarees</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Ethnic Wear</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Leggings, Salwar & Churidars</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Skirts & Plazos</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Dress Materials</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Lehnga Cholis</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Dupatta & Shwals</p>
            <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px] max-lg:w-[150px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold">
              Belts, Scarves & More
            </h3>
            <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] my-[10px] text-black font-semibold">
              Watches & Wearables
            </h3>
            <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          </div>
          <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa] max-[1000px]:bg-transparent  p-[2.1vw]">
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px]  text-black font-semibold cursor-pointer">
              Western Wear
            </h3>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Dresses</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Tops</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Tshirts</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Jeans</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Trousers & Capris</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Shorts & Skirts</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Co-ords</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Playsuits</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Jumpsuits</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Shrugs</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Sweaters & Sweatshirts</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Jackets & coats</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Blazers & Waistcoats</p>
            

            <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px] w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold">
              Plus Size
            </h3>
            <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          </div>
          <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] p-[2.1vw]">
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
              Maternity
            </h3>
            <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[1.25vw] my-[10px]  max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
              Sunglasses & Frames
            </h3>
            <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[1.25vw] my-[10px] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
              Footwear
            </h3>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Casual Shoes</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Sport Shoes & Floaters</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Flats</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Heels</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Boots</p>
            <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px] w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
            
            
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] my-[10px] cursor-pointer text-black font-semibold">
              Sports & Active Wear
            </h3>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Clothing</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Footwear</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Sports Accessories</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Sports Equipments</p>
            <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          </div>
          <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa] max-[1000px]:bg-transparent  p-[2.1vw]">
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
              Lingerie & Sleepwear
            </h3>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Bra</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Breifs</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Shapewear</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Sleepwear & Loungewear</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Swimwear</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Camisoles & Thermals</p>
            

            <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px]   w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
              Beauty & Personal Care
            </h3>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Makeup</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Skincare</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">premium Beauty</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Lipsticks</p>
            <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">fragnance</p>
            
          </div>
          
          
        </div>
        )
  }else if(item==="Kids"){
    return(
        <div className=" box-border w-full max-[1000px]:flex-col  flex gap-[5px] max-lg:gap-0">
        <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] p-[2.1vw] min-w-[250px] max-lg:min-w-[16vw] max-[1000px]:w-full w-full">
        <h3 className="min-[1000px]:hidden my-3  text-[23px] text-red-400 font-semibold cursor-pointer">
              All
            </h3>
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px]  text-black font-semibold cursor-pointer">
            Boys Clothing
          </h3>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">T Shirts</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Shirts</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Shorts</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Jeans</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Trousers</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Clothing sets</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Ethnic Wear</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Track Pants & Payjamas</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Party Wear</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Innerwear & Thermals</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Nightwaear & Lounge</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Value Packs</p>
         
          <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
        </div>
        <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa] max-[1000px]:bg-transparent  p-[2.1vw] min-w-[280px] max-lg:min-w-[16vw] max-[1000px]:w-full w-full">
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px]  text-black font-semibold cursor-pointer">
            Girls Clothing
          </h3>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Dresses</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Tops</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Tshirts</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Clothing Sets</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Lehnga Choli</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Kurta Sets</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Party wear</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Dungareees & Jumpsuits</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Skirt & Shorts</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Tights & Leggings</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Jeans, trousers & Capris</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Jackets, Sweaters & Sweatashirts</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Innerwear & Thermals</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Nightwear & Loungewear</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">ValuePacks</p>
          <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
           
          
          
        </div>
        <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] p-[2.1vw]  w-full">
          
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
            Footwear
          </h3>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Casual Shoes</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Sport Shoes</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Flats</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Flipflops</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Sandals</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">School Shoes</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Heels</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Socks</p>
          <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px] w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          
          
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] my-[10px] cursor-pointer text-black font-semibold">
            Toys
          </h3>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Learning & Development</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Activity toys</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Soft Toys</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Action Figure/Playsets</p>
          <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
        </div>
        <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa] max-[1000px]:bg-transparent  p-[2.1vw]">
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
            Infants
          </h3>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Bodysuits</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Rompers & Sleepsuits</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Clothing Sets</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Tshirts & Tops</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Dresses</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Bottomear</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Wintermear</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Innerwear & Sleepwear</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Infant Care</p>
          

          <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px]   w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
            Home & Bath
          </h3>
          <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px]   w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          <h3 className="text-[1.25vw]   mt-[10px] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
            Personal Care
          </h3>
          
          
        </div>
        
        
      </div>
    )
  }else if(item==="Beauty"){
    return(
        <div className=" box-border w-full max-[1000px]:flex-col flex gap-[5px] max-lg:gap-0">
        <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] p-[2.1vw]  w-[16vw] max-[1000px]:w-full ">
        <h3 className="min-[1000px]:hidden my-3  text-[23px] text-red-400 font-semibold cursor-pointer">
              All
            </h3>
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px]  text-black font-semibold cursor-pointer">
            Makeup
          </h3>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Lipstick</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Lip Gloss</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Lip Liner</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Mascara</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Eyeliner</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Kajal</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Eyeshadow</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Foundation</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Primer</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Concealer</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Compact</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Nail Polish</p>
          <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          
        </div>
        <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa] max-[1000px]:bg-transparent  p-[2.1vw]  ">
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] max-lg:text-[12px]  text-black font-semibold cursor-pointer">
            Skincare,Bath & Body
          </h3>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Face Mousturizer</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">cleanser</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Masks & Peel</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Sunscreen</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Serum</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Face Wash</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Eye Cream</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Lip Balm</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Body Lotion</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Body Wash</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Body Scrub</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Hand Cream</p>
          <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px] w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px]   text-black font-semibold cursor-pointer">
            Baby Care
          </h3>
          <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px]   w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
            Masks
          </h3>
          <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          
          
        </div>
        <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] p-[2.1vw]  ">
          
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
            Haircare
          </h3>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Shampoo</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Conditioner</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Hair Cream</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Hair Oil</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Hair Gel</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Hair Color</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Hair Serum</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Hair Accessory</p>
          <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px] w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          
          
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] my-[10px] cursor-pointer text-black font-semibold">
            Fragnances
          </h3>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Perfume</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Deodorant</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Body Mist</p>
          
          <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
        </div>
        <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa] max-[1000px]:bg-transparent  p-[2.1vw]">
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
            Appliances
          </h3>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Hair Straightner</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Hair Dryer</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Epilator</p>
          <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px]   w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
            Men's Grooming
          </h3>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Trimmers</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Beard Oil</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Hair Wax</p>

          <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px]   w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
            Beauty Gift & Makeup Set
          </h3>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Beauty Gift</p>
          <p onClick={(e)=>{navigate(`/Explore/${item}/${e.target.innerHTML}`);handleClick()}} className="px-[4px]  py-[2px] active:bg-gray-100">Makeup Kit</p>
          <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px]   w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
            Premium Beauty 
          </h3>
        </div>
        
        
      </div>
    )
  }
}
  return <>{renderHoverItem()}</>;
}

export default HoverComponent;
