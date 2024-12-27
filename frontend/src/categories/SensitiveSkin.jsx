// SensitiveSkin.js
import React from 'react';

// Sample product data
const products = [
  {
    name: 'Gentle Skin Cleanser',
    description: 'A cleanser designed to gently clean sensitive skin without irritation.',
    price: '₹499',
    image: 'https://via.placeholder.com/300x200?text=Gentle+Skin+Cleanser',
    category: 'Sensitive Skin',
  },
  {
    name: 'Calm & Soothe Moisturizer',
    description: 'Moisturizes and calms sensitive skin.',
    price: '₹699',
    image: 'https://via.placeholder.com/300x200?text=Calm+&+Soothe+Moisturizer',
    category: 'Sensitive Skin',
  },
  {
    name: 'Soothing Serum',
    description: 'A serum that soothes irritated skin.',
    price: '₹799',
    image: 'https://via.placeholder.com/300x200?text=Soothing+Serum',
    category: 'Sensitive Skin',
  },
  {
    name: 'Mild Exfoliator',
    description: 'A gentle exfoliant that doesn’t irritate sensitive skin.',
    price: '₹499',
    image: 'https://via.placeholder.com/300x200?text=Mild+Exfoliator',
    category: 'Sensitive Skin',
  },
  {
    name: 'Gentle Sunscreen',
    description: 'A sunscreen formulated for sensitive skin that provides protection without irritation.',
    price: '₹599',
    image: 'https://via.placeholder.com/300x200?text=Gentle+Sunscreen',
    category: 'Sensitive Skin',
  },
];

const SensitiveSkin = () => {
  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart!`);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-16">
          Sensitive Skin Products
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
              <p className="text-lg font-medium text-emerald-700">{product.price}</p>
              <button
                onClick={() => handleAddToCart(product.name)}
                className="w-full py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 mt-4"
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

export default SensitiveSkin;
