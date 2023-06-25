import React from "react";
import { useNavigate } from "react-router-dom";

function ByBrands() {
  const navigate = useNavigate();
  function handleClick(e) {
    navigate(`Collection/Brand/${e.target.nextSibling.innerHTML}`);
  }
  return (
    <div className="my-16 flex flex-col items-center h-full  md:px-20">
      <h1 className="font-semibold md:text-3xl text-2xl">
        Products by Brands
      </h1>

      <div className="flex gap-2 md:gap-[50px] md:flex-wrap md:justify-center  w-full h-full box-border  py-8 overflow-x-auto overflow-y-hidden whitespace-nowrap md:overflow-hidden scroll-smooth -mx-[20px]  items-center max-md:px-2">
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40  max-md:flex-[0_0_33.33%] inline-block cursor-pointer shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-center object-cover rounded-md"
            src="https://etimg.etb2bimg.com/thumb/msid-57671838,width-1200,resizemode-4/.jpg"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
            Roadster
          </p>
        </div>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40  max-md:flex-[0_0_33.33%] inline-block cursor-pointer   shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-center object-contain rounded-md"
            src="data:image/png;base64,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"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
            max
          </p>
        </div>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40  max-md:flex-[0_0_33.33%] inline-block cursor-pointer   shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-right-top object-cover rounded-md"
            src="https://rukminim2.flixcart.com/image/800/350/cms-rpd-img/6ec2ba3e1bfd457b899d96b20f5cccfe_1855cb56721_image.png?q=90"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
            Fubar
          </p>
        </div>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40  max-md:flex-[0_0_33.33%] inline-block cursor-pointer  shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-center object-cover rounded-md"
            src="https://www.getketch.com/images/highlander/highlander-main-banner-m-new.jpg"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
            Highlander
          </p>
        </div>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40  max-md:flex-[0_0_33.33%] inline-block cursor-pointer  shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-center object-cover rounded-md"
            src="data:image/png;base64,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"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
          RARE RABBIT
          </p>
        </div>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40  max-md:flex-[0_0_33.33%] inline-block cursor-pointer   shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-center object-cover rounded-md"
            src="https://4.imimg.com/data4/DM/RM/MY-16551252/mens-blazer.jpg"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
          Levis
          </p>
        </div>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40  max-md:flex-[0_0_33.33%] inline-block cursor-pointer  shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-top object-cover rounded-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj4iHnsFo2CpNKSVEg9VWLRs7JLczDtIqirw&usqp=CAU"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
          Wildcraft
          </p>
        </div>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40  max-md:flex-[0_0_33.33%] inline-block cursor-pointer  shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-top object-cover rounded-md"
            src="https://assets2.andaazfashion.com/media/catalog/product/b/r/brown-poly-cotton-churidar-men-kurta-pajama-mkpa0894-1.jpg"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
          HRX by Hrithik Roshan
          </p>
        </div>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40   max-md:flex-[0_0_33.33%] inline-block cursor-pointer shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-top object-cover rounded-md"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
          ADIDAS Originals
          </p>
        </div>
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className=" box-border md:h-40 h-32 md:w-40   max-md:flex-[0_0_33.33%] inline-block cursor-pointer shadow-xl rounded-md"
        >
          <img
            className="h-full w-full object-top object-cover rounded-md"
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/377901/01/sv01/fnd/THA/fmt/png/Fast-R-NITRO-Elite-Elektrocharged-Running-Shoes-Women"
            alt=""
          />
          <p className="text-gray-400 text-center mt-2 text-[17px] font-semibold">
            Nike
          </p>
        </div>
      </div>
    </div>
  );
}

export default ByBrands;
