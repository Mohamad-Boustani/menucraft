import React from "react";
import { Drawer, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useCart } from "../context/Cartcontext";

export default function CartDrawer({ open, onClose }) {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();

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
                <IconButton size="small" onClick={() => decreaseQty(item.name)}>
                  <RemoveIcon />
                </IconButton>

                <span>{item.qty}</span>

                <IconButton size="small" onClick={() => increaseQty(item.name)}>
                  <AddIcon />
                </IconButton>

                <IconButton
                  size="small"
                  onClick={() => removeFromCart(item.name)}
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
          >
            Place Order
          </Button>

          <Button
            fullWidth
            variant="outlined"
            onClick={clearCart}
            className="!mt-2 !rounded-full"
          >
            Clear Cart
          </Button>
        </div>
      </div>
    </Drawer>
  );
}
