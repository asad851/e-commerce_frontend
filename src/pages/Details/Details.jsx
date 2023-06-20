import React from "react";
import { useParams } from "react-router-dom";
import { DATA } from "../../Db/myntradb";
import { useEffect, useState } from "react";
export default function Details() {
  const { productTitle } = useParams();
  const [product, setProduct] = useState();
  const decodedTitle = decodeURIComponent(productTitle);
  const Data = () => {
    for (const category in DATA) {
      for (const array in DATA[category]) {
        const filtered = DATA[category][array].find((item) => {
          return item.name
            .toUpperCase()
            .includes(`${decodedTitle.toUpperCase()}`);
        });
        return (
          <div className="md:mx-auto  flex md:max-w-[1200px] md:items-start md:gap-20 gap-10 w-full max-md:flex-col items-center  ">
            <img
              className="rounded-md object-cover max-[400px]:w-[calc(90%-10px)] object-center md:h-[500px] shadow-xl"
              src={filtered?.image}
              alt="Product"
            />
            <div className="flex md:items-start  gap-3 h-full flex-col px-10">
              <h1 className="font-semibold md:text-3xl text-2xl ">{filtered?.name}</h1>
              <h1 className="text-[rgba(0,0,0,0.5)] font-medium md:text-xl text-lg mt-3">
                <span className="md:text-2xl text-xl text-black font-bold">Price : </span>
                {""}
                {filtered?.price}
              </h1>
              <h1 className=" md:text-xl text-lg font-medium text-[rgba(0,0,0,0.4)]">
                <span className="md:text-2xl text-xl text-black font-bold">Brand : </span>{" "}
                {filtered?.brand}
              </h1>
              <h1 className="md:text-2xl text-xl text-black font-bold mt-2 ">
                Description :{" "}
              </h1>
              <p className="text-md  text-[rgba(0,0,0,0.4)]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                dolore vitae corporis aut perferendis quibusdam! Ab vero,
                consequatur at, dicta, repellat nisi adipisci odit quod
                doloribus ad suscipit quas eligendi!
              </p>
              <h1 className="md:text-2xl text-xl text-black font-bold my-2">Sizes : </h1>
              <div className="flex gap-4">
                <button className="px-3 py-1 rounded-md font-semibold bg-gray-100">
                  S
                </button>
                <button className="px-3 py-1 rounded-md font-semibold bg-gray-100">
                  M
                </button>
                <button className="px-3 py-1 rounded-md font-semibold bg-gray-100">
                  L
                </button>
                <button className="px-3 py-1 rounded-md font-semibold bg-gray-100">
                  XL
                </button>
              </div>
              <button className="text-white mt-3 max-w-[150px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</button>
            </div>
          </div>
        );
      }
    }
  };

  useEffect(() => {}, []);
  return <div className=" h-full mt-32 mb-20 ">{Data()}</div>;
}
