// DrySkin.js
import React from 'react';

// Sample product data for Dry Skin
const products = [
  {
    name: 'Ultra Hydrating Face Cream',
    description: 'A rich, moisturizing cream that keeps dry skin soft and supple.',
    price: '₹799',
    image: 'https://via.placeholder.com/300x200?text=Ultra+Hydrating+Face+Cream',
    category: 'Dry Skin',
  },
  {
    name: 'Deep Nourishing Body Lotion',
    description: 'A body lotion infused with shea butter for long-lasting hydration.',
    price: '₹499',
    image: 'https://via.placeholder.com/300x200?text=Deep+Nourishing+Body+Lotion',
    category: 'Dry Skin',
  },
  {
    name: 'Gentle Hydrating Cleanser',
    description: 'A soap-free cleanser that gently removes impurities while keeping skin hydrated.',
    price: '₹599',
    image: 'https://via.placeholder.com/300x200?text=Gentle+Hydrating+Cleanser',
    category: 'Dry Skin',
  },
  {
    name: 'Overnight Repair Moisturizer',
    description: 'A night cream that restores moisture to your skin while you sleep.',
    price: '₹899',
    image: 'https://via.placeholder.com/300x200?text=Overnight+Repair+Moisturizer',
    category: 'Dry Skin',
  },
  {
    name: 'Hydrating Sheet Mask',
    description: 'A sheet mask enriched with hyaluronic acid for instant hydration.',
    price: '₹199',
    image: 'https://via.placeholder.com/300x200?text=Hydrating+Sheet+Mask',
    category: 'Dry Skin',
  },
  {
    name: 'Intense Moisturizing Hand Cream',
    description: 'A hand cream that soothes dry, cracked hands.',
    price: '₹299',
    image: 'https://via.placeholder.com/300x200?text=Intense+Moisturizing+Hand+Cream',
    category: 'Dry Skin',
  },
];

const DrySkin = () => {
  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart!`);
  };

  return (
    <section className="py-24 bg-white">
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

export default DrySkin;
