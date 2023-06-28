import React from "react";
import DATA from "../Db/datadb";
import { useParams } from "react-router-dom";
import Cards from "../Components/Cards";
import notfound from "../assets/Sorry! we are still adding products.gif"
function Resultpage() {
  const { query } = useParams();
  const products = Object.values(DATA)
    .flatMap((category) => Object.values(category))
    .flatMap((subcategory) => Object.values(subcategory))
    .flat();
  const queryProducts = products.filter((item) => {
    const processedQuery = query.replace(/[-\ s]/g,"")
    const processedName = item.name.replace(/[-\ s]/g,"")
    const processedBrand = item.brand.replace(/[-\ s]/g,"")
    return (
      processedName.toUpperCase().includes(processedQuery.toUpperCase())||processedBrand.toUpperCase().includes(processedQuery.toUpperCase())
    );
  });
  
  return (
    <div className="  mt-36 w-full">
      {queryProducts.length>0?(<><h1 className="mb-5 text-lg font-semibold text-gray-500 ml-12">Showing {queryProducts.length} {queryProducts.length>1?"results":"result"} for "{query}" </h1>
      <div className="  mb-10 flex  justify-center gap-5 flex-wrap  ">
        {queryProducts.map((item,index)=>{
          return (<Cards key={index} filtered={item}/>)
        })}
      </div></>):(<div className="w-full h-full flex mb-2 justify-center items-center md:-mt-20 overflow-hidden" >
        <img className="md:h-[40%] md:w-[40%] object-cover object-center " src={notfound} alt="" />
      </div>)}
    </div>
  );
}

export default Resultpage;
