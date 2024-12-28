import React from "react";
import { useCart } from "../context/ProductContext";

const Cart = () => {
  const { products, updateQuantity } = useCart();

  // Calculate total price based on quantity
  const totalPrice = products.reduce((sum, product) => {
    if (product.price && typeof product.price === "string" && product.price.includes("₹")) {
      const priceValue = Number(product.price.split("₹")[1]);
      return sum + priceValue * product.quantity;
    }
    return sum;
  }, 0);

  const handleQuantityChange = (id, type) => {
    updateQuantity(id, type);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start p-6 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Left: Product List */}
      <div className="w-full lg:w-2/3">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <div className="space-y-4">
        {products.map((product, index) => (
  <div
    key={product.id || index} // Fallback to index if id is missing
    className="flex items-center bg-white shadow rounded-lg p-4"
  >
    <img
      src={product.image}
      alt={product.name}
      className="w-24 h-24 object-cover rounded-md mr-4"
    />
    <div className="flex flex-col flex-grow">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <div className="flex items-center mt-2">
        <button
          onClick={() => handleQuantityChange(product.id, "decrement")}
          className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
          disabled={product.quantity <= 1}
        >
          -
        </button>
        <span className="mx-4">{product.quantity}</span>
        <button
          onClick={() => handleQuantityChange(product.id, "increment")}
          className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          +
        </button>
      </div>
      <span className="text-lg font-bold mt-2">
        ₹
        {product.price &&
        typeof product.price === "string" &&
        product.price.includes("₹")
          ? Number(product.price.split("₹")[1]) * product.quantity
          : 0}
      </span>
    </div>
  </div>
))}
        </div>
      </div>

      {/* Right: Total Price */}
      <div className="w-full lg:w-1/3 bg-gray-100 shadow rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">Total</span>
          <span className="text-lg font-bold">₹{totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
