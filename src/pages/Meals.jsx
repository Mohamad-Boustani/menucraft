import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import beef_bur_fries_drink from "../assets/beef_bur_fries_drink.jpeg";
import chick_bur_with_fries_drink from "../assets/chick_bur_with_fries_drink.jpeg";
import doub_bur_with_fries_drink from "../assets/doub_bur_with_fries_drink.jpeg";
import hot_bur_fries_drink from "../assets/hot_bur_fries_drink.jpeg";
function Meals() {
  const navigate = useNavigate();
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

            <Button
              variant="contained"
              color="error"
              fullWidth
              className="mt-4"
              onClick={() => {
                try {
                  const raw = localStorage.getItem('orders');
                  const arr = raw ? JSON.parse(raw) : [];
                  const exists = arr.some((it) => it.name === meal.name && it.price === meal.price);
                  if (!exists) arr.push(meal);
                  localStorage.setItem('orders', JSON.stringify(arr));
                } catch {
                  localStorage.setItem('orders', JSON.stringify([meal]));
                }
                navigate('/mealcart');
              }}
            >
              Add
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Meals;
