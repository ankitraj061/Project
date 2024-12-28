import ecofriendlyImg from '../assets/ecofriendly.jpeg.jpg'; // Replace with the actual path to your image
import personalisedImg from '../assets/personalised.jpeg.jpg'; // Replace with the actual path to your image
import highQualityImg from '../assets/quality.jpg'; // Replace with the actual path to your image

const Intro = () => {
  return (
    <div className="intro text-center pt-16 pb-16 px-4 bg-gradient-to-r from-pink-300 to-lavender-200 p-8 rounded-lg">
      <h2 className="text-3xl text-emerald-600 font-semibold mb-6">
        Skincare that is good for you and the planet
      </h2>
      <p className="text-xl text-gray-700 mb-8 break-words">
        Discover our range of eco-friendly skincare products, thoughtfully crafted to nourish your skin while being kind to the planet. Each product is made with sustainable ingredients and environmentally conscious packaging.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-8 p-0">
        <div className="card bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
          <div className="w-40 h-40 mx-auto mb-4">
            <img
              src={ecofriendlyImg}
              alt="Ecofriendly Product"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Ecofriendly Product</h3>
        </div>
        <div className="card bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
          <div className="w-40 h-40 mx-auto mb-4">
            <img
              src={personalisedImg}
              alt="Personalised Care"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Personalised Care</h3>
        </div>
        <div className="card bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
          <div className="w-40 h-40 mx-auto mb-4">
            <img
              src={highQualityImg}
              alt="High Quality and Affordable Product"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            High Quality and Affordable Product
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Intro;
