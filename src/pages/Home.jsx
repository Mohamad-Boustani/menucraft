import React from 'react'
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import classicburger from "../assets/classicburger.jpeg";
import drinks from "../assets/drinks.jpeg";
import doublecheeseb from "../assets/doublecheeseb.jpeg";
import cheesedeluxe from "../assets/cheesedeluxe.jpeg";
import baconburger from "../assets/baconburger.jpeg";
import double_beef_bur from "../assets/double_beef_bur.jpeg";

function Home() {

  const smallmeals = [
    {
      name: "classic Burger",
      price: 450000,
      image: classicburger,
    },
     {
      name: "Deluxe Cheese Burger",
      price: 500000,
      image: cheesedeluxe,
    },
    {
      name: "burger with extra beef",
      price: 350000,
      image: double_beef_bur,
    },
    {
      name: "Doube Cheese Burger",
      price: 600000,
      image: doublecheeseb,
    },
    {
      name: "Bacon Quarter Pounder with Cheese",
      price: 700000,
      image: baconburger,
    },
    
    {
      name: "Soft Drink",
      price: 100000,
      image: drinks,
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

export default Home