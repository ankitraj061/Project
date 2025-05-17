import { useState } from 'react';
import img1 from '../assets/oily1.png';
import img2 from '../assets/oily2.png';
import img3 from '../assets/oily3.png';
import img4 from '../assets/oily4.png';
import img5 from '../assets/oily5.png';

const categories = [
  { name: 'CLEANSER', img: img3, description: 'Gentle facial cleansers for oily skin' },
  { name: 'MOISTURISER', img: img4, description: 'Oil-free hydration for daily use' },
  { name: 'SERUM', img: img1, description: 'Targeted treatments for oily complexions' },
  { name: 'EXFOLIATOR', img: img5, description: 'Remove excess oil and dead skin cells' },
  { name: 'SUNSCREEN', img: img2, description: 'Matte-finish sun protection' },
];

const PopularCategory = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container mx-auto py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-3 text-center">
          Our Popular Categories
        </h2>
        <p className="text-gray-600 text-center mb-14 max-w-2xl mx-auto">
          Discover our specially formulated products for oily skin types
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-40 h-40 flex items-center justify-center bg-gradient-to-br from-pink-50 to-white rounded-xl mb-6 overflow-hidden">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-full object-contain transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <h3 className={`text-xl font-semibold tracking-wide mb-2 transition-colors duration-300 ${hoveredIndex === index ? 'text-pink-600' : 'text-gray-800'}`}>
                {category.name}
              </h3>
              
              <p className="text-sm text-gray-500 mt-1 opacity-80">
                {category.description}
              </p>
              
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;