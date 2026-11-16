import React from 'react'
import { useParams } from 'react-router'

const products = [
    { id: 1, name: 'Pizza', price: 200 },
    { id: 2, name: 'Burger', price: 120 },
    { id: 3, name: 'Pasta', price: 180 }
  ];

function FoodCard() {
    const {id} = useParams();
    const food = products.find(item=>item.id===Number(id))
  return (
    <div>FoodCard : 
        {food.name} : {food.price}
         </div>
  )
}

export default FoodCard