// DrySkin.js
import React from 'react';
import dry1 from '../assets/dry1.png';
import dry2 from '../assets/dry2.png';
import dry3 from '../assets/dry3.png';
import dry4 from '../assets/dry4.png';
import dry5 from '../assets/dry5.png';

// Sample product data for Dry Skin
const products = [
  {
    name: 'Ultra Hydrating Face Cream',
    description: 'A rich, moisturizing cream that keeps dry skin soft and supple.',
    price: '₹799',
    rating: 4.6,
    image: dry1,
    category: 'Dry Skin',
  },
  {
    name: 'Deep Nourishing Body Lotion',
    description: 'A body lotion infused with shea butter for long-lasting hydration.',
    price: '₹499',
    rating: 4.6,
    image: dry2,
    category: 'Dry Skin',
  },
  {
    name: 'Gentle Hydrating Cleanser',
    description: 'A soap-free cleanser that gently removes impurities while keeping skin hydrated.',
    price: '₹599',
    rating: 4.6,
    image: dry3,
    category: 'Dry Skin',
  },
  {
    name: 'Overnight Repair Moisturizer',
    description: 'A night cream that restores moisture to your skin while you sleep.',
    price: '₹899',
    rating: 4.6,
    image: dry4,
    category: 'Dry Skin',
  },
  {
    name: 'Hydrating Sheet Mask',
    description: 'A sheet mask enriched with hyaluronic acid for instant hydration.',
    price: '₹199',
    rating: 4.6,
    image: dry5,
    category: 'Dry Skin',
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

const DrySkin = () => {
  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart!`);
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-16">
          Dry Skin Products
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

export default DrySkin;
