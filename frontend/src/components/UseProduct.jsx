import React from 'react';
import womenCareImage from '../assets/usepro.jpeg.jpg';

const UseProduct = () => {
  return (
    <section className="flex items-center justify-between p-8 my-8 pt-0 pb-0">
      <div className="flex-1 pr-8 pl-20">
        <h2 className="text-4xl font-serif text-gray-900 mb-6 ">The Future of Comfort and Well-Being</h2>
        <p className="text-lg text-gray-600">
        Discover our innovative Care Product, designed for comfort and well-being. Crafted with cutting-edge technology and eco-friendly materials, it seamlessly fits into all lifestyles, ensuring convenience and luxury at every step. Whether you're at home, at work, or on the go, this product adapts to your needs, offering a truly exceptional experience that enhances your daily routine.
        </p>
      </div>
      <div className="flex-1 pl-20">
        <img
          className="w-96 h-96 rounded-lg shadow-md"
          src={womenCareImage}
          alt="Product"
        />
      </div>
    </section>
  );
};

export default UseProduct;
