import React, { useEffect, useState } from "react";
import noimage from "../assets/Image Not found.svg";
import { useNavigate } from "react-router-dom";
import { AddToCart, Remove } from "../Store/CartSlicer";
import { useDispatch, useSelector } from "react-redux";

function Cards({ filtered, items }) {
  const navigate = useNavigate();
  

  return (
    <div className="w-full flex flex-col items-center md:max-w-[280px] max-w-[250px] bg-white border border-gray-200 rounded-lg shadow relative ">
      <div className="flex justify-center cursor-pointer w-full h-72">
        <img
          id="CardImg"
          className="rounded-t-lg object-cover  object-top   h-full w-full "
          src={filtered?.image || items.image}
          alt="product image"
          onClick={() => navigate(`/Details/${filtered?.id || items.id}`)}
        />
      </div>
      <div className="px-2 pb-5 md:px-5 mb-8  mt-4 cursor-pointer ">
        <h5
          className="md:text-xl text-lg font-semibold tracking-tight text-center text-gray-900 dark:text-white"
          onClick={() => navigate(`/Details/${filtered?.id || items.id}`)}
        >
          {filtered?.name || items.name}
        </h5>
      </div>
      <div className="flex w-full mx-6 justify-around items-center absolute bottom-2  text-gray-400 text-lg font-medium">
        <span>{filtered?.brand||items?.brand}</span>
        <span className="md:text-2xl text-xl font-bold text-gray-900 dark:text-white">
          {filtered?.price || items.price}
        </span>
      </div>
      <div className="flex items-center justify-start w-full   ">
        
        
      </div>
    </div>
  );
}

export default Cards;
