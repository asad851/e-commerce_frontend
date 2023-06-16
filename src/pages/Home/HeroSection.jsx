import React from "react";
import Img from "../../Components/Img";
import img1 from "../../assets/Carousel1.jpg";
import img2 from "../../assets/Carousel2.png";
import img3 from "../../assets/Carousel 3.gif";
import img4 from "../../assets/Carousel 4.gif";
import img5 from "../../assets/Carousel 5.png";
import img6 from "../../assets/Carousel 6.png";
import { useState } from "react";
import { useEffect } from "react";
function HeroSection() {
  const [slideNum, setSlideNum] = useState(0);
  const Carouselarray = [img1, img2, img3, img4, img5, img6];
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideNum((prev) => (prev + 1) % Carouselarray.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="  h-[250px] mt-[70px] relative min-[768px]:mt-[80px]  min-[1000px]:h-[450px] overflow-hidden   w-full ">
      <div
        className=" h-full w-full flex  transition-transform duration-500 ease-in "
        style={{ transform: `translateX(-${slideNum * 100}%)` }}
      >
        {Carouselarray.map((img, index) => {
          return (
            <div className="h-full w-full  flex-[0_0_100%]" key={index}>
              <Img
                src={img}
                className="  w-full h-[250px] min-[1000px]:h-[450px] object-center object-fill "
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center absolute bottom-2 w-full">
        {Carouselarray.map((_, index) => {
          return (
            <div
              key={index}
              className={`min-[768px]:h-3.5 h-2 w-2 min-[768px]:w-3.5  rounded-xl ${
                index == slideNum ? "bg-gray-800" : "bg-gray-300"
              } cursor-pointer mx-1.5 `}
              onClick={() => setSlideNum(index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroSection;
