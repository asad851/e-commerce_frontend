import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Img from "../Components/Img";

const CarouselComponent = ({ items }) => {
  return (
    <Carousel
    showArrows={true}
    showThumbs={false}
    showStatus={true}
    infiniteLoop={true}
    autoPlay={true}
    interval={3000}
    transitionTime={500}
    stopOnHover={false}
    
    >
      {items.map((item, index) => (
        <div key={index} className="flex-[0_0_100%] h-full w-full">
          <Img
                src={item}
                className="  w-full h-[250px] min-[1000px]:h-[500px] object-center object-fill "
              />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;