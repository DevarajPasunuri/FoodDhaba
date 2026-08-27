import React from 'react'
import FoodCart from '../FoodCart/FoodCart';
import FoodData from '../FoodData/FoodData';

const FoodItems = () => {
  return (
   <>
  {
    FoodData.map((food)=> {
      return (
        <FoodCart
        key={food.id}
        id={food.id}
        name={food.name}
        price={food.price}
        desc={food.desc}
        rating={food.rating}
        img={food.img}
        />
      )
    })
  }
   </>
  )
}

export default FoodItems;