import React from "react";
import { useParams } from "react-router-dom";
import DATA from "../../Db/datadb";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, Remove, Decrease } from "../../Store/CartSlicer";
import { toggleModal } from "../../Store/userSlicer";
import { MdBrowserUpdated } from "react-icons/md";
import SignupOrInModal from "../../Components/SignupOrInModal";
export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  const { loggedIn } = useSelector((state) => state.userDetails);
  // const { showModal } = useSelector((state) => state.userDetails);
 const [showAccountModal,setShowAccountModal] =useState(false)
  const cartedproducts = products.filter((item) => item.id == id);
  console.log(cartedproducts.length);
  const [quantity, setQuantity] = useState(cartedproducts.length);
  const [sizeSelected, setSizeSelected] = useState(false);
  const [Add, setAdd] = useState(
    JSON.parse(localStorage.getItem("boolean")) || false
  );
  const [size, setSize] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  localStorage.setItem("mycart", JSON.stringify(products));
  localStorage.setItem("boolean", JSON.stringify(Add));

  const handleSize = (e) => {
    setSize(e.target.innerHTML);
    setSizeSelected(true);
  };
  const handleDecrease = (data) => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
      dispatch(Decrease(data));
    } else {
      return;
    }
  };
  // console.log(showModal)F
  const handleAddtoCart = (data) => {
    if (sizeSelected&&loggedIn) {
      setAdd(true);
      dispatch(AddToCart(data));
    } else if(!sizeSelected) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 1500);
    } else if(sizeSelected&&!loggedIn){
      setShowAccountModal(true)

    }
  };
  const handleIncrease = (data) => {
    if (loggedIn) {
      if (sizeSelected) {
        setQuantity((prev) => prev + 1);
        dispatch(AddToCart(data));
      } else {
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 1500);
      }
    } else {
      setShowAccountModal(true)
      
    }
  };
  useEffect(() => {}, [handleIncrease]);
  useEffect(() => {
    const found = products.find((item) => item.id == id);
    if (found) {
      setAdd(true);
    } else {
      setAdd(false);
    }
    setSizeSelected(false);
  }, [quantity]);

  useEffect(() => {
    setQuantity(cartedproducts.length);
  }, [products]);

  //    console.log(filt)

  const Data = () => {
    const data = Object.values(DATA)
      .flatMap((category) => Object.values(category))
      .flatMap((subcategory) => Object.values(subcategory));
    const product = data.find((item) => {
      return item.id == id;
    });
    const updated = { ...product };
    updated.size = size;

    return (
      <div className="md:mx-auto  flex md:max-w-[1200px] md:items-start md:gap-20 gap-10 w-full max-md:flex-col items-center  ">
        <img
          className="rounded-md object-cover max-[400px]:w-[calc(90%-10px)] object-center md:h-[500px] shadow-xl"
          src={updated?.image}
          alt="Product"
        />
        <div className="flex md:items-start  gap-3 h-full flex-col px-10">
          <h1 className="font-semibold md:text-3xl text-2xl ">
            {updated?.name}
          </h1>
          <h1 className="text-[rgba(0,0,0,0.5)] font-medium md:text-xl text-lg mt-3">
            <span className="md:text-2xl text-xl text-black font-bold">
              Price :{" "}
            </span>
            {""}
            {updated?.price}
          </h1>
          <h1 className=" md:text-xl text-lg font-medium text-[rgba(0,0,0,0.4)]">
            <span className="md:text-2xl text-xl text-black font-bold">
              Brand :{" "}
            </span>{" "}
            {updated?.brand}
          </h1>
          <h1 className="md:text-2xl text-xl text-black font-bold mt-2 ">
            Description :{" "}
          </h1>
          <p className="text-md  text-[rgba(0,0,0,0.4)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            dolore vitae corporis aut perferendis quibusdam! Ab vero,
            consequatur at, dicta, repellat nisi adipisci odit quod doloribus ad
            suscipit quas eligendi!
          </p>
          <h1 className="md:text-2xl text-xl text-black font-bold my-2 ">
            Sizes :{" "}
          </h1>
          <div className="flex gap-4 relative">
          {
              updated?.name?.includes("Shoe")||updated?.name?.includes("Loafer")||updated?.name?.includes("Sneaker")?(<div className="flex gap-4">
                <button
              onClick={(e) => {
                handleSize(e);
              }}
              className="px-3 py-1 rounded-md font-semibold focus:bg-blue-700 focus:text-white bg-gray-100"
            >
              8
            </button>
            <button
              onClick={(e) => {
                handleSize(e);
              }}
              className="px-3 py-1 rounded-md font-semibold focus:bg-blue-700 focus:text-white bg-gray-100"
            >
              9
            </button>
            <button
              onClick={(e) => {
                handleSize(e);
              }}
              className="px-3 py-1 rounded-md font-semibold focus:bg-blue-700 focus:text-white bg-gray-100"
            >
              10
            </button>
            <button
              onClick={(e) => {
                handleSize(e);
              }}
              className="px-3 py-1 rounded-md font-semibold focus:bg-blue-700 focus:text-white bg-gray-100"
            >
              11
            </button>
              </div>):(<div className="flex gap-4">
                <button
              onClick={(e) => {
                handleSize(e);
              }}
              className="px-3 py-1 rounded-md font-semibold focus:bg-blue-700 focus:text-white bg-gray-100"
            >
              S
            </button>
            <button
              onClick={(e) => {
                handleSize(e);
              }}
              className="px-3 py-1 rounded-md font-semibold focus:bg-blue-700 focus:text-white bg-gray-100"
            >
              M
            </button>
            <button
              onClick={(e) => {
                handleSize(e);
              }}
              className="px-3 py-1 rounded-md font-semibold focus:bg-blue-700 focus:text-white bg-gray-100"
            >
              L
            </button>
            <button
              onClick={(e) => {
                handleSize(e);
              }}
              className="px-3 py-1 rounded-md font-semibold focus:bg-blue-700 focus:text-white bg-gray-100"
            >
              XL
            </button>
              </div>)
            }
            <span
              className={`px-4 py-1 border-2 rounded-md bg-white absolute max-md:top-9 max-md:right-0 ${
                showMessage ? "block" : "hidden"
              } `}
            >
              Please Select the size first{" "}
            </span>
          </div>
          <h1 className="md:text-2xl text-xl text-black font-bold my-2">
            Quantity :{" "}
          </h1>
          <div className="flex gap-1">
            <button
              onClick={() => handleDecrease(updated)}
              className="text-xl  bg-slate-200  rounded-sm w-[30px] active:bg-slate-300"
            >
              -
            </button>
            <span className="bg-gray-300 w-[50px] text-center rounded-sm text-lg ">
              {quantity}
            </span>
            <button
              onClick={() => handleIncrease(updated)}
              className="text-xl bg-slate-200 rounded-sm  w-[30px] active:bg-slate-300"
            >
              +
            </button>
          </div>
          {Add ? (
            <button
              onClick={() => {
                dispatch(Remove(updated));
                setAdd(false);
              }}
              className="text-white mt-3 max-w-[150px] bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => {
                handleAddtoCart(updated);
              }}
              className="text-white mt-3 max-w-[150px] bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Add to cart
            </button>
          )}
        </div>
        {showAccountModal && (
        <SignupOrInModal setShowAccountModal={setShowAccountModal} />
      )}
      </div>
    );
  };
  useEffect(() => {
    Data();
  }, [id]);

  return <div className=" h-full mt-32 mb-20 ">{Data()}</div>;
}
