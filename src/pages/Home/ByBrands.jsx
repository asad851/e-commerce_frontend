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
            className="h-full w-full object-center object-contain rounded-md"
            src="https://1000logos.net/wp-content/uploads/2017/03/Levis-Logo.png"
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
            className="h-full w-full object-center object-fill rounded-md"
            src="data:image/png;base64,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"
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
            src="https://storage.googleapis.com/impact-news-photo/news-photo/Volume17-Issue28-Pic-25.jpg"
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
            src="https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg"
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
            src="https://c.static-nike.com/a/images/w_1920,c_limit/bzl2wmsfh7kgdkufrrjq/image.jpg"
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
