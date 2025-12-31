import React, { useState } from "react";
import { Drawer, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import axios from "axios";
import { toast } from "react-toastify";
import { useCart } from "../context/Cartcontext";

export default function CartDrawer({ open, onClose }) {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    totalPrice,
    orderId,
    setOrderId,
  } = useCart();

  const [placing, setPlacing] = useState(false);
  const [working, setWorking] = useState(false);

  const handleRemoveItem = async (item) => {
    if (!item || !item.name) {
      return;
    }

    // If no orderId or foodId, just remove from local cart
    if (!orderId || !item.foodId) {
      console.warn("Missing orderId or foodId:", { orderId, foodId: item.foodId, item });
      removeFromCart(item.name);
      toast.info("Item removed from cart");
      return;
    }

    try {
      setWorking(true);
      console.log("Deleting item:", { orderId, foodId: item.foodId, item });
      
      // Delete from database
      const response = await axios.delete("https://menucraftbackend-production.up.railway.app/orderitems/by-order-food", {
        data: { 
          OrderID: parseInt(orderId), 
          FoodID: parseInt(item.foodId) 
        },
      });
      console.log("Delete response:", response.data);
      
      // Remove from local cart
      removeFromCart(item.name);
      toast.success("Item removed from order");
    } catch (err) {
      console.error("Delete error:", err.response?.data || err.message);
      const message = err.response?.data?.message || "Failed to remove item";
      toast.error(message);
      // Still remove from local cart even if DB delete fails
      removeFromCart(item.name);
    } finally {
      setWorking(false);
    }
  };

  const handleDecrease = async (item) => {
    if (!orderId || !item.foodId) {
      decreaseQty(item.name);
      return;
    }

    const nextQty = item.qty - 1;

    try {
      setWorking(true);
      if (nextQty <= 0) {
        await axios.delete("https://menucraftbackend-production.up.railway.app/orderitems/by-order-food", {
          data: { OrderID: parseInt(orderId), FoodID: item.foodId },
        });
        removeFromCart(item.name);
      } else {
        await axios.put("https://menucraftbackend-production.up.railway.app/orderitems/by-order-food", {
          OrderID: parseInt(orderId),
          FoodID: item.foodId,
          Quantity: nextQty,
          Price: item.price,
        });
        decreaseQty(item.name);
      }
    } catch (err) {
      const message = err.response?.data?.message || "Failed to update item";
      toast.error(message);
    } finally {
      setWorking(false);
    }
  };

  const handleIncrease = async (item) => {
    if (!orderId || !item.foodId) {
      increaseQty(item.name);
      return;
    }

    try {
      setWorking(true);
      await axios.post("https://menucraftbackend-production.up.railway.app/orderitems/upsert", {
        OrderID: parseInt(orderId),
        FoodID: item.foodId,
        Quantity: 1,
        Price: item.price,
      });
      increaseQty(item.name);
    } catch (err) {
      const message = err.response?.data?.message || "Failed to update item";
      toast.error(message);
    } finally {
      setWorking(false);
    }
  };

  const handleClearCart = async () => {
    if (!orderId) {
      clearCart();
      setOrderId(null);
      return;
    }

    try {
      setWorking(true);
      // Delete all order items first
      await axios.delete(`https://menucraftbackend-production.up.railway.app/orderitems/by-order/${orderId}`);
      // Then delete the order itself
      await axios.delete(`https://menucraftbackend-production.up.railway.app/orders/${orderId}`);
      clearCart();
      setOrderId(null);
      toast.success("Cart cleared");
    } catch (err) {
      const message = err.response?.data?.message || "Failed to clear cart";
      toast.error(message);
    } finally {
      setWorking(false);
    }
  };

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    if (!orderId) {
      toast.error("No active order found");
      return;
    }

    try {
      setPlacing(true);

      await axios.post(`https://menucraftbackend-production.up.railway.app/orders/${orderId}/finalize`);

      toast.success("Order placed successfully");
      clearCart();
      setOrderId(null);
      onClose?.();
    } catch (err) {
      const message = err.response?.data?.message || "Failed to place order";
      toast.error(message);
    } finally {
      setPlacing(false);
    }
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div className="w-[360px] p-4 flex flex-col h-full bg-[#fffaf5]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">Your Order</h2>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

        {/* Items */}
        <div className="flex-1 space-y-3 overflow-y-auto">
          {cartItems.length === 0 && (
            <p className="text-gray-400 text-center mt-10">Cart is empty</p>
          )}

          {cartItems.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl p-3 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold uppercase">{item.name}</p>
                <p className="text-red-600 font-semibold">{item.price}</p>
              </div>

              <div className="flex items-center gap-2">
                <IconButton
                  size="small"
                  disabled={working}
                  onClick={() => handleDecrease(item)}
                >
                  <RemoveIcon />
                </IconButton>

                <span>{item.qty}</span>

                <IconButton
                  size="small"
                  disabled={working}
                  onClick={() => handleIncrease(item)}
                >
                  <AddIcon />
                </IconButton>

                <IconButton
                  size="small"
                  disabled={working}
                  onClick={() => handleRemoveItem(item)}
                >
                  <DeleteOutlineIcon className="text-red-500" />
                </IconButton>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t pt-4">
          <div className="flex justify-between mb-4">
            <span>Total:</span>
            <span className="text-red-600 font-bold text-lg">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <Button
            fullWidth
            className="!bg-gradient-to-r !from-red-600 !to-orange-400 !text-white !rounded-full !py-3"
            disabled={placing || cartItems.length === 0}
            onClick={handlePlaceOrder}
          >
            {placing ? "Placing..." : "Place Order"}
          </Button>

          <Button
            fullWidth
            variant="outlined"
            onClick={handleClearCart}
            disabled={working}
            className="!mt-2 !rounded-full"
          >
            Clear Cart
          </Button>
        </div>
      </div>
    </Drawer>
  );
}
