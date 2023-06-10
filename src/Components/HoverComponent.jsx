import React from "react";

function HoverComponent({ item }) {
  function renderHoverItem() {
    if (item == "Men") {
      return (
        <div className=" box-border w-full flex gap-[5px] max-[1000px]:gap-0">
          <div className="text-[14px] max-[1000px]:text-[11px] text-[rgba(0,0,0,0.5)] p-[30px] max-[1000px]:p-[20px]">
            <h3 className="text-[15px] max-[1000px]:text-[12px] text-black font-semibold cursor-pointer">
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
            <div className="my-[20px] h-[1px] max-[1000]:my-[10px] max-[1000px]:w-[150px]  w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[15px] max-[1000px]:text-[12px] text-black font-semibold">
              Indian & festive Wear
            </h3>
            <p>Kurta & Kurta Sets</p>
            <p>Sherwanis</p>
            <p>Nehru Jacket</p>
            <p>Dhotis</p>
          </div>
          <div className="text-[14px] max-[1000px]:text-[11px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[30px] max-[1000px]:p-[20px]">
            <h3 className="text-[15px] max-[1000px]:text-[12px] text-black font-semibold cursor-pointer">
              Bottomwear
            </h3>
            <p>Jeans</p>
            <p>casual Trousers</p>
            <p>Formal Trousers</p>
            <p>Shorts</p>
            <p>Track Pants & Joggers</p>

            <div className="my-[20px] h-[0.4px] max-[1000]:my-[10px] max-[1000px]:w-[150px] w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[15px] max-[1000px]:text-[12px] text-black font-semibold">
              Inner Wear & Sleepwear
            </h3>
            <p>Breif & Trunks</p>
            <p>Boxers</p>
            <p>Vests</p>
            <p>Sleepear & Loungewear</p>
            <p>Thermals</p>
          </div>
          <div className="text-[14px] max-[1000px]:text-[11px] text-[rgba(0,0,0,0.5)] p-[30px] max-[1000px]:p-[20px]">
            <h3 className="text-[15px] max-[1000px]:text-[12px] text-black font-semibold cursor-pointer">
              Footwear
            </h3>
            <p>Casual Shoes</p>
            <p>Sport Shoes</p>
            <p>Formal Shoes</p>
            <p>Sneakers</p>
            <p>Sandals & Floaters</p>
            <p>Flip FLops</p>
            <p>Socks</p>

            <div className="my-[20px] h-[0.4px] max-[1000]:my-[10px] max-[1000px]:w-[150px] w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
            
            
            <h3 className="text-[15px] max-[1000px]:text-[12px] my-[10px] cursor-pointer text-black font-semibold">
              Sunglasses & Frames
            </h3>
            <h3 className="text-[15px] max-[1000px]:text-[12px] my-[10px] cursor-pointer text-black font-semibold">
              Watches
            </h3>
            
          </div>
          <div className="text-[14px] max-[1000px]:text-[11px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[30px] max-[1000px]:p-[20px]">
            <h3 className="text-[15px] max-[1000px]:text-[12px] text-black font-semibold cursor-pointer">
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

            <div className="my-[20px] h-[0.4px] w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
            
          </div>
          
          
        </div>
      );
      
      
    }else if(item==="Women"){
        return(
            <div className=" box-border w-full flex gap-[5px] max-[1000px]:gap-0">
          <div className="text-[14px] max-[1000px]:text-[11px] text-[rgba(0,0,0,0.5)] p-[30px] max-[1000px]:p-[20px]">
            <h3 className="text-[15px] max-[1000px]:text-[12px] text-black font-semibold cursor-pointer">
              Indian & fusion Wear
            </h3>
            <p>Kurta & Suits</p>
            <p>Kurtis,Tunics & Tops</p>
            <p>Sarees</p>
            <p>Ethnic Wear</p>
            <p>Leggings, Salwar & Churidars</p>
            <p>Skirts & Plazos</p>
            <p>Dress Materials</p>
            <p>Lehnga Cholis</p>
            <p>Dupatta & Shwals</p>
            <div className="my-[20px] h-[1px] max-[1000px]:my-[10px] max-[1000px]:w-[150px]  w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[15px] max-[1000px]:text-[12px] text-black font-semibold">
              Belts, Scarves & More
            </h3>
            <h3 className="text-[15px] max-[1000px]:text-[12px] my-[10px] text-black font-semibold">
              Watches & Wearables
            </h3>
            
          </div>
          <div className="text-[14px] max-[1000px]:text-[11px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[30px] max-[1000px]:p-[20px]">
            <h3 className="text-[15px] max-[1000px]:text-[12px]  text-black font-semibold cursor-pointer">
              Western Wear
            </h3>
            <p>Dresses</p>
            <p>Tops</p>
            <p>Tshirts</p>
            <p>Jeans</p>
            <p>Trousers & Capris</p>
            <p>Shorts & Skirts</p>
            <p>Co-ords</p>
            <p>Playsuits</p>
            <p>Jumpsuits</p>
            <p>Shrugs</p>
            <p>Sweaters & Sweatshirts</p>
            <p>Jackets & coats</p>
            <p>Blazers & Waistcoats</p>
            

            <div className="my-[20px] h-[0.4px] max-[1000px]:my-[10px] max-[1000px]:w-[150px] w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[15px] max-[1000px]:text-[12px] text-black font-semibold">
              Plus Size
            </h3>
            
          </div>
          <div className="text-[14px] max-[1000px]:text-[11px] text-[rgba(0,0,0,0.5)] p-[30px] max-[1000px]:p-[20px]">
            <h3 className="text-[15px] max-[1000px]:text-[12px] text-black font-semibold cursor-pointer">
              Maternity
            </h3>
            <h3 className="text-[15px] my-[10px] max-[1000px]:text-[12px] text-black font-semibold cursor-pointer">
              Sunglasses & Frames
            </h3>
            <h3 className="text-[15px] my-[10px] max-[1000px]:text-[12px] text-black font-semibold cursor-pointer">
              Footwear
            </h3>
            <p>Casual Shoes</p>
            <p>Sport Shoes & Floaters</p>
            <p>Flats</p>
            <p>Heels</p>
            <p>Boots</p>
            <div className="my-[20px] h-[0.4px] max-[1000px]:my-[10px] max-[1000px]:w-[150px] w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
            
            
            <h3 className="text-[15px] max-[1000px]:text-[12px] my-[10px] cursor-pointer text-black font-semibold">
              Sports & Active Wear
            </h3>
            <p>Clothing</p>
            <p>Footwear</p>
            <p>Sports Accessories</p>
            <p>Sports Equipments</p>
            
          </div>
          <div className="text-[14px] max-[1000px]:text-[11px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[30px] max-[1000px]:p-[20px]">
            <h3 className="text-[15px] max-[1000px]:text-[12px] text-black font-semibold cursor-pointer">
              Lingerie & Sleepwear
            </h3>
            <p>Bra</p>
            <p>Breifs</p>
            <p>Shapewear</p>
            <p>Sleepwear & Loungewear</p>
            <p>Swimwear</p>
            <p>Camisoles & Thermals</p>
            

            <div className="my-[20px] h-[0.4px] max-[1000px]:my-[10px]   w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[15px] max-[1000px]:text-[12px] text-black font-semibold cursor-pointer">
              Beauty & Personal Care
            </h3>
            <p>Makeup</p>
            <p>Skincare</p>
            <p>premium Beauty</p>
            <p>Lipsticks</p>
            <p>fragnance</p>
            
          </div>
          
          
        </div>
        )
  }else if(item==="Kids"){
    return(
        <div className=" box-border w-full items-start flex gap-[5px] max-[1000px]:gap-0">
        <div className="text-[14px] max-[1000px]:text-[11px] text-[rgba(0,0,0,0.5)] p-[30px] max-[1000px]:p-[20px] min-w-[250px] w-full">
          <h3 className="text-[15px] max-[1000px]:text-[12px]  text-black font-semibold cursor-pointer">
            Boys Clothing
          </h3>
          <p>T Shirts</p>
          <p>Shirts</p>
          <p>Shorts</p>
          <p>Jeans</p>
          <p>Trousers</p>
          <p>Clothing sets</p>
          <p>Ethnic Wear</p>
          <p>Track Pants & Payjamas</p>
          <p>Party Wear</p>
          <p>Innerwear & Thermals</p>
          <p>Nightwaear & Lounge</p>
          <p>Value Packs</p>
         
          
        </div>
        <div className="text-[14px] max-[1000px]:text-[11px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[30px] max-[1000px]:p-[20px] min-w-[280px] w-full">
          <h3 className="text-[15px] max-[1000px]:text-[12px]  text-black font-semibold cursor-pointer">
            Girls Clothing
          </h3>
          <p>Dresses</p>
          <p>Tops</p>
          <p>Tshirts</p>
          <p>Clothing Sets</p>
          <p>Lehnga Choli</p>
          <p>Kurta Sets</p>
          <p>Party wear</p>
          <p>Dungareees & Jumpsuits</p>
          <p>Skirt & Shorts</p>
          <p>Tights & Leggings</p>
          <p>Jeans, trousers & Capris</p>
          <p>Jackets, Sweaters & Sweatashirts</p>
          <p>Innerwear & Thermals</p>
          <p>Nightwear & Loungewear</p>
          <p>ValuePacks</p>
          

          
          
        </div>
        <div className="text-[14px] max-[1000px]:text-[11px] text-[rgba(0,0,0,0.5)] p-[30px] max-[1000px]:p-[20px]  w-full">
          
          <h3 className="text-[15px]  max-[1000px]:text-[12px] text-black font-semibold cursor-pointer">
            Footwear
          </h3>
          <p>Casual Shoes</p>
          <p>Sport Shoes</p>
          <p>Flats</p>
          <p>Flipflops</p>
          <p>Sandals</p>
          <p>School Shoes</p>
          <p>Heels</p>
          <p>Socks</p>
          <div className="my-[20px] h-[0.4px] max-[1000px]:my-[10px] max-[1000px]:w-[150px] w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
          
          
          <h3 className="text-[15px] max-[1000px]:text-[12px] my-[10px] cursor-pointer text-black font-semibold">
            Toys
          </h3>
          <p>Learning & Development</p>
          <p>Activity toys</p>
          <p>Soft Toys</p>
          <p>Action Figure/Playsets</p>
          
        </div>
        <div className="text-[14px] max-[1000px]:text-[11px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[30px] max-[1000px]:p-[20px]">
          <h3 className="text-[15px] max-[1000px]:text-[12px] text-black font-semibold cursor-pointer">
            Infants
          </h3>
          <p>Bodysuits</p>
          <p>Rompers & Sleepsuits</p>
          <p>Clothing Sets</p>
          <p>Tshirts & Tops</p>
          <p>Dresses</p>
          <p>Bottomear</p>
          <p>Wintermear</p>
          <p>Innerwear & Sleepwear</p>
          <p>Infant Care</p>
          

          <div className="my-[20px] h-[0.4px] max-[1000px]:my-[10px]   w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
          <h3 className="text-[15px] max-[1000px]:text-[12px] text-black font-semibold cursor-pointer">
            Home & Bath
          </h3>
          <h3 className="text-[15px]  mt-[10px] max-[1000px]:text-[12px] text-black font-semibold cursor-pointer">
            Personal Care
          </h3>
          
          
        </div>
        
        
      </div>
    )
  }else if(item==="Home & Living"){
    return(
        <div className=" box-border w-full items-start flex gap-[5px] max-[1000px]:gap-0">
        <div className="text-[14px] max-[1000px]:text-[11px] text-[rgba(0,0,0,0.5)] p-[30px] max-[1000px]:p-[20px] min-w-[250px] w-full">
          <h3 className="text-[15px] max-[1000px]:text-[12px]  text-black font-semibold cursor-pointer">
            Boys Clothing
          </h3>
          <p>T Shirts</p>
          <p>Shirts</p>
          <p>Shorts</p>
          <p>Jeans</p>
          <p>Trousers</p>
          <p>Clothing sets</p>
          <p>Ethnic Wear</p>
          <p>Track Pants & Payjamas</p>
          <p>Party Wear</p>
          <p>Innerwear & Thermals</p>
          <p>Nightwaear & Lounge</p>
          <p>Value Packs</p>
         
          
        </div>
        <div className="text-[14px] max-[1000px]:text-[11px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[30px] max-[1000px]:p-[20px] min-w-[280px] w-full">
          <h3 className="text-[15px] max-[1000px]:text-[12px]  text-black font-semibold cursor-pointer">
            Girls Clothing
          </h3>
          <p>Dresses</p>
          <p>Tops</p>
          <p>Tshirts</p>
          <p>Clothing Sets</p>
          <p>Lehnga Choli</p>
          <p>Kurta Sets</p>
          <p>Party wear</p>
          <p>Dungareees & Jumpsuits</p>
          <p>Skirt & Shorts</p>
          <p>Tights & Leggings</p>
          <p>Jeans, trousers & Capris</p>
          <p>Jackets, Sweaters & Sweatashirts</p>
          <p>Innerwear & Thermals</p>
          <p>Nightwear & Loungewear</p>
          <p>ValuePacks</p>
          

          
          
        </div>
        <div className="text-[14px] max-[1000px]:text-[11px] text-[rgba(0,0,0,0.5)] p-[30px] max-[1000px]:p-[20px]  w-full">
          
          <h3 className="text-[15px]  max-[1000px]:text-[12px] text-black font-semibold cursor-pointer">
            Footwear
          </h3>
          <p>Casual Shoes</p>
          <p>Sport Shoes</p>
          <p>Flats</p>
          <p>Flipflops</p>
          <p>Sandals</p>
          <p>School Shoes</p>
          <p>Heels</p>
          <p>Socks</p>
          <div className="my-[20px] h-[0.4px] max-[1000px]:my-[10px] max-[1000px]:w-[150px] w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
          
          
          <h3 className="text-[15px] max-[1000px]:text-[12px] my-[10px] cursor-pointer text-black font-semibold">
            Toys
          </h3>
          <p>Learning & Development</p>
          <p>Activity toys</p>
          <p>Soft Toys</p>
          <p>Action Figure/Playsets</p>
          
        </div>
        <div className="text-[14px] max-[1000px]:text-[11px] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[30px] max-[1000px]:p-[20px]">
          <h3 className="text-[15px] max-[1000px]:text-[12px] text-black font-semibold cursor-pointer">
            Infants
          </h3>
          <p>Bodysuits</p>
          <p>Rompers & Sleepsuits</p>
          <p>Clothing Sets</p>
          <p>Tshirts & Tops</p>
          <p>Dresses</p>
          <p>Bottomear</p>
          <p>Wintermear</p>
          <p>Innerwear & Sleepwear</p>
          <p>Infant Care</p>
          

          <div className="my-[20px] h-[0.4px] max-[1000px]:my-[10px]   w-[180px] bg-[rgba(0,0,0,0.2)] "></div>
          <h3 className="text-[15px] max-[1000px]:text-[12px] text-black font-semibold cursor-pointer">
            Home & Bath
          </h3>
          <h3 className="text-[15px]  mt-[10px] max-[1000px]:text-[12px] text-black font-semibold cursor-pointer">
            Personal Care
          </h3>
          
          
        </div>
        
        
      </div>
    )
  }
}
  return <>{renderHoverItem()}</>;
}

export default HoverComponent;
