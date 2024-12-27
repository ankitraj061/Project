// OilySkin.js
import React from 'react';

// Sample product data for Oily Skin
const products = [
  {
    name: 'Fresh Face Cleanser',
    description: 'A cleanser that removes oil and leaves the skin feeling fresh.',
    price: '₹399',
    image: 'https://via.placeholder.com/300x200?text=Fresh+Face+Cleanser',
    category: 'Oily Skin',
  },
  {
    name: 'Oil-Free Moisturizer',
    description: 'A lightweight moisturizer that hydrates without adding excess oil.',
    price: '₹599',
    image: 'https://via.placeholder.com/300x200?text=Oil-Free+Moisturizer',
    category: 'Oily Skin',
  },
  {
    name: 'Clear Skin Serum',
    description: 'Targets excess oil and helps clear acne-prone skin.',
    price: '₹799',
    image: 'https://via.placeholder.com/300x200?text=Clear+Skin+Serum',
    category: 'Oily Skin',
  },
  {
    name: 'Pore-Refining Exfoliator',
    description: 'A scrub that removes dead skin and refines pores, helping with oily skin.',
    price: '₹499',
    image: 'https://via.placeholder.com/300x200?text=Pore-Refining+Exfoliator',
    category: 'Oily Skin',
  },
  {
    name: 'Shine-Free Sunscreen',
    description: 'A non-greasy sunscreen that keeps shine at bay.',
    price: '₹599',
    image: 'https://via.placeholder.com/300x200?text=Shine-Free+Sunscreen',
    category: 'Oily Skin',
  },
  {
    name: 'Mattifying Primer',
    description: 'Prepares the skin for makeup by controlling oil and shine.',
    price: '₹699',
    image: 'https://via.placeholder.com/300x200?text=Mattifying+Primer',
    category: 'Oily Skin',
  },
  {
    name: 'Deep Cleansing Mask',
    description: 'A mask that deeply cleanses pores and absorbs excess oil.',
    price: '₹499',
    image: 'https://via.placeholder.com/300x200?text=Deep+Cleansing+Mask',
    category: 'Oily Skin',
  },
  {
    name: 'Soothing Toner',
    description: 'A toner that calms the skin while keeping it oil-free.',
    price: '₹399',
    image: 'https://via.placeholder.com/300x200?text=Soothing+Toner',
    category: 'Oily Skin',
  },
];

const OilySkin = () => {
  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart!`);
  };

  return (
    <section className="py-24 bg-white">
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

export default OilySkin;
