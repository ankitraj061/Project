// src/components/AuthModal.jsx
import { X } from "lucide-react";

const AuthModal = ({
  isLoginForm,
  formData,
  handleInputChange,
  handleFormToggle,
  handleSubmit,
  handleUserClick,
}) => {
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
        >
          {isLoginForm
            ? "Don't have an account? Sign up"
            : "Already have an account? Log in"}
        </button>

        <form onSubmit={handleSubmit}>
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
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white p-2 rounded-lg hover:bg-pink-700"
          >
            {isLoginForm ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
