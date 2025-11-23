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

  // If no selected meal and no orders, go back to Home
  useEffect(() => {
    if (!selectedMeal && orders.length === 0) {
      navigate('/home');
    }
  }, [selectedMeal, orders, navigate]);

  const total = orders.reduce((s, it) => s + (it.price || 0), 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Cart</h2>

      {selectedMeal && (
        <div className="p-6 flex justify-center mb-6">
          <Card className="shadow-xl max-w-md w-full">
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
      )}

      <div className="max-w-xl mx-auto">
        {orders.length === 0 ? (
          <p className="text-gray-600">No items in your cart yet.</p>
        ) : (
          <div>
            <ul>
              {orders.map((o, i) => (
                <li key={i} className="flex justify-between py-2 border-b">
                  <span>{o.name}</span>
                  <span>{o.price.toLocaleString()} LBP</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex justify-between font-bold">
              <span>Total</span>
              <span>{total.toLocaleString()} LBP</span>
            </div>

            <div className="mt-4">
              <Button variant="contained" color="primary" fullWidth onClick={() => navigate('/myorders')}>
                Proceed To My Orders
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}