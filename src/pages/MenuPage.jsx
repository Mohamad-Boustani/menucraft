import React from "react";
import { Button, Chip } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const menuData = {
  burgers: [
    { name: "Classic Cheeseburger", desc: "Juicy beef patty, cheddar cheese, lettuce, tomato, pickles, onion & sauce", price: "$9.99" },
    { name: "Spicy Jalapeño", desc: "Pepper jack cheese, jalapeños, spicy mayo, crispy onion", price: "$11.99" },
    { name: "BBQ Ranch Burger", desc: "BBQ sauce, bacon, ranch dressing, crispy onion rings", price: "$12.99" },
    { name: "Bacon Deluxe", desc: "Smoked bacon, cheddar, caramelized onions, special sauce", price: "$13.99" },
    { name: "Mushroom Swiss", desc: "Sautéed mushrooms, Swiss cheese, garlic aioli", price: "$12.49" },
    { name: "Veggie Garden", desc: "Grilled veggie patty, avocado, lettuce, tomato", price: "$10.99" }
  ],
  sides: [
    { name: "Crispy Fries", price: "$3.99" },
    { name: "Onion Rings", price: "$4.99" },
    { name: "Chicken Wings", price: "$8.99" },
    { name: "Loaded Cheese Fries", price: "$6.99" },
    { name: "Coleslaw", price: "$2.99" },
    { name: "Mozzarella Sticks", price: "$5.99" }
  ],
  drinks: [
    { name: "Soft Drinks", price: "$2.49" },
    { name: "Fresh Lemonade", price: "$3.49" },
    { name: "Milkshakes", price: "$5.99" },
    { name: "Iced Tea", price: "$2.49" }
  ],
  combos: [
    { name: "Classic Combo", price: "$14.99" },
    { name: "Family Feast", price: "$29.99" },
    { name: "Deluxe Combo", price: "$19.99" },
    { name: "Kids Meal", price: "$7.99" }
  ]
};

const Section = ({ title, items }) => (
  <div className="mb-12">
    <h2 className="text-xl text-black  font-bold flex items-center gap-2 mb-6">
      <LocalFireDepartmentIcon className="text-orange-500" /> {title}
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-start bg-white p-4 rounded-xl shadow-sm border"
        >
          <div>
            <h3 className="font-semibold text-gray-900">{item.name}</h3>
            {item.desc && (
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            )}
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="font-bold text-orange-600">{item.price}</span>
            <Button
              variant="contained"
              size="small"
              className="!bg-orange-500 !rounded-full !text-xs"
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

        <Section title="BURGERS" items={menuData.burgers} />
        <Section title="SIDES" items={menuData.sides} />
        <Section title="DRINKS" items={menuData.drinks} />
        <Section title="COMBOS" items={menuData.combos} />
      </div>
    </div>
  );
}
