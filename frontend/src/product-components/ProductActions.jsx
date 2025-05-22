import { FiShoppingCart, FiHeart, FiShield } from "react-icons/fi";

const ProductActions = ({ 
  product, 
  quantity, 
  handleQuantityChange, 
  handleAddToCart, 
  handleRemoveFromCart, 
  handleBuyNow, 
  checkIfAddedInCart 
}) => {
  const isInCart = checkIfAddedInCart(product.id);
  
  return (
    <div className="space-y-6">
      {/* Quantity selector */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-700 font-medium">Quantity:</span>
        <div className="flex items-center">
          <button
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 w-9 h-9 flex items-center justify-center rounded-l-lg transition-colors"
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
            className="w-12 h-9 text-center border-y border-gray-100 focus:outline-none focus:border-gray-300"
          />
          <button
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 w-9 h-9 flex items-center justify-center rounded-r-lg transition-colors"
            onClick={() => handleQuantityChange(quantity + 1)}
            disabled={quantity >= 10}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Warranty indicator */}
      <div className="flex items-center space-x-2 text-sm bg-gray-50 rounded-lg p-3">
        <FiShield className="text-green-600" />
        <span className="text-gray-600">1-Year Warranty with 30-day free returns</span>
      </div>
      
      {/* Action buttons */}
      <div className="flex space-x-3">
        {!isInCart ? (
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-white border-2 border-pink-600 text-pink-600 py-3 px-6 rounded-xl font-semibold 
              hover:bg-pink-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <FiShoppingCart />
            Add to Cart
          </button>
        ) : (
          <button
            onClick={handleRemoveFromCart}
            className="flex-1 bg-white border-2 border-red-600 text-red-600 py-3 px-6 rounded-xl font-semibold 
              hover:bg-red-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <FiShoppingCart />
            Remove From Cart
          </button>
        )}
        <button
          onClick={handleBuyNow}
          className="flex-1 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 
            text-white py-3 px-6 rounded-xl font-semibold transition-all flex items-center justify-center shadow-md"
        >
          Buy Now
        </button>
        <button className="bg-gray-50 hover:bg-gray-100 p-3 rounded-xl transition-colors border border-gray-200">
          <FiHeart className={`text-xl ${isInCart ? 'text-pink-600' : 'text-gray-600'}`} />
        </button>
      </div>
    </div>
  );
};

export default ProductActions;