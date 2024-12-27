// UpcomingCategory.js
import React from 'react';

import img2 from "../assets/up2.png";
import img3 from "../assets/up3.jpg";
import img1 from "../assets/up1.png";

const UpcomingCategory = () => {
  return (
    <div className="container mx-auto my-12">
      <h2 className="text-3xl font-bold text-center mb-8">Upcoming Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <img src={img2} alt='Face Mask' className="w-32 h-32 object-cover mb-4 rounded-full" />
          <h3 className="text-lg font-semibold">FACE MASK</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src={img1} alt='Lip Care' className="w-32 h-32 object-cover mb-4 rounded-full" />
          <h3 className="text-lg font-semibold">LIP CARE</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src={img3} alt='Eye Care' className="w-32 h-32 object-cover mb-4 rounded-full" />
          <h3 className="text-lg font-semibold">EYE CARE</h3>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCategory;
