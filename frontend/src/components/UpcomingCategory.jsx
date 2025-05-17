// UpcomingCategory.js
import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

// Import your images
import img1 from '../assets/up1.png'; // Lip Care
import img2 from '../assets/up2.png'; // Face Mask
import img3 from '../assets/up3.jpg'; // Eye Care
import img4 from '../assets/hair.jpeg'; // Hair Care

const UpcomingCategory = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const categories = [
    {
      id: 1,
      image: img2,
      title: "FACE MASK",
      description: "Rejuvenate your skin with our botanical face masks",
      comingSoon: "Coming June 2025",
      color: "from-pink-500 to-purple-500"
    },
    {
      id: 2,
      image: img1,
      title: "LIP CARE",
      description: "Nourish and protect with natural lip treatments",
      comingSoon: "Coming July 2025",
      color: "from-red-400 to-pink-500"
    },
    {
      id: 3,
      image: img3,
      title: "EYE CARE",
      description: "Revitalize tired eyes with our gentle formulas",
      comingSoon: "Coming August 2025",
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: 4,
      image: img4,
      title: "HAIR CARE",
      description: "Restore shine and strength with botanical extracts",
      comingSoon: "Coming September 2025",
      color: "from-amber-400 to-yellow-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-serif text-gray-900 mb-3 relative inline-block">
            Upcoming Categories
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-pink-500 rounded-full"></div>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our new product lines coming soon. Join the waitlist to be the first to know when they launch.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="relative rounded-xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-transform duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10`}></div>
              
              {/* Image */}
              <div className="h-64 relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold tracking-wider mb-2">{category.title}</h3>
                <p className="text-sm mb-3">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold bg-white text-gray-800 px-3 py-1 rounded-full">
                    {category.comingSoon}
                  </span>
                  <button className="text-white hover:text-pink-200 transition-colors duration-200">
                    <FiArrowRight className="text-xl" />
                  </button>
                </div>
              </div>
              
              {/* Static title for non-hover state */}
              <div className="absolute bottom-0 left-0 right-0 bg-white py-4 px-6 transform translate-y-0 group-hover:translate-y-full transition-transform duration-300 flex justify-between items-center">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center">
                  <FiArrowRight className="text-pink-600" />
                </div>
              </div>
              
              {/* Notification badge */}
              <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full z-30">
                NEW
              </div>
            </div>
          ))}
        </div>
        
        {/* Join waitlist CTA */}
        {/* <div className="mt-16 text-center">
          <button 
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
          >
            Join the Waitlist
          </button>
          <p className="text-gray-500 text-sm mt-3">
            Be the first to know when these products launch
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default UpcomingCategory;