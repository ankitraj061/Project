import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { X } from "lucide-react";

const MobileMenu = ({
  navLinks,
  categories,
  isLoggedIn,
  handleLogout,
  handleUserClick,
  cartCount,
  handleClose, // <-- Add this
}) => (
  <div className="lg:hidden bg-white border-t border-gray-200 shadow-md fixed bottom-0 left-0 right-0 z-50 max-h-[80vh] overflow-y-auto">
    <div className="px-5 py-4 space-y-3">
      {/* Close Button */}
      <div className="flex justify-end">
        <button onClick={handleClose} aria-label="Close Menu">
          <X className="h-6 w-6 text-gray-700 hover:text-red-600 transition-colors duration-200" />
        </button>
      </div>

      {/* Main Navigation Links */}
      {navLinks.map((item) =>
        item.label === "Categories" ? (
          <div key={item.label} className="py-1">
            <div className="flex items-center justify-between mb-1">
              <Link 
                to={item.link} 
                className="text-gray-800 font-semibold text-lg hover:text-pink-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            </div>
            <div className="ml-4 grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <Link
                  key={category.label}
                  to={category.link}
                  className="text-gray-600 text-sm hover:text-pink-600 py-1.5 transition-colors duration-200"
                >
                  {category.label}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link
            key={item.label}
            to={item.link}
            className="block text-gray-800 font-medium text-lg hover:text-pink-600 py-2 transition-colors duration-200"
          >
            {item.label}
          </Link>
        )
      )}
      
      {/* Quiz CTA */}
      <div className="py-3">
        <Link to="/quiz">
          <button className="w-full bg-pink-600 text-white px-4 py-3 rounded-lg hover:bg-pink-700 font-medium text-lg shadow-sm transition-colors duration-200">
            Know Your Skin
          </button>
        </Link>
      </div>
      
      {/* Authentication and Cart */}
      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
        {isLoggedIn ? (
          <button 
            onClick={handleLogout} 
            className="text-red-600 font-medium py-2 hover:text-red-700 transition-colors duration-200"
          >
            Logout
          </button>
        ) : (
          <button 
            onClick={handleUserClick} 
            className="text-gray-800 font-medium py-2 hover:text-pink-600 transition-colors duration-200"
          >
            Login / Signup
          </button>
        )}
        
        <Link 
          to="/cart" 
          className="flex items-center gap-2 py-2 text-gray-800 hover:text-pink-600 transition-colors duration-200"
        >
          <div className="relative">
            <FiShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span className="font-medium">Cart</span>
        </Link>
      </div>
    </div>
  </div>
);

export default MobileMenu;
