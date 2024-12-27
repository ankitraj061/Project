import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  const navLinks = [
    { link: "/about", label: "Our Products" },
    { link: "/schedule", label: "Reviews" },
    { link: "/prizes", label: "Track Order" },
    { link: "/categories", label: "Categories" },
  ];

  const categories = [
    { label: "Electronics", link: "/categories/electronics" },
    { label: "Fashion", link: "/categories/fashion" },
    { label: "Home & Kitchen", link: "/categories/home-kitchen" },
    { label: "Books", link: "/categories/books" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-serif text-emerald-600">EcoGlam</h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:items-center space-x-6">
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
              Take the Quiz
            </button>
          </div>

          {/* Login, Sign Up, and Cart */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-black px-4 py-2 rounded-lg hover:text-emerald-600">
              <FaRegUser className="inline mr-2" />
              Login
            </button>
            <button className="text-white bg-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-700">
              Sign Up
            </button>
            <button className="text-gray-700 hover:text-emerald-600">
              <FiShoppingCart className="text-2xl" />
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden space-y-2 mt-4">
            {navLinks.map((navItem) => (
              <Link
                key={navItem.link}
                to={navItem.link}
                className="block px-4 py-2 hover:bg-gray-100 rounded-lg"
              >
                {navItem.label}
              </Link>
            ))}
            <div className="space-y-2">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg">
                Login
              </button>
              <button className="block w-full text-left px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
