// SensitiveSkin.js
import React from 'react';
import sens1 from '../assets/sens1.png';
import sens2 from '../assets/sens2.png';
import sens3 from '../assets/sens3.png';
import sens4 from '../assets/sens4.png';
import sens5 from '../assets/sens5.png';

// Sample product data
const products = [
  {
    name: 'Gentle Skin Cleanser',
    description: 'A cleanser designed to gently clean sensitive skin without irritation.',
    price: '₹499',
    rating: 4.3,
    image: sens1,
    category: 'Sensitive Skin',
  },
  {
    name: 'Calm & Soothe Moisturizer',
    description: 'Moisturizes and calms sensitive skin.',
    price: '₹699',
    rating: 4.3,
    image: sens2,
    category: 'Sensitive Skin',
  },
  {
    name: 'Soothing Serum',
    description: 'A serum that soothes irritated skin.',
    price: '₹799',
    rating: 4.3,
    image: sens3,
    category: 'Sensitive Skin',
  },
  {
    name: 'Mild Exfoliator',
    description: 'A gentle exfoliant that doesn’t irritate sensitive skin.',
    price: '₹499',
    rating: 4.3,
    image: sens4,
    category: 'Sensitive Skin',
  },
  {
    name: 'Gentle Sunscreen',
    description: 'A sunscreen formulated for sensitive skin that provides protection without irritation.',
    price: '₹599',
    rating: 4.3,
    image: sens5,
    category: 'Sensitive Skin',
  },
];


// Helper function to render stars
const renderStars = (rating) => {
  const totalStars = 5;
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = totalStars - filledStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(filledStars)].map((_, index) => (
        <span key={`filled-${index}`} className="text-yellow-500">★</span>
      ))}
      {halfStar && <span className="text-yellow-400">★</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="text-gray-300">★</span>
      ))}
    </div>
  );
};

const SensitiveSkin = ({addToCart}) => {
  const handleAddToCart = (productName) => {
    addToCart(productName);
  };

  return (
    <section className="py-10 bg-white">
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
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-medium text-emerald-700">{product.price}</p>
                {renderStars(product.rating)}
              </div>
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
