import { useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isFormOpen, setIsFormOpen] = useState(false); // Form modal state
  const [isLoginForm, setIsLoginForm] = useState(true); // Toggle between login and signup

  const navLinks = [
    { link: "/ourproducts", label: "Our Products" },
    { link: "/reviews", label: "Reviews" },
    { link: "/trackorder", label: "Track Order" },
    { link: "/categories", label: "Categories" },
  ];

  const categories = [
    { label: "oilyskin", link: "/categories/Oily Skin" },
    { label: "Fashion", link: "/categories/fashion" },
    { label: "Home & Kitchen", link: "/categories/home-kitchen" },
    { label: "Books", link: "/categories/books" },
  ];

  const handleUserClick = () => {
    setIsFormOpen(!isFormOpen); // Toggle the form/modal visibility
  };

  const handleFormToggle = () => {
    setIsLoginForm(!isLoginForm); // Toggle between login and signup
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-serif text-emerald-600">EcoGlam</h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:items-center space-x-2">
            {navLinks.map((navItem) =>
              navItem.label === "Categories" ? (
                <div className="relative group" key={navItem.link}>
                  <Link
                    to={navItem.link}
                    className="px-4 py-2 hover:text-pink-600"
                  >
                    {navItem.label}
                  </Link>
                  {/* Dropdown */}
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {categories.map((category) => (
                      <Link
                        key={category.link}
                        to={category.link}
                        className="block px-4 py-2 hover:bg-pink-100"
                      >
                        {category.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={navItem.link}
                  to={navItem.link}
                  className="px-4 py-2 hover:text-pink-600"
                >
                  {navItem.label}
                </Link>
              )
            )}
            <button className="ml-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700">
              Take the quiz
            </button>
            <button
              onClick={handleUserClick} // Open/close the user form/modal
              className="ml-2 text-black px-4 py-2 rounded-lg"
            >
              <FaRegUser />
            </button>
            <button>
              <FiShoppingCart />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* User Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">{isLoginForm ? "Login" : "Sign Up"}</h2>

            {/* Toggle between Login and Signup */}
            <button
              onClick={handleFormToggle}
              className="text-sm text-blue-600 mb-4 inline-block"
            >
              {isLoginForm ? "Don't have an account? Sign up" : "Already have an account? Log in"}
            </button>

            {/* Form Content */}
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              {!isLoginForm && (
                <div className="mb-4">
                  <label className="block text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              )}
              <button type="submit" className="w-full bg-pink-600 text-white p-2 rounded-lg hover:bg-pink-700">
                {isLoginForm ? "Login" : "Sign Up"}
              </button>
            </form>
            <button
              onClick={handleUserClick}
              className="absolute top-2 right-2 text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
