// CombinationSkin.js
import React from 'react';

// Sample product data for Combination Skin
const products = [
  {
    name: 'Balancing Face Cleanser',
    description: 'A gentle cleanser that balances oil and moisture for combination skin.',
    price: '₹499',
    image: 'https://via.placeholder.com/300x200?text=Balancing+Face+Cleanser',
    category: 'Combination Skin',
  },
  {
    name: 'Dual-Action Moisturizer',
    description: 'Moisturizes dry areas while controlling oil in the T-zone.',
    price: '₹699',
    image: 'https://via.placeholder.com/300x200?text=Dual-Action+Moisturizer',
    category: 'Combination Skin',
  },
  {
    name: 'Multi-Action Serum',
    description: 'A serum that works on both hydration and oil control for combination skin.',
    price: '₹799',
    image: 'https://via.placeholder.com/300x200?text=Multi-Action+Serum',
    category: 'Combination Skin',
  },
  {
    name: 'Exfoliating Scrub',
    description: 'An exfoliator that works gently for combination skin, balancing both oil and dryness.',
    price: '₹499',
    image: 'https://via.placeholder.com/300x200?text=Exfoliating+Scrub',
    category: 'Combination Skin',
  },
  {
    name: 'Matte Sunscreen',
    description: 'A sunscreen with a matte finish, perfect for combination skin.',
    price: '₹599',
    image: 'https://via.placeholder.com/300x200?text=Matte+Sunscreen',
    category: 'Combination Skin',
  },
];

const CombinationSkin = () => {
  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart!`);
  };

  return (
    <section className="py-24 bg-white">
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

export default CombinationSkin;
