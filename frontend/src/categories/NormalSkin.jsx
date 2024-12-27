// NormalSkin.js
import React from 'react';

// Sample product data for Normal Skin
const products = [
  {
    name: 'Hydrating Face Wash',
    description: 'A gentle hydrating wash that maintains the natural balance of normal skin.',
    price: '₹399',
    image: 'https://via.placeholder.com/300x200?text=Hydrating+Face+Wash',
    category: 'Normal Skin',
  },
  {
    name: 'Daily Moisturizer',
    description: 'A lightweight moisturizer that keeps the skin smooth and hydrated.',
    price: '₹599',
    image: 'https://via.placeholder.com/300x200?text=Daily+Moisturizer',
    category: 'Normal Skin',
  },
  {
    name: 'Radiance Boosting Serum',
    description: 'A serum that gives your skin a healthy glow without being greasy.',
    price: '₹799',
    image: 'https://via.placeholder.com/300x200?text=Radiance+Boosting+Serum',
    category: 'Normal Skin',
  },
  {
    name: 'Gentle Exfoliator',
    description: 'An exfoliator that removes dead skin cells, perfect for normal skin.',
    price: '₹499',
    image: 'https://via.placeholder.com/300x200?text=Gentle+Exfoliator',
    category: 'Normal Skin',
  },
  {
    name: 'Moisturizing Sunscreen',
    description: 'A sunscreen that protects against UV rays while keeping your skin moisturized.',
    price: '₹599',
    image: 'https://via.placeholder.com/300x200?text=Moisturizing+Sunscreen',
    category: 'Normal Skin',
  },
  {
    name: 'Balancing Toner',
    description: 'A toner that refreshes and balances the skin’s pH levels.',
    price: '₹399',
    image: 'https://via.placeholder.com/300x200?text=Balancing+Toner',
    category: 'Normal Skin',
  },
  {
    name: 'Overnight Glow Mask',
    description: 'A night mask designed to brighten and revitalize your skin overnight.',
    price: '₹899',
    image: 'https://via.placeholder.com/300x200?text=Overnight+Glow+Mask',
    category: 'Normal Skin',
  },
  {
    name: 'Nourishing Eye Cream',
    description: 'An eye cream that reduces puffiness and hydrates the under-eye area.',
    price: '₹499',
    image: 'https://via.placeholder.com/300x200?text=Nourishing+Eye+Cream',
    category: 'Normal Skin',
  },
];

const NormalSkin = () => {
  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart!`);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-16">
          Normal Skin Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 bg-emerald-50 shadow hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-medium text-emerald-700 mb-4">{product.price}</p>
              <button
                onClick={() => handleAddToCart(product.name)}
                className="w-full py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NormalSkin;
