import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { useCart } from "../context/Cartcontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Section = ({ id, title, items, onAdd }) => (
  <div id={id} className="mb-12">
    <h2 className="text-xl text-black  font-bold flex items-center gap-2 mb-6">
      <LocalFireDepartmentIcon className="text-orange-500" /> {title}
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-start bg-white p-4 rounded-xl shadow-sm border"
        >
          <div>
            <h3 className="font-semibold text-gray-900">{item.name}</h3>
            {item.desc && (
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            )}
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="font-bold text-orange-600">{item.priceLabel}</span>
            <Button
              variant="contained"
              size="small"
              className="!bg-orange-500 !rounded-full !text-xs"
              onClick={() =>
                onAdd({
                  foodId: item.id,
                  name: item.name,
                  price: item.price,
                })
              }
            >
              ADD
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function MenuPage() {
  const { addToCart, orderId, setOrderId } = useCart();
  const navigate = useNavigate();
  const [foodItems, setFoodItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const ensureOrderId = async (userId) => {
    if (orderId) return orderId;

    const today = new Date().toISOString().split("T")[0];

    const response = await axios.post("http://localhost:5000/orders", {
      OrderDate: today,
      TotalPrice: 0,
      UserID: userId,
    });

    const newOrderId = String(response.data.id);
    setOrderId(newOrderId);
    return newOrderId;
  };

  const getAllFood = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/food");
      if (response.status === 200) {
        const groupedByCategory = {};
        response.data.forEach((item) => {
          const category = item.Category.toLowerCase();
          if (!groupedByCategory[category]) {
            groupedByCategory[category] = [];
          }
          groupedByCategory[category].push({
            id: item.FoodID,
            name: item.FoodName,
            desc: item.Description,
            price: Number(item.Price),
            priceLabel: `$${item.Price}`,
          });
        });
        setFoodItems(groupedByCategory);
        setError(null);
      }
    } catch (err) {
      const errorMsg = err.response.data.message || "Failed to load menu";
      setError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllFood();
  }, []);

  const categoriesInOrder = ["burger", "side", "drink", "combo"];
  const categoriesToDisplay = categoriesInOrder.filter(
    (cat) => foodItems[cat]
  );

  const handleAddToCart = async (item) => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      toast.error("Please login to add items to cart");
      navigate("/login");
      return;
    }

    const user = JSON.parse(storedUser);

    try {
      const activeOrderId = await ensureOrderId(user.UserID);

      addToCart(item);

      await axios.post("http://localhost:5000/orderitems/upsert", {
        OrderID: activeOrderId,
        FoodID: item.foodId,
        Quantity: 1,
        Price: item.price,
      });

      toast.success(`${item.name} added to cart`);
    } catch (err) {
      const message = err.response?.data?.message || "Failed to add item";
      toast.error(message);
    }
  };

  if (loading) {
    return (
      <div className="bg-[#fffaf5] py-20 px-4 min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading menu...</p>
      </div>
    );
  }

  if (error || categoriesToDisplay.length === 0) {
    return (
      <div className="bg-[#fffaf5] py-20 px-4 min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">
          {error || "No menu items found"}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#fffaf5] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl text-black font-extrabold tracking-wider">
            OUR <span className="text-orange-500">MENU</span>
          </h1>
          <p className="text-gray-500 mt-3">
            Fresh ingredients, bold flavors, and recipes cooked with passion
          </p>
        </div>

        {categoriesToDisplay.map((category) => (
          <Section
            key={category}
            id={category}
            title={category.toUpperCase()}
            items={foodItems[category]}
            onAdd={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
