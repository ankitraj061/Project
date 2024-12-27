import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signup, login } from "../api"; // Import your API functions
import { X } from "lucide-react";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [isLoginForm, setIsLoginForm] = useState(true); // Toggle between Login and Signup
  const [formData, setFormData] = useState({ name: "", email: "", password: "" }); // Form data

  const items = [
    { navLink: "/haircare", label: "HairCare", id: 1 },
    { navLink: "/why-ecoglam", label: "Why EcoGlam", id: 3 },
    { navLink: "/ingredients", label: "Ingredients", id: 4 },
  ];

  const notifySuccess = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  const notifyError = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (isLoginForm) {
        response = await login({ email: formData.email, password: formData.password });
      } else {
        response = await signup(formData);
      }

      if (response.success) {
        notifySuccess(isLoginForm ? "Logged in successfully!" : "Signup successful!");
        setIsModalOpen(false); // Close modal
      } else {
        notifyError(response.message || "An error occurred.");
      }
    } catch (error) {
      notifyError("Something went wrong! Please try again.");
      console.error("Form Submission Error:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer />
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Left Navigation */}
          <nav>
            <ul className="flex space-x-4">
              {items.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={nav.navLink}
                    className="text-gray-600 hover:text-pink-400 font-medium transition-colors duration-300"
                  >
                    {nav.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logo */}
          <div>
            <h1 className="text-3xl font-bold text-pink-400">EcoGlam</h1>
          </div>

          {/* Right Navigation */}
          <nav>
            <ul className="flex items-center space-x-4">
              <li>
                <button
                  className="text-gray-600 hover:text-pink-400 transition-colors duration-300 text-2xl"
                  aria-label="User Account"
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsLoginForm(true); // Default to Login form
                  }}
                >
                  <FaRegUser />
                </button>
              </li>
              <li>
                <button
                  className="text-gray-600 hover:text-pink-400 transition-colors duration-300 text-2xl"
                  aria-label="Shopping Cart"
                >
                  <FiShoppingCart />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Modal for Login/Signup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96 relative">
            <div className="flex justify-center space-x-4 mb-4">
              <button
                onClick={() => setIsLoginForm(true)}
                className={`px-4 py-2 ${
                  isLoginForm
                    ? "border-b-2 border-pink-400 text-pink-400"
                    : "text-gray-600"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLoginForm(false)}
                className={`px-4 py-2 ${
                  !isLoginForm
                    ? "border-b-2 border-pink-400 text-pink-400"
                    : "text-gray-600"
                }`}
              >
                Signup
              </button>
            </div>

            <form onSubmit={handleFormSubmit}>
              {!isLoginForm && (
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
              )}
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white w-full py-2 rounded-lg hover:bg-pink-600"
              >
                {isLoginForm ? "Login" : "Signup"}
              </button>
            </form>

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
