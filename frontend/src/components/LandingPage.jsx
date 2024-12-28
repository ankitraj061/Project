import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">

      {/* Hero Section */}
      <section className="hero text-center bg-gray-100 p-8">
        <h1 className="text-4xl font-bold">Product Name</h1>
        <p className="text-lg text-gray-600 mt-2">Catchy Tagline or USP</p>
        <img src="product-image.jpg" alt="Product Image" className="mx-auto mt-6 rounded-lg shadow-lg" />
        <div className="cta-buttons mt-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded mr-4 hover:bg-blue-700">Buy Now</button>
          <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700">Learn More</button>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="product-details p-6">
        <h2 className="text-3xl font-semibold">Product Description</h2>
        <p className="text-lg mt-4">This product is amazing because it does XYZ. It's the best choice for solving ABC problems.</p>

        <h3 className="text-2xl font-semibold mt-6">Ingredients News</h3>
        <ul className="list-disc pl-8 mt-4">
          <li><strong>Ingredient 1:</strong> Description of its benefits.</li>
          <li><strong>Ingredient 2:</strong> Description of its benefits.</li>
          <li><strong>Ingredient 3:</strong> Description of its benefits.</li>
        </ul>
      </section>

      {/* User Ratings and Reviews Section */}
      <section className="user-reviews bg-gray-50 p-6">
        <h2 className="text-3xl font-semibold">User Ratings</h2>
        <div className="rating text-xl mt-4">
          <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          <span className="ml-2">(4.5/5 from 100 reviews)</span>
        </div>
        <div className="reviews mt-6">
          <div className="review">
            <p>"Great product! I love it!" - User1</p>
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          </div>
          <div className="review mt-4">
            <p>"It does exactly what it promises!" - User2</p>
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 rounded mt-6 hover:bg-blue-700">Write a Review</button>
      </section>

      {/* Pricing Section */}
      <section className="pricing text-center p-6 bg-gray-200">
        <h2 className="text-4xl font-semibold">Price: $99.99</h2>
        <p className="text-xl mt-2">Discount: 20% off for a limited time!</p>
        <button className="bg-red-500 text-white px-6 py-2 rounded mt-4 hover:bg-red-700">Buy Now</button>
      </section>

      {/* Additional Information Section */}
      <section className="additional-info p-6">
        <h2 className="text-3xl font-semibold">Usage Instructions</h2>
        <p className="text-lg mt-4">Apply a small amount to skin and massage gently for 5 minutes. Use twice daily.</p>

        <h3 className="text-2xl font-semibold mt-6">FAQs</h3>
        <ul className="list-disc pl-8 mt-4">
          <li><strong>Q1:</strong> How long does the product last?</li>
          <li><strong>Q2:</strong> Can I use it for sensitive skin?</li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white p-6">
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-yellow-400">Terms of Service</a></li>
        </ul>
        <div className="social-media mt-4">
          <a href="#" className="mr-4 hover:text-yellow-400">Facebook</a>
          <a href="#" className="mr-4 hover:text-yellow-400">Instagram</a>
          <a href="#" className="hover:text-yellow-400">Twitter</a>
        </div>
        <div className="contact-info mt-4">
          <p>Email: support@brand.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
