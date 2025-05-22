// src/components/AuthModal.jsx
import React, { useState } from "react";
import { X, Loader2 } from "lucide-react";

const AuthModal = ({
  isLoginForm,
  formData,
  handleInputChange,
  handleFormToggle,
  handleSubmit,
  handleUserClick,
}) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await handleSubmit(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        <button
          onClick={handleUserClick}
          className="absolute top-2 right-2 text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-xl font-semibold mb-4">
          {isLoginForm ? "Login" : "Sign Up"}
        </h2>

        <button
          onClick={handleFormToggle}
          className="text-sm text-blue-600 mb-4 inline-block"
          disabled={loading}
        >
          {isLoginForm
            ? "Don't have an account? Sign up"
            : "Already have an account? Log in"}
        </button>

        <form onSubmit={onSubmit}>
          {!isLoginForm && (
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
                disabled={loading}
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
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
              disabled={loading}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
              disabled={loading}
            />
          </div>
          {!isLoginForm && (
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
                disabled={loading}
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full flex justify-center items-center bg-pink-600 text-white p-2 rounded-lg hover:bg-pink-700 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5 mr-2" />{" "}
                {isLoginForm ? "Logging in..." : "Signing up..."}
              </>
            ) : (
              isLoginForm ? "Login" : "Sign Up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
