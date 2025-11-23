import React, { useState, useEffect } from 'react'
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export default function Mealcard() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedMeal = location.state?.meal || null;

  const [orders, setOrders] = useState(() => {
    try {
      const raw = localStorage.getItem('orders');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  if (!selectedMeal) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">No meal selected</h2>
        <p className="text-gray-600">Please select a meal from the Home page.</p>
      </div>
    );
  }

  return (
    <div className="p-6 flex justify-center">
      <Card className="shadow-xl max-w-md">
        <CardMedia component="img" height="240" image={selectedMeal.image} alt={selectedMeal.name} />
        <CardContent>
          <Typography variant="h5">{selectedMeal.name}</Typography>
          <Typography className="text-gray-600 mb-4">
            {selectedMeal.price.toLocaleString()} LBP
          </Typography>

          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={() => {
              setOrders((prev) => [...prev, selectedMeal]);
              navigate('/myorders');
            }}
          >
            Add to My Orders
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}