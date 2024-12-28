import React from 'react';
import personalisedImg from '../assets/personlized.jpg';

const PersonalizedCare = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0"> {/* Reduced gap by changing mb-8 to mb-4 */}
            <img
              src={personalisedImg}
              alt="Diverse people with glowing skin"
              className="rounded-lg shadow-lg max-w-full md:max-w-sm mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-0"> {/* Reduced padding by changing md:pl-12 to md:pl-6 */}
            <h2 className="text-4xl font-serif text-gray-900 mb-6">
              Why Personalized Skincare Matters
            </h2>
            <p className="text-lg text-gray-600">
              Everyone's skin is unique. By personalizing your skincare routine, 
              we ensure that you're getting the right ingredients for your skin's 
              specific needs. No more guesswork or wasted products – EcoGlam makes 
              skincare effective and easy!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedCare;
