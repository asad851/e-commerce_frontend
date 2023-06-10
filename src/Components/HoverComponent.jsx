import React from "react";

function HoverComponent({ item }) {
  function renderHoverItem() {
    if (item == "Men") {
      return (
        <div className=" box-border w-full flex gap-[10px] max-[900px]:gap-[5px]">
          <div className="text-[14px] max-[900px]:text-[12px] text-[rgba(0,0,0,0.5)] p-[30px] max-[900px]:p-[20px]">
            <h3 className="text-[15px] max-[900px]:text-[13px] text-black font-semibold cursor-pointer">
              Topwear
            </h3>
            <p>T-Shirts</p>
            <p>Casual Shirts</p>
            <p>Formal Shirts</p>
            <p>SweatShirts</p>
            <p>Sweaters</p>
            <p>Jackets</p>
            <p>Blazers&Coats</p>
            <p>Suits</p>
            <p>Rain jackets</p>
            <div className="my-[30px] h-[1px] w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[15px] max-[900px]:text-[13px] text-black font-semibold">
              Indian & festive Wear
            </h3>
            <p>Kurta & Kurta Sets</p>
            <p>Sherwanis</p>
            <p>Nehru Jacket</p>
            <p>Dhotis</p>
          </div>
          <div className="text-[14px] max-[900px]:text-[12px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[30px] max-[900px]:p-[20px]">
            <h3 className="text-[15px] max-[900px]:text-[13px] text-black font-semibold cursor-pointer">
              Bottomwear
            </h3>
            <p>Jeans</p>
            <p>casual Trousers</p>
            <p>Formal Trousers</p>
            <p>Shorts</p>
            <p>Track Pants & Joggers</p>

            <div className="my-[30px] h-[0.4px] w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[15px] max-[900px]:text-[13px] text-black font-semibold">
              Inner Wear & Sleepwear
            </h3>
            <p>Breif & Trunks</p>
            <p>Boxers</p>
            <p>Vests</p>
            <p>Sleepear & Loungewear</p>
            <p>Thermals</p>
          </div>
          <div className="text-[14px] max-[900px]:text-[12px] text-[rgba(0,0,0,0.5)] p-[30px] max-[900px]:p-[20px]">
            <h3 className="text-[15px] max-[900px]:text-[13px] text-black font-semibold cursor-pointer">
              Footwear
            </h3>
            <p>Casual Shoes</p>
            <p>Sport Shoes</p>
            <p>Formal Shoes</p>
            <p>Sneakers</p>
            <p>Sandals & Floaters</p>
            <p>Flip FLops</p>
            <p>Socks</p>

            <div className="my-[30px] h-[0.4px] w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
            
            
            <h3 className="text-[15px] max-[900px]:text-[13px] my-[10px] cursor-pointer text-black font-semibold">
              Sunglasses & Frames
            </h3>
            <h3 className="text-[15px] max-[900px]:text-[13px] my-[10px] cursor-pointer text-black font-semibold">
              Watches
            </h3>
            
          </div>
          <div className="text-[14px] max-[900px]:text-[12px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[30px] max-[900px]:p-[20px]">
            <h3 className="text-[15px] max-[900px]:text-[13px] text-black font-semibold cursor-pointer">
              Sports & Activewear
            </h3>
            <p>Sport Shoes</p>
            <p>Sport Sandals</p>
            <p>Active T-Shirts</p>
            <p>Trackpants & Shorts</p>
            <p>Jackets & Sweatshirts</p>
            <p>TrackSuits</p>
            <p>Sport Accesories</p>
            <p>Swimsuit</p>

            <div className="my-[30px] h-[0.4px] w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
            
          </div>
          
          
        </div>
      );
      
      
    }else if(item==="Women"){
        return(
            <div className=" box-border w-full flex gap-[15px] max-[900px]:gap-[5px]">
            <div className="text-[14px] max-[900px]:text-[12px] text-[rgba(0,0,0,0.5)] p-[30px] max-[900px]:p-[20px]">
              <h3 className="text-[15px] max-[900px]:text-[13px] text-black font-semibold cursor-pointer">
                Topwear
              </h3>
              <p>T-Shirts</p>
              <p>Casual Shirts</p>
              <p>Formal Shirts</p>
              <p>SweatShirts</p>
              <p>Sweaters</p>
              <p>Jackets</p>
              <p>Blazers&Coats</p>
              <p>Suits</p>
              <p>Rain jackets</p>
              <div className="my-[30px] h-[1px] w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
              <h3 className="text-[15px] max-[900px]:text-[13px] text-black font-semibold">
                Indian & festive Wear
              </h3>
              <p>Kurta & Kurta Sets</p>
              <p>Sherwanis</p>
              <p>Nehru Jacket</p>
              <p>Dhotis</p>
            </div>
            <div className="text-[14px] max-[900px]:text-[12px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[30px] max-[900px]:p-[20px]">
              <h3 className="text-[15px] max-[900px]:text-[13px] text-black font-semibold cursor-pointer">
                Bottomwear
              </h3>
              <p>Jeans</p>
              <p>casual Trousers</p>
              <p>Formal Trousers</p>
              <p>Shorts</p>
              <p>Track Pants & Joggers</p>
  
              <div className="my-[30px] h-[0.4px] w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
              <h3 className="text-[15px] max-[900px]:text-[13px] text-black font-semibold">
                Inner Wear & Sleepwear
              </h3>
              <p>Breif & Trunks</p>
              <p>Boxers</p>
              <p>Vests</p>
              <p>Sleepear & Loungewear</p>
              <p>Thermals</p>
            </div>
            <div className="text-[14px] max-[900px]:text-[12px] text-[rgba(0,0,0,0.5)] p-[30px] max-[900px]:p-[20px]">
              <h3 className="text-[15px] max-[900px]:text-[13px] text-black font-semibold cursor-pointer">
                Footwear
              </h3>
              <p>Casual Shoes</p>
              <p>Sport Shoes</p>
              <p>Formal Shoes</p>
              <p>Sneakers</p>
              <p>Sandals & Floaters</p>
              <p>Flip FLops</p>
              <p>Socks</p>
  
              <div className="my-[30px] h-[0.4px] w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
              
              
              <h3 className="text-[15px] max-[900px]:text-[13px] my-[10px] cursor-pointer text-black font-semibold">
                Sunglasses & Frames
              </h3>
              <h3 className="text-[15px] max-[900px]:text-[13px] my-[10px] cursor-pointer text-black font-semibold">
                Watches
              </h3>
              
            </div>
            <div className="text-[14px] max-[900px]:text-[12px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[30px] max-[900px]:p-[20px]">
              <h3 className="text-[15px] max-[900px]:text-[13px] text-black font-semibold cursor-pointer">
                Sports & Activewear
              </h3>
              <p>Sport Shoes</p>
              <p>Sport Sandals</p>
              <p>Active T-Shirts</p>
              <p>Trackpants & Shorts</p>
              <p>Jackets & Sweatshirts</p>
              <p>TrackSuits</p>
              <p>Sport Accesories</p>
              <p>Swimsuit</p>
  
              <div className="my-[30px] h-[0.4px] w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
              
            </div>
            
            
          </div> 
        )
  }
}
  return <>{renderHoverItem()}</>;
}

export default HoverComponent;
