// CombinationSkin.js
import React from 'react';
import combination1 from '../assets/combination1.png';
import combination2 from '../assets/combination2.png';
import combination3 from '../assets/combination3.png';
import combination4 from '../assets/combination4.png';
import combination5 from '../assets/combination5.png';

// Sample product data for Combination Skin
const products = [
  {
    name: 'Balancing Face Cleanser',
    description: 'A gentle cleanser that balances oil and moisture for combination skin.',
    price: '₹499',
    rating: 4.4,
    image: combination1,
    category: 'Combination Skin',
  },
  {
    name: 'Dual-Action Moisturizer',
    description: 'Moisturizes dry areas while controlling oil in the T-zone.',
    price: '₹699',
    rating: 4.4,
    image: combination2,
    category: 'Combination Skin',
  },
  {
    name: 'Multi-Action Serum',
    description: 'A serum that works on both hydration and oil control for combination skin.',
    price: '₹799',
    rating: 4.4,
    image: combination3,
    category: 'Combination Skin',
  },
  {
    name: 'Exfoliating Scrub',
    description: 'An exfoliator that works gently for combination skin, balancing both oil and dryness.',
    price: '₹499',
    rating: 4.4,
    image: combination4,
    category: 'Combination Skin',
  },
  {
    name: 'Matte Sunscreen',
    description: 'A sunscreen with a matte finish, perfect for combination skin.',
    price: '₹599',
    rating: 4.4,
    image: combination5,
    category: 'Combination Skin',
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

const CombinationSkin = ({ addToCart }) => {
  const handleAddToCart = (productName) => {
    addToCart(productName);
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-16">
          Combination Skin Products
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

export default CombinationSkin;
