import React from "react";
import Img from "../../Components/Img";
import img1 from "../../assets/Carousel1.jpg";
import img2 from "../../assets/Carousel2.png";
import img3 from "../../assets/Carousel 3.gif";
import img4 from "../../assets/Carousel 4.gif";
import img5 from "../../assets/Carousel 5.png";
import img6 from "../../assets/Carousel 6.png";



import CarouselComponent from "../../Components/carousel";
function HeroSection() {
  
  const Carouselarray = [img1, img2, img3, img4, img5, img6];
  

  return (
    <div className="  h-[200px] mt-[70px]   relative min-[768px]:mt-[80px]  min-[1000px]:h-[450px] overflow-hidden   w-full ">
      <div className="h-full w-full ">
      <CarouselComponent items={Carouselarray}/>
      </div>
     
    </div>
  );
}

export default HeroSection;
