// UpcomingCategory.js
import React from 'react';
import img1 from '../assets/up1.png';
import img2 from '../assets/up2.png';
import img3 from '../assets/up3.jpg';
import img4 from '../assets/hair.jpeg';


const UpcomingCategory = () => {
  return (
    <div className="container mx-auto my-12 px-4">
      <h2 className="text-4xl font-serif text-gray-900 mb-6 text-center">Upcoming Categories</h2>
      <div className="grid grid-cols-4 gap-8 items-center justify-center mt-10">
        <div className="flex flex-col items-center text-center">
          <img
            src={img2}
            alt="Face Mask"
            className="w-40 h-40 object-cover mb-4 rounded-lg shadow-md"
          />
          <h3 className="text-lg font-semibold">FACE MASK</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src={img1}
            alt="Lip Care"
            className="w-40 h-40 object-cover mb-4 rounded-lg shadow-md"
          />
          <h3 className="text-lg font-semibold">LIP CARE</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src={img3}
            alt="Eye Care"
            className="w-40 h-40 object-cover mb-4 rounded-lg shadow-md"
          />
          <h3 className="text-lg font-semibold">EYE CARE</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src={img4}
            alt="Hair Care"
            className="w-40 h-40 object-cover mb-4 rounded-lg shadow-md"
          />
          <h3 className="text-lg font-semibold">HAIR CARE</h3>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCategory;

