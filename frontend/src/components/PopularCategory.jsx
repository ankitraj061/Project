import React from 'react';
import img1 from '../assets/oily1.png';
import img2 from '../assets/oily2.png';
import img3 from '../assets/oily3.png';
import img4 from '../assets/oily4.png';
import img5 from '../assets/oily5.png';

const PopularCategory = () => {
  return (
    <div className="container mx-auto my-12">
      <h2 className="text-4xl font-serif text-gray-900 mb-4 text-center">Our Popular Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-40 h-40 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
            <img src={img3} alt="Cleanser" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-lg font-semibold">CLEANSER</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-40 h-40 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
            <img src={img4} alt="Moisturiser" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-lg font-semibold">MOISTURISER</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-40 h-40 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
            <img src={img1} alt="Serum" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-lg font-semibold">SERUM</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-40 h-40 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
            <img src={img5} alt="Exfoliator" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-lg font-semibold">EXFOLIATOR</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-40 h-40 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
            <img src={img2} alt="Sunscreen" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-lg font-semibold">SUNSCREEN</h3>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
