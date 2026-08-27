import React from "react";

const CategoryMenu = () => {
  return (
    <>
      <div className="ml-6">
        <h3 className="font-bold text-xl">Find the best Food near you</h3>

        <div className="my-5 flex gap-3 overflow-x-scroll overflow-smooth lg:overflow-x-hidden">
          <button className="px-3 py-2 bg-gray-200 rounded-lg  hover:bg-green-600 hover:text-white font-bold tex-center">
            All
          </button>
          <button className="px-3 py-2 bg-gray-200 rounded-lg  hover:bg-green-600 hover:text-white font-bold tex-center">
            Breakfast
          </button>
          <button className="px-3 py-2 bg-gray-200 rounded-lg  hover:bg-green-600 hover:text-white font-bold tex-center">
            Lunch
          </button>
          <button className="px-3 py-2 bg-gray-200 rounded-lg  hover:bg-green-600 hover:text-white font-bold tex-center">
            dinner
          </button>
          <button className="px-3 py-2 bg-gray-200 rounded-lg  hover:bg-green-600 hover:text-white font-bold tex-center">
            snack
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoryMenu;
