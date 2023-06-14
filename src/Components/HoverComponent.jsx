import React from "react";

function HoverComponent({ item }) {
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
            <p className="px-[4px]  py-[2px] active:bg-gray-100">T-Shirts</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Casual Shirts</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Formal Shirts</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">SweatShirts</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Sweaters</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Jackets</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Blazers&Coats</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Suits</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Rain jackets</p>
            <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold">
              Indian & festive Wear
            </h3>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Kurta & Kurta Sets</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Sherwanis</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Nehru Jacket</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Dhotis</p>
          <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          </div>
          <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa] max-[1000px]:bg-transparent  p-[2.1vw]">
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
              Bottomwear
            </h3>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Jeans</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">casual Trousers</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Formal Trousers</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Shorts</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Track Pants & Joggers</p>

            <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px] w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold">
              Inner Wear & Sleepwear
            </h3>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Breif & Trunks</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Boxers</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Vests</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Sleepear & Loungewear</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Thermals</p>
          <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          </div>
          <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] p-[2.1vw]">
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
              Footwear
            </h3>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Casual Shoes</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Sport Shoes</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Formal Shoes</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Sneakers</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Sandals & Floaters</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Flip FLops</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Socks</p>

            <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px] w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
            
            
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] my-[10px] cursor-pointer text-black font-semibold">
              Sunglasses & Frames
            </h3>
            <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] my-[10px] cursor-pointer text-black font-semibold">
              Watches0

            </h3>
            <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          </div>
          <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa] max-[1000px]:bg-transparent  p-[2.1vw]">
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
              Sports & Activewear
            </h3>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Sport Shoes</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Sport Sandals</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Active T-Shirts</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Trackpants & Shorts</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Jackets & Sweatshirts</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">TrackSuits</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Sport Accesories</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Swimsuit</p>

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
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Kurta & Suits</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Kurtis,Tunics & Tops</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Sarees</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Ethnic Wear</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Leggings, Salwar & Churidars</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Skirts & Plazos</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Dress Materials</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Lehnga Cholis</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Dupatta & Shwals</p>
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
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Dresses</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Tops</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Tshirts</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Jeans</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Trousers & Capris</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Shorts & Skirts</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Co-ords</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Playsuits</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Jumpsuits</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Shrugs</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Sweaters & Sweatshirts</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Jackets & coats</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Blazers & Waistcoats</p>
            

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
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Casual Shoes</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Sport Shoes & Floaters</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Flats</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Heels</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Boots</p>
            <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px] w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
            
            
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] my-[10px] cursor-pointer text-black font-semibold">
              Sports & Active Wear
            </h3>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Clothing</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Footwear</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Sports Accessories</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Sports Equipments</p>
            <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          </div>
          <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa] max-[1000px]:bg-transparent  p-[2.1vw]">
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
              Lingerie & Sleepwear
            </h3>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Bra</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Breifs</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Shapewear</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Sleepwear & Loungewear</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Swimwear</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Camisoles & Thermals</p>
            

            <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px]   w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
              Beauty & Personal Care
            </h3>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Makeup</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Skincare</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">premium Beauty</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">Lipsticks</p>
            <p className="px-[4px]  py-[2px] active:bg-gray-100">fragnance</p>
            
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
          <p className="px-[4px]  py-[2px] active:bg-gray-100">T Shirts</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Shirts</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Shorts</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Jeans</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Trousers</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Clothing sets</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Ethnic Wear</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Track Pants & Payjamas</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Party Wear</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Innerwear & Thermals</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Nightwaear & Lounge</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Value Packs</p>
         
          <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
        </div>
        <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa] max-[1000px]:bg-transparent  p-[2.1vw] min-w-[280px] max-lg:min-w-[16vw] max-[1000px]:w-full w-full">
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px]  text-black font-semibold cursor-pointer">
            Girls Clothing
          </h3>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Dresses</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Tops</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Tshirts</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Clothing Sets</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Lehnga Choli</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Kurta Sets</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Party wear</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Dungareees & Jumpsuits</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Skirt & Shorts</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Tights & Leggings</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Jeans, trousers & Capris</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Jackets, Sweaters & Sweatashirts</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Innerwear & Thermals</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Nightwear & Loungewear</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">ValuePacks</p>
          <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
           
          
          
        </div>
        <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] p-[2.1vw]  w-full">
          
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
            Footwear
          </h3>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Casual Shoes</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Sport Shoes</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Flats</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Flipflops</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Sandals</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">School Shoes</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Heels</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Socks</p>
          <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px] w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          
          
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] my-[10px] cursor-pointer text-black font-semibold">
            Toys
          </h3>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Learning & Development</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Activity toys</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Soft Toys</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Action Figure/Playsets</p>
          <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
        </div>
        <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa] max-[1000px]:bg-transparent  p-[2.1vw]">
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
            Infants
          </h3>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Bodysuits</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Rompers & Sleepsuits</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Clothing Sets</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Tshirts & Tops</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Dresses</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Bottomear</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Wintermear</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Innerwear & Sleepwear</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Infant Care</p>
          

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
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Lipstick</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Lip Gloss</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Lip Liner</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Mascara</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Eyeliner</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Kajal</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Eyeshadow</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Foundation</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Primer</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Concealer</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Compact</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Nail Polish</p>
          <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          
        </div>
        <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa] max-[1000px]:bg-transparent  p-[2.1vw]  ">
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] max-lg:text-[12px]  text-black font-semibold cursor-pointer">
            Skincare,Bath & Body
          </h3>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Face Mousturizer</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">cleanser</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Masks & Peel</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Sunscreen</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Serum</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Face Wash</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Eye Cream</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Lip Balm</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Body Lotion</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Body Wash</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Body Scrub</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Hand Cream</p>
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
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Shampoo</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Conditioner</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Hair Cream</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Hair Oil</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Hair Gel</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Hair Color</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Hair Serum</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Hair Accessory</p>
          <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px] w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          
          
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] my-[10px] cursor-pointer text-black font-semibold">
            Fragnances
          </h3>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Perfume</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Deodorant</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Body Mist</p>
          
          <div className="my-[20px] h-[1px] min-[1000px]:hidden max-[1000px]:my-[20px]  w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
        </div>
        <div className="text-[1.15vw] max-[1000px]:text-[18px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa] max-[1000px]:bg-transparent  p-[2.1vw]">
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
            Appliances
          </h3>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Hair Straightner</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Hair Dryer</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Epilator</p>
          <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px]   w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
            Men's Grooming
          </h3>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Trimmers</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Beard Oil</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Hair Wax</p>

          <div className="my-[20px] h-[1px]  max-[1000px]:my-[20px]   w-[16vw] max-[1000px]:w-full bg-[rgba(0,0,0,0.2)] "></div>
          <h3 className="text-[1.25vw] max-[1000px]:text-[20px] text-black font-semibold cursor-pointer">
            Beauty Gift & Makeup Set
          </h3>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Beauty Gift</p>
          <p className="px-[4px]  py-[2px] active:bg-gray-100">Makeup Kit</p>
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
