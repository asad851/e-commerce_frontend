import React from "react";
import DATA from "../Db/datadb";
import Cards from "../Components/Cards";
import { useParams } from "react-router-dom";

function Collections() {
  const { Productsby, endpoint } = useParams();
  function displayCards() {
    if (Productsby === "Category") {
      const arr = Object.values(DATA).find((item) => item[endpoint]);
      const updated = arr[endpoint];
      // console.log(updated)
      const newarr = updated.map((item) => {
        return item;
      });
      return (
        <div
          className="h-full w-full xl:max-w-[1180px] mx-auto flex flex-wrap gap-5 justify-center 
            xl:justify-start"
        >
          {newarr.map((items, index) => {
            return <Cards key={index} items={items} />;
          })}
        </div>
      );
    } else if (Productsby === "Brand") {
      const arr = Object.values(DATA)
        .flatMap((Category) => Object.values(Category))
        .flatMap((subcateg) => Object.values(subcateg));
      const updated = arr.filter((item) => item.brand === endpoint);
      const newarr = updated.map((item) => console.log(item));
      return (
        <div
          className="h-full w-full xl:max-w-[1180px] mx-auto flex flex-wrap gap-5 justify-center 
            xl:justify-start"
        >
          {newarr.map((items, index) => {
            return <Cards key={index} items={items} />;
          })}
        </div>
      );
    }
  }

  const arr = Object.values(DATA)
    .flatMap((Category) => Object.values(Category))
    .flatMap((subcateg) => Object.values(subcateg));
  const updated = arr.map((item) => item.brand);
  console.log(updated);
  return (
    <div className="w-full flex mt-32 mb-20 justify-center overflow-hidden ">
      {displayCards()}
    </div>
  );
}

export default Collections;
