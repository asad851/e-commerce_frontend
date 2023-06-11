import React from "react";

function HoverComponent({ item }) {
  function renderHoverItem() {
    if (item == "Men") {
      return (
        <div className=" box-border w-full flex gap-[5px] max-lg:gap-0">
          <div className="text-[1.15vw] max-lg:bg-yellow text-[rgba(0,0,0,0.5)] p-[2.1vw] ">
            <h3 className="text-[1.25vw] text-black font-semibold cursor-pointer">
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
            <div className="my-[20px] h-[1px] max-lg:my-[10px]  w-[16vw] bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[1.25vw] text-black font-semibold">
              Indian & festive Wear
            </h3>
            <p>Kurta & Kurta Sets</p>
            <p>Sherwanis</p>
            <p>Nehru Jacket</p>
            <p>Dhotis</p>
          </div>
          <div className="text-[1.15vw] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[2.1vw]">
            <h3 className="text-[1.25vw] text-black font-semibold cursor-pointer">
              Bottomwear
            </h3>
            <p>Jeans</p>
            <p>casual Trousers</p>
            <p>Formal Trousers</p>
            <p>Shorts</p>
            <p>Track Pants & Joggers</p>

            <div className="my-[20px] h-[0.4px] max-lg:my-[10px] w-[16vw] bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[1.25vw] text-black font-semibold">
              Inner Wear & Sleepwear
            </h3>
            <p>Breif & Trunks</p>
            <p>Boxers</p>
            <p>Vests</p>
            <p>Sleepear & Loungewear</p>
            <p>Thermals</p>
          </div>
          <div className="text-[1.15vw] text-[rgba(0,0,0,0.5)] p-[2.1vw]">
            <h3 className="text-[1.25vw] text-black font-semibold cursor-pointer">
              Footwear
            </h3>
            <p>Casual Shoes</p>
            <p>Sport Shoes</p>
            <p>Formal Shoes</p>
            <p>Sneakers</p>
            <p>Sandals & Floaters</p>
            <p>Flip FLops</p>
            <p>Socks</p>

            <div className="my-[20px] h-[0.4px] max-lg:my-[10px] w-[16vw] bg-[rgba(0,0,0,0.2)] "></div>
            
            
            <h3 className="text-[1.25vw] my-[10px] cursor-pointer text-black font-semibold">
              Sunglasses & Frames
            </h3>
            <h3 className="text-[1.25vw] my-[10px] cursor-pointer text-black font-semibold">
              Watches
            </h3>
            
          </div>
          <div className="text-[1.15vw] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[2.1vw]">
            <h3 className="text-[1.25vw] text-black font-semibold cursor-pointer">
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

            <div className="my-[20px] h-[0.4px] w-[16vw] bg-[rgba(0,0,0,0.2)] "></div>
            
          </div>
          
          
        </div>
      );
      
      
    }else if(item==="Women"){
        return(
            <div className=" box-border w-full flex gap-[5px] max-lg:gap-0">
          <div className="text-[1.15vw] text-[rgba(0,0,0,0.5)] p-[2.1vw]">
            <h3 className="text-[1.25vw] text-black font-semibold cursor-pointer">
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
            <div className="my-[20px] h-[1px] max-lg:my-[10px] max-lg:w-[150px]  w-[16vw] bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[1.25vw] text-black font-semibold">
              Belts, Scarves & More
            </h3>
            <h3 className="text-[1.25vw] my-[10px] text-black font-semibold">
              Watches & Wearables
            </h3>
            
          </div>
          <div className="text-[1.15vw] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[2.1vw]">
            <h3 className="text-[1.25vw]  text-black font-semibold cursor-pointer">
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
            

            <div className="my-[20px] h-[0.4px] max-lg:my-[10px] w-[16vw] bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[1.25vw] text-black font-semibold">
              Plus Size
            </h3>
            
          </div>
          <div className="text-[1.15vw] text-[rgba(0,0,0,0.5)] p-[2.1vw]">
            <h3 className="text-[1.25vw] text-black font-semibold cursor-pointer">
              Maternity
            </h3>
            <h3 className="text-[15px] my-[10px] max-lg:text-[12px] text-black font-semibold cursor-pointer">
              Sunglasses & Frames
            </h3>
            <h3 className="text-[15px] my-[10px] max-lg:text-[12px] text-black font-semibold cursor-pointer">
              Footwear
            </h3>
            <p>Casual Shoes</p>
            <p>Sport Shoes & Floaters</p>
            <p>Flats</p>
            <p>Heels</p>
            <p>Boots</p>
            <div className="my-[20px] h-[0.4px] max-lg:my-[10px] w-[16vw] bg-[rgba(0,0,0,0.2)] "></div>
            
            
            <h3 className="text-[1.25vw] my-[10px] cursor-pointer text-black font-semibold">
              Sports & Active Wear
            </h3>
            <p>Clothing</p>
            <p>Footwear</p>
            <p>Sports Accessories</p>
            <p>Sports Equipments</p>
            
          </div>
          <div className="text-[1.15vw] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[2.1vw]">
            <h3 className="text-[1.25vw] text-black font-semibold cursor-pointer">
              Lingerie & Sleepwear
            </h3>
            <p>Bra</p>
            <p>Breifs</p>
            <p>Shapewear</p>
            <p>Sleepwear & Loungewear</p>
            <p>Swimwear</p>
            <p>Camisoles & Thermals</p>
            

            <div className="my-[20px] h-[0.4px] max-lg:my-[10px]   w-[16vw] bg-[rgba(0,0,0,0.2)] "></div>
            <h3 className="text-[1.25vw] text-black font-semibold cursor-pointer">
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
        <div className=" box-border w-full items-start flex gap-[5px] max-lg:gap-0">
        <div className="text-[1.15vw] text-[rgba(0,0,0,0.5)] p-[2.1vw] min-w-[250px] max-lg:min-w-[16vw] w-full">
          <h3 className="text-[1.25vw]  text-black font-semibold cursor-pointer">
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
        <div className="text-[1.15vw] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[2.1vw] min-w-[280px] max-lg:min-w-[16vw] w-full">
          <h3 className="text-[1.25vw]  text-black font-semibold cursor-pointer">
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
        <div className="text-[1.15vw] text-[rgba(0,0,0,0.5)] p-[2.1vw]  w-full">
          
          <h3 className="text-[1.25vw] text-black font-semibold cursor-pointer">
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
          <div className="my-[20px] h-[0.4px] max-lg:my-[10px] w-[16vw] bg-[rgba(0,0,0,0.2)] "></div>
          
          
          <h3 className="text-[1.25vw] my-[10px] cursor-pointer text-black font-semibold">
            Toys
          </h3>
          <p>Learning & Development</p>
          <p>Activity toys</p>
          <p>Soft Toys</p>
          <p>Action Figure/Playsets</p>
          
        </div>
        <div className="text-[1.15vw] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[2.1vw]">
          <h3 className="text-[1.25vw] text-black font-semibold cursor-pointer">
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
          

          <div className="my-[20px] h-[0.4px] max-lg:my-[10px]   w-[16vw] bg-[rgba(0,0,0,0.2)] "></div>
          <h3 className="text-[1.25vw] text-black font-semibold cursor-pointer">
            Home & Bath
          </h3>
          <h3 className="text-[15px]  mt-[10px] max-lg:text-[12px] text-black font-semibold cursor-pointer">
            Personal Care
          </h3>
          
          
        </div>
        
        
      </div>
    )
  }else if(item==="Beauty"){
    return(
        <div className=" box-border w-full items-start flex gap-[5px] max-lg:gap-0">
        <div className="text-[1.15vw] text-[rgba(0,0,0,0.5)] p-[2.1vw]  w-[16vw] ">
          <h3 className="text-[1.25vw]  text-black font-semibold cursor-pointer">
            Makeup
          </h3>
          <p>Lipstick</p>
          <p>Lip Gloss</p>
          <p>Lip Liner</p>
          <p>Mascara</p>
          <p>Eyeliner</p>
          <p>Kajal</p>
          <p>Eyeshadow</p>
          <p>Foundation</p>
          <p>Primer</p>
          <p>Concealer</p>
          <p>Compact</p>
          <p>Nail Polish</p>
         
          
        </div>
        <div className="text-[1.15vw] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[2.1vw]  ">
          <h3 className="text-[1.25vw] max-lg:text-[12px]  text-black font-semibold cursor-pointer">
            Skincare,Bath & Body
          </h3>
          <p>Face Mousturizer</p>
          <p>cleanser</p>
          <p>Masks & Peel</p>
          <p>Sunscreen</p>
          <p>Serum</p>
          <p>Face Wash</p>
          <p>Eye Cream</p>
          <p>Lip Balm</p>
          <p>Body Lotion</p>
          <p>Body Wash</p>
          <p>Body Scrub</p>
          <p>Hand Cream</p>
          <div className="my-[20px] h-[0.4px] max-lg:my-[10px] w-[16vw] bg-[rgba(0,0,0,0.2)] "></div>
          <h3 className="text-[1.25vw]   text-black font-semibold cursor-pointer">
            Baby Care
          </h3>
          <h3 className="text-[1.25vw] text-black font-semibold cursor-pointer">
            Masks
          </h3>

          
          
        </div>
        <div className="text-[1.15vw] text-[rgba(0,0,0,0.5)] p-[2.1vw]  ">
          
          <h3 className="text-[1.25vw] text-black font-semibold cursor-pointer">
            Haircare
          </h3>
          <p>Shampoo</p>
          <p>Conditioner</p>
          <p>Hair Cream</p>
          <p>Hair Oil</p>
          <p>Hair Gel</p>
          <p>Hair Color</p>
          <p>Hair Serum</p>
          <p>Hair Accessory</p>
          <div className="my-[20px] h-[0.4px] max-lg:my-[10px] w-[16vw] bg-[rgba(0,0,0,0.2)] "></div>
          
          
          <h3 className="text-[1.25vw] my-[10px] cursor-pointer text-black font-semibold">
            Fragnances
          </h3>
          <p>Perfume</p>
          <p>Deodorant</p>
          <p>Body Mist</p>
          
          
        </div>
        <div className="text-[1.15vw] text-[rgba(0,0,0,0.5)] bg-[#fdfafa]  p-[2.1vw]">
          <h3 className="text-[1.25vw] text-black font-semibold cursor-pointer">
            Appliances
          </h3>
          <p>Hair Straightner</p>
          <p>Hair Dryer</p>
          <p>Epilator</p>
          <div className="my-[20px] h-[0.4px] max-lg:my-[10px]   w-[16vw] bg-[rgba(0,0,0,0.2)] "></div>
          <h3 className="text-[1.25vw] text-black font-semibold cursor-pointer">
            Men's Grooming
          </h3>
          <p>Trimmers</p>
          <p>Beard Oil</p>
          <p>Hair Wax</p>

          <div className="my-[20px] h-[0.4px] max-lg:my-[10px]   w-[16vw] bg-[rgba(0,0,0,0.2)] "></div>
          <h3 className="text-[1.25vw] text-black font-semibold cursor-pointer">
            Beauty Gift & Makeup Set
          </h3>
          <p>Beauty Gift</p>
          <p>Makeup Kit</p>
          <div className="my-[20px] h-[0.4px] max-lg:my-[10px]   w-[16vw] bg-[rgba(0,0,0,0.2)] "></div>
          <h3 className="text-[1.25vw] text-black font-semibold cursor-pointer">
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
