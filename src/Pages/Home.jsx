import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import CategoryMenu from "../Components/Category/CategoryMenu";


import FoodItems from "../Components/FoodItems/FoodItems";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <FoodItems/>
      
    </div>
  );
};

export default Home;
