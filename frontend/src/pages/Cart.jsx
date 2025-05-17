import React, { useState } from "react";
import { useCart } from "../context/ProductContext";
import { Trash2, ShoppingBag, Tag, CreditCard, ArrowRight, Truck, Check, X, Copy, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { products, updateQuantity, removeProduct, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [utrNumber, setUtrNumber] = useState("");
  const [utrSubmitted, setUtrSubmitted] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const navigate = useNavigate();

  // Parse price from string
  const parsePrice = (priceStr) => {
    if (priceStr && typeof priceStr === "string" && priceStr.includes("₹")) {
      return Number(priceStr.split("₹")[1]);
    }
    return 0;
  };

  // Calculate cart totals
  const subtotal = products.reduce((sum, product) => {
    return sum + parsePrice(product.price) * product.quantity;
  }, 0);

  const discount = couponApplied ? subtotal * 0.1 : 0; // 10% discount when coupon applied
  const shipping = subtotal > 1000 ? 0 : 99;
  const tax = subtotal * 0.05; // 5% tax
  const totalPrice = subtotal - discount + shipping + tax;

  const handleQuantityChange = (id, type) => {
    const product = products.find((p) => p.id === id);
    if (type === "decrement") {
      if (product.quantity === 1) {
        removeProduct(id); // remove if quantity is 1
      } else {
        updateQuantity(id, type);
      }
    } else {
      updateQuantity(id, type); // increment
    }
  };

  const handleRemoveProduct = (id) => {
    removeProduct(id);
  };

  const handleApplyCoupon = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (couponCode.toLowerCase() === "save10") {
        setCouponApplied(true);
      }
      setIsLoading(false);
    }, 800);
  };

  const handleCheckout = () => {
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    if (!orderPlaced) {
      setShowPaymentModal(false);
    }
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText("ecoglam@pay");
    // Show a toast or some indication that the UPI ID was copied
    alert("UPI ID copied to clipboard!");
  };

  const handleUtrSubmit = () => {
    if (utrNumber.trim().length < 8) {
      alert("Please enter a valid UTR number");
      return;
    }

    setUtrSubmitted(true);
    
    // Simulate processing payment
    setTimeout(() => {
      // Generate random order number
      const randomOrderNum = "ORD" + Math.floor(Math.random() * 1000000).toString().padStart(6, "0");
      setOrderNumber(randomOrderNum);
      setOrderPlaced(true);
      
      // Clear cart after successful order
      setTimeout(() => {
        clearCart();
      }, 5000);
    }, 1500);
  };

  // Format currency
  const formatCurrency = (amount) => {
    return "₹" + amount.toFixed(2);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
          <ShoppingBag className="mr-2" size={24} />
          Your Shopping Cart
          <span className="ml-2 text-gray-500 text-lg font-normal">
            ({products.length} {products.length === 1 ? "item" : "items"})
          </span>
        </h1>

        {products.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag size={64} className="text-gray-300" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              onClick={() => navigate("/ourproducts")}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Product List */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 bg-gray-50 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-800">Product Details</h2>
                </div>

                <div className="divide-y divide-gray-200">
                  {products.map((product, index) => (
                    <div key={product.id || index} className="p-6 flex flex-col sm:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-24 h-24 object-cover rounded-md bg-gray-100"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                          <p className="font-semibold text-gray-800">
                            {formatCurrency(parsePrice(product.price) * product.quantity)}
                          </p>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        <div className="flex justify-between items-end">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              onClick={() => handleQuantityChange(product.id, "decrement")}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 border-x border-gray-300">
                              {product.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(product.id, "increment")}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                              +
                            </button>
                          </div>
                          
                          <button
                            onClick={() => handleRemoveProduct(product.id)}
                            className="text-red-500 hover:text-red-700 transition-colors flex items-center text-sm"
                          >
                            <Trash2 size={16} className="mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Cart Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
                <div className="p-4 bg-gray-50">
                  <h2 className="text-lg font-semibold text-gray-800">Order Summary</h2>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">{formatCurrency(subtotal)}</span>
                  </div>
                  
                  {couponApplied && (
                    <div className="flex justify-between text-green-600 mb-4">
                      <span className="flex items-center">
                        <Tag size={16} className="mr-1" />
                        Discount (10%)
                      </span>
                      <span>-{formatCurrency(discount)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600 flex items-center">
                      <Truck size={16} className="mr-1" />
                      Shipping
                    </span>
                    <span className="font-medium">
                      {shipping === 0 ? "Free" : formatCurrency(shipping)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600">Tax (5%)</span>
                    <span className="font-medium">{formatCurrency(tax)}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-lg font-bold text-blue-600">{formatCurrency(totalPrice)}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">
                      Including {formatCurrency(tax)} in taxes
                    </p>
                  </div>
                  
                  {/* Coupon Code */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Tag size={16} className="inline mr-1" />
                      Apply Coupon Code
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter code"
                        className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                        disabled={couponApplied}
                      />
                      <button
                        onClick={handleApplyCoupon}
                        disabled={!couponCode || couponApplied || isLoading}
                        className={`px-4 py-2 bg-gray-800 text-white rounded-r-md hover:bg-gray-900 transition-colors ${
                          (!couponCode || couponApplied || isLoading) ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        {isLoading ? "..." : couponApplied ? "Applied" : "Apply"}
                      </button>
                    </div>
                    {couponApplied && (
                      <p className="text-xs text-green-600 mt-1">Coupon applied successfully!</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">Try "SAVE10" for 10% off</p>
                  </div>
                  
                  {/* Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <CreditCard size={18} className="mr-2" />
                    Proceed to Pay
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
              
              {/* Shipping/Security Info */}
              <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Truck size={20} className="text-gray-700 mr-2" />
                  <p className="text-sm text-gray-600">
                    Free shipping on orders over ₹1,000
                  </p>
                </div>
                <div className="flex items-center">
                  <CreditCard size={20} className="text-gray-700 mr-2" />
                  <p className="text-sm text-gray-600">
                    Secure payment processing
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-lg">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <CreditCard size={20} className="mr-2" />
                {orderPlaced ? "Order Confirmed" : "Complete Payment"}
              </h3>
              {!orderPlaced && (
                <button 
                  onClick={closePaymentModal}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {orderPlaced ? (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Payment Successful!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Your order has been placed successfully.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg text-left mb-4">
                    <p className="text-sm text-gray-500 mb-1">Order Number</p>
                    <p className="text-lg font-medium text-gray-900 mb-3">{orderNumber}</p>
                    <p className="text-sm text-gray-500 mb-1">Amount Paid</p>
                    <p className="text-lg font-medium text-gray-900">{formatCurrency(totalPrice)}</p>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">
                    A confirmation email has been sent to your registered email address.
                  </p>
                  <button
                    onClick={() => navigate("/ourproducts")}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div>
                  <div className="text-center mb-6">
                    <p className="text-gray-700 mb-2">Total Amount</p>
                    <p className="text-2xl font-bold text-blue-600">{formatCurrency(totalPrice)}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex justify-center mb-4">
                      {/* QR Code placeholder - in a real app, generate a real QR code */}
                      
                      <div className="w-48 h-48 bg-white p-2 border border-gray-200 rounded-lg flex items-center justify-center relative">
                       
                        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 text-center">
                          <div>
                           <img src="https://res.cloudinary.com/djbjfsshe/image/upload/v1747518431/qr_kd9ngs.jpg" alt="" />
                            <p className="text-sm font-medium text-gray-700">Scan to Pay</p>
                            <p className="text-xs text-gray-500">₹{totalPrice.toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-white p-3 rounded-md border border-gray-200">
                      <div>
                        <p className="text-sm font-medium text-gray-900">UPI ID: ecoglam@pay</p>
                        <p className="text-xs text-gray-500">Scan QR or pay to this UPI ID</p>
                      </div>
                      <button 
                        onClick={copyUpiId}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="utr" className="block text-sm font-medium text-gray-700 mb-2">
                      Enter UTR Number
                    </label>
                    <input
                      type="text"
                      id="utr"
                      value={utrNumber}
                      onChange={(e) => setUtrNumber(e.target.value)}
                      placeholder="UTR / Transaction Reference Number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                      disabled={utrSubmitted}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      UTR number can be found in your payment app after successful transaction
                    </p>
                  </div>

                  <button
                    onClick={handleUtrSubmit}
                    disabled={utrSubmitted || !utrNumber.trim()}
                    className={`w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center
                      ${(utrSubmitted || !utrNumber.trim()) ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {utrSubmitted ? (
                      <>
                        <span className="mr-2">Verifying Payment</span>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </>
                    ) : (
                      "Confirm Payment"
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;