import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import beef_bur_fries_drink from "../assets/beef_bur_fries_drink.jpeg";
import chick_bur_with_fries_drink from "../assets/chick_bur_with_fries_drink.jpeg";
import doub_bur_with_fries_drink from "../assets/doub_bur_with_fries_drink.jpeg";
import hot_bur_fries_drink from "../assets/hot_bur_fries_drink.jpeg";
function Meals() {
  const smallmeals = [
    {
      name: "Burger Meal",
      price: 900000,
      image: beef_bur_fries_drink,
    },
    {
      name: "Chiken Burger Meal",
      price: 800000,
      image: chick_bur_with_fries_drink,
    },
    {
      name: "Double Chiken Burger Meal",
      price: 1250000,
      image: doub_bur_with_fries_drink,
    },
    {
      name: "Hot Chicken Wings Meal",
      price: 1000000,
      image: hot_bur_fries_drink,
    },
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {smallmeals.map((meal, index) => (
        <Card key={index} className="shadow-lg">
          <CardMedia component="img" height="200" image={meal.image} />
          <CardContent>
            <Typography variant="h6">{meal.name}</Typography>
            <Typography className="text-gray-600">
              {meal.price.toLocaleString()} LBP
            </Typography>

            <Link
              to="/mealcart"
              className="bg-red-500 inline-block mt-4 text-white text-center px-4 py-2 rounded"
            >
              Add
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Meals;
