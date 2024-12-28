
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if you want to use routing
import oily1 from '../assets/oily1.png';
import oily2 from '../assets/oily2.png';
import oily3 from '../assets/oily3.png';
import oily4 from '../assets/oily4.png';
import oily5 from '../assets/oily5.png';
import { useCart } from '../context/ProductContext';

const OurProducts = () => {
  const { products, addProduct, removeProduct } = useCart();
  const myproducts = [
    {
      id: 1,
      name: 'Ultra Hydrating Face Cream',
      description: 'A rich, moisturizing cream that keeps dry skin soft and supple.',
      price: '₹799',
      rating: 4.2,
      image: oily1,
      category: 'Dry Skin',
    },
    {
      id: 2,
      name: 'Deep Nourishing Body Lotion',
      description: 'A body lotion infused with shea butter for long-lasting hydration.',
      price: '₹499',
      rating: 4.5,
      image: oily2,
      category: 'Dry Skin',
    },
    {
      id: 3,
      name: 'Gentle Hydrating Cleanser',
      description: 'A soap-free cleanser that gently removes impurities while keeping skin hydrated.',
      price: '₹599',
      rating: 4.3,
      image: oily3,
      category: 'Dry Skin',
    },
    {
      id: 4,
      name: 'Overnight Repair Moisturizer',
      description: 'A night cream that restores moisture to your skin while you sleep.',
      price: '₹899',
      rating: 4.7,
      image: oily4,
      category: 'Dry Skin',
    },
    {
      id: 5,
      name: 'Hydrating Sheet Mask',
      description: 'A sheet mask enriched with hyaluronic acid for instant hydration.',
      price: '₹199',
      rating: 4.4,
      image: oily5,
      category: 'Dry Skin',
    },
    {
      id: 6,
      name: 'Intense Moisturizing Hand Cream',
      description: 'A hand cream that soothes dry, cracked hands.',
      price: '₹299',
      rating: 4.6,
      image: oily1,
      category: 'Dry Skin',
    },
    {
      id: 7,
      name: 'Balancing Face Cleanser',
      description: 'A gentle cleanser that balances oil and moisture for combination skin.',
      price: '₹499',
      rating: 4.4,
      image: oily2,
      category: 'Combination Skin',
    },
    {
      id: 8,
      name: 'Dual-Action Moisturizer',
      description: 'Moisturizes dry areas while controlling oil in the T-zone.',
      price: '₹699',
      rating: 4.8,
      image: oily3,
      category: 'Combination Skin',
    },
    {
      id: 9,
      name: 'Multi-Action Serum',
      description: 'A serum that works on both hydration and oil control for combination skin.',
      price: '₹799',
      rating: 4.3,
      image: oily4,
      category: 'Combination Skin',
    },
    {
      id: 10,
      name: 'Exfoliating Scrub',
      description: 'An exfoliator that works gently for combination skin, balancing both oil and dryness.',
      price: '₹499',
      rating: 4.6,
      image: oily5,
      category: 'Combination Skin',
    },
    {
      id: 11,
      name: 'Matte Sunscreen',
      description: 'A sunscreen with a matte finish, perfect for combination skin.',
      price: '₹599',
      rating: 4.,
      image: oily1,
      category: 'Combination Skin',
    },

    {
      id: 12,
      name: 'Gentle Skin Cleanser',
      description: 'A cleanser designed to gently clean sensitive skin without irritation.',
      price: '₹499',
      rating: 4.4,
      image: oily2,
      category: 'Sensitive Skin',
    },
    {
      id: 13,
      name: 'Calm & Soothe Moisturizer',
      description: 'Moisturizes and calms sensitive skin.',
      price: '₹699',
      rating: 4.4,
      image: oily3,
      category: 'Sensitive Skin',
    },
    {
      id: 14,
      name: 'Soothing Serum',
      description: 'A serum that soothes irritated skin.',
      price: '₹799',
      rating: 4.4,
      image: oily4,
      category: 'Sensitive Skin',
    },
    {
      id: 15,
      name: 'Mild Exfoliator',
      description: 'A gentle exfoliant that doesn’t irritate sensitive skin.',
      price: '₹499',
      rating: 4.4,
      image: oily5,
      category: 'Sensitive Skin',
    },
    {
      id: 16,
      name: 'Gentle Sunscreen',
      description: 'A sunscreen formulated for sensitive skin that provides protection without irritation.',
      price: '₹599',
      rating: 4.4,
      image: oily1,
      category: 'Sensitive Skin',
    },

    {
      id: 17,
      name: 'Fresh Face Cleanser',
      description: 'A cleanser that removes oil and leaves the skin feeling fresh.',
      price: '₹399',
      image: oily2,
      category: 'Oily Skin',
      rating: 4.3,
    },
    {
      id: 18,
      name: 'Oil-Free Moisturizer',
      description: 'A lightweight moisturizer that hydrates without adding excess oil.',
      price: '₹599',
      image: oily3,
      category: 'Oily Skin',
      rating: 4.3,
    },
    {
      id: 19,
      name: 'Clear Skin Serum',
      description: 'Targets excess oil and helps clear acne-prone skin.',
      price: '₹799',
      image: oily4,
      category: 'Oily Skin',
      rating: 4.3,
    },
    {
      id: 20,
      name: 'Pore-Refining Exfoliator',
      description: 'A scrub that removes dead skin and refines pores, helping with oily skin.',
      price: '₹499',
      image: oily1,
      category: 'Oily Skin',
      rating: 4.3,
    },
    {
      id: 21,
      name: 'Shine-Free Sunscreen',
      description: 'A non-greasy sunscreen that keeps shine at bay.',
      price: '₹599',
      image: oily2,
      category: 'Oily Skin',
      rating: 4.3,
    },
    {
      id: 22,
      name: 'Mattifying Primer',
      description: 'Prepares the skin for makeup by controlling oil and shine.',
      price: '₹699',
      image: oily3,
      category: 'Oily Skin',
      rating: 4.3,
    },
    {
      id: 23,
      name: 'Deep Cleansing Mask',
      description: 'A mask that deeply cleanses pores and absorbs excess oil.',
      price: '₹499',
      image: oily4,
      category: 'Oily Skin',
      rating: 4.3,
    },
    {
      id: 24,
      name: 'Soothing Toner',
      description: 'A toner that calms the skin while keeping it oil-free.',
      price: '₹399',
      image: oily5,
      category: 'Oily Skin',
      rating: 4.3,
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

  const handleAddToCart = (product) => {
    // Pass the entire product object instead of just the name
    addProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      quantity: 1
    });
  };

  const checkIfAddedInCart = (id) => {
    return products.find((el) => el.id === id);
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-16">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {myproducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-6 bg-emerald-50 shadow hover:shadow-lg transition-shadow duration-200"
            >
              {/* Make the entire product card clickable */}
              <Link to={`/product/${product.id}`} className="block">
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
              </Link>

              {/* Cart Button */}
              {!checkIfAddedInCart(product.id) ? (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  onClick={() => removeProduct(product.id)}
                  className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  Remove From Cart
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
