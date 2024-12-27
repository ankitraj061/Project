// OilySkin.js
import React from 'react';
import oily1 from '../assets/oily1.png';
import oily2 from '../assets/oily2.png';  
import oily3 from '../assets/oily3.png';
import oily4 from '../assets/oily4.png';
import oily5 from '../assets/oily5.png';

// Sample product data for Oily Skin
const products = [
  {
    name: 'Fresh Face Cleanser',
    description: 'A cleanser that removes oil and leaves the skin feeling fresh.',
    price: '₹399',
    rating: 4.8,
    image: oily1,
    category: 'Oily Skin',
  },
  {
    name: 'Oil-Free Moisturizer',
    description: 'A lightweight moisturizer that hydrates without adding excess oil.',
    price: '₹599',
    rating: 4.8,
    image: oily2,
    category: 'Oily Skin',
  },
  {
    name: 'Clear Skin Serum',
    description: 'Targets excess oil and helps clear acne-prone skin.',
    price: '₹799',
    rating: 4.8,
    image: oily3,
    category: 'Oily Skin',
  },
  {
    name: 'Pore-Refining Exfoliator',
    description: 'A scrub that removes dead skin and refines pores, helping with oily skin.',
    price: '₹499',
    rating: 4.8,
    image: oily4,
    category: 'Oily Skin',
  },
  {
    name: 'Shine-Free Sunscreen',
    description: 'A non-greasy sunscreen that keeps shine at bay.',
    price: '₹599',
    rating: 4.8,
    image: oily5,
    category: 'Oily Skin',
  },
  {
    name: 'Mattifying Primer',
    description: 'Prepares the skin for makeup by controlling oil and shine.',
    price: '₹699',
    rating: 4.8,
    image: oily1,
    category: 'Oily Skin',
  },
  {
    name: 'Deep Cleansing Mask',
    description: 'A mask that deeply cleanses pores and absorbs excess oil.',
    price: '₹499',
    rating: 4.8,
    image: oily2,
    category: 'Oily Skin',
  },
  {
    name: 'Soothing Toner',
    description: 'A toner that calms the skin while keeping it oil-free.',
    price: '₹399',
    rating: 4.8,
    image: oily3,
    category: 'Oily Skin',
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

const OilySkin = ({ addToCart }) => {
  const handleAddToCart = (productName) => {
    addToCart(productName);
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-16">
          Oily Skin Products
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

export default OilySkin;
