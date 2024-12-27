import React from 'react';

const Categries = () => {
  const products = [
    {
      name: 'Hydrating Face Cream',
      description: 'A lightweight moisturizer to keep your skin hydrated all day.',
      price: '₹499',
      image: 'https://via.placeholder.com/300x200?text=Hydrating+Face+Cream',
    },
    {
      name: 'Vitamin C Serum',
      description: 'Brightens and evens out skin tone with natural ingredients.',
      price: '₹699',
      image: 'https://via.placeholder.com/300x200?text=Vitamin+C+Serum',
    },
    {
      name: 'Gentle Foaming Cleanser',
      description: 'Cleanses your skin without stripping natural oils.',
      price: '₹349',
      image: 'https://via.placeholder.com/300x200?text=Gentle+Foaming+Cleanser',
    },
    {
      name: 'SPF 50 Sunscreen',
      description: 'Broad-spectrum protection to shield your skin from harmful UV rays.',
      price: '₹599',
      image: 'https://via.placeholder.com/300x200?text=SPF+50+Sunscreen',
    },
    {
      name: 'Exfoliating Face Scrub',
      description: 'Removes dead skin cells and leaves your skin feeling smooth.',
      price: '₹449',
      image: 'https://via.placeholder.com/300x200?text=Exfoliating+Face+Scrub',
    },
    {
      name: 'Aloe Vera Gel',
      description: 'Soothes and hydrates irritated skin with pure aloe vera.',
      price: '₹399',
      image: 'https://via.placeholder.com/300x200?text=Aloe+Vera+Gel',
    },
    {
      name: 'Charcoal Face Mask',
      description: 'Detoxifies skin and removes impurities for a fresh look.',
      price: '₹299',
      image: 'https://via.placeholder.com/300x200?text=Charcoal+Face+Mask',
    },
    {
      name: 'Lip Balm',
      description: 'Nourishes and hydrates your lips for a soft and smooth feel.',
      price: '₹199',
      image: 'https://via.placeholder.com/300x200?text=Lip+Balm',
    },
    {
      name: 'Hair Serum',
      description: 'Provides smooth, shiny, and frizz-free hair.',
      price: '₹749',
      image: 'https://via.placeholder.com/300x200?text=Hair+Serum',
    },
    {
      name: 'Coconut Hair Oil',
      description: 'Enriched with natural coconut oil for deep nourishment.',
      price: '₹249',
      image: 'https://via.placeholder.com/300x200?text=Coconut+Hair+Oil',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-16">
          Our Products
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categries;
