// import React from 'react';
// import backV from '../assets/video.mp4';
// import OurProducts from '../pages/OurProducts';
// import { Link } from 'react-router-dom';



// const Hero = () => {
//   return (
//     <div className="relative min-h-screen">
//       {/* Background Video */}
//       <div className="absolute inset-0 z-0">
//         <video
//           className="w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//         >
//           <source
//             src={backV}
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>
//         {/* <div className="absolute inset-0 bg-white/60"></div> Removed backdrop-blur-sm */}
//       </div>
      
//       {/* Content Section */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 h-full sm:px-6 lg:px-8 py-32 border border-red-500">
//         <div className="max-w-2xl border border-red-500 h-full flex flex-col justify-center">
//           <div className="space-x-4">
//             <Link to={'/quiz'}>
//             <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors">
//               Know Your Skin
//             </button>

//             </Link>
            
//             <Link to={'/ourproducts'}>
//               <button className="bg-white text-emerald-600 px-8 py-3 rounded-full border-2 border-emerald-600 hover:bg-emerald-50 transition-colors">
//                 Shop Our Products

//             </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from 'react';
import backV from '../assets/video.mp4';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={backV} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-3xl sm:px-6 lg:px-8 py-32 flex flex-col items-start justify-center text-center py-32">
        {/* Header Text */}
        {/* <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Personalize your <br />
          <span className="text-emerald-600">Skincare Routine</span>
        </h1> */}
        {/* <p className="text-lg text-gray-600 mb-10">
          Your Skin, Your Way
        </p> */}

        {/* Buttons */}
        <div className="space-x-4 flex justify-end py-24 justify-end mt-36">
          <Link to={'/quiz'}>
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors">
              Know Your Skin
            </button>
          </Link>
          <Link to={'/ourproducts'}>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full border-2 border-emerald-600 hover:bg-emerald-50 transition-colors">
              Shop Our Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
