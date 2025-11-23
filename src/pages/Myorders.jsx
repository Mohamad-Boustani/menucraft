import React, { useEffect, useState } from "react";
import { Card, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Myorders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("orders");
      setOrders(raw ? JSON.parse(raw) : []);
    } catch {
      setOrders([]);
    }
  }, []);

  const total = orders.reduce((s, it) => s + (it.price || 0), 0);

  if (!orders || orders.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">My Orders</h2>
        <p className="text-gray-600">You have no orders yet.</p>
      </div>
    );
  }

  return (
    <div className="p-6 grid gap-4">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      {orders.map((o, idx) => (
        <Card key={idx} className="p-4">
          <div className="flex items-center gap-4">
            <img
              src={o.image}
              alt={o.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div>
              <Typography variant="h6">{o.name}</Typography>
              <Typography className="text-gray-600">
                {o.price.toLocaleString()} LBP
              </Typography>
            </div>
          </div>
        </Card>
      ))}
      <div className="mt-4 flex justify-between font-bold max-w-xl">
        <span>Total</span>
        <span>{total.toLocaleString()} LBP</span>
      </div>

      <div className="flex gap-2 mt-4">
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            localStorage.removeItem("orders");
            setOrders([]);
          }}
        >
          Clear Orders
        </Button>
        <Link to="/home" className="flex gap-2 mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Back to Home
        </Link>
      </div>
    </div>
  );
}