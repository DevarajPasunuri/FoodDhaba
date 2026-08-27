import React from "react";
import { IoStar } from "react-icons/io5";

const FoodCart = ({id, name, price, desc, rating, img}) => {
  return (
    <>
      <div className="font-bold w-[250px] bg-white flex-col flex p-5 rounded-lg gap-2 ">
        <img
          src={img}
          alt=""
          className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
        />
        <div className="text-sm flex justify-between">
          <h2>{name}</h2>
          <span className="text-green-500"> ₹{price}</span>
        </div>
        <p className="text-sm font-normal">
         {desc}
        </p>
        <div className="flex justify-between">
          <span className="flex justify-center items-center gap-1">
            {rating} <IoStar  className="mr-1 text-yellow-400"/>
          </span>
          <button className="p-1 text-white text-sm bg-green-500 hover:bg-green-600 rounded">Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default FoodCart;
