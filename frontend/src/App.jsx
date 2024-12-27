import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import OurProducts from "./pages/OurProducts"; 
import Discount from "./components/Discount";
import Hero from "./components/Hero";
import Ingredients from "./components/Ingredients";
import Intro from "./components/Intro";
import Delivery from "./components/Delivery";
import PersonalizedCare from "./components/PersonalizedCare";
import FAQ from "./components/FAQ";
import Reviews from "./pages/Reviews";
import TrackOrder from "./pages/TrackOrder";
import OilySkin from "./categories/OilySkin";
import NormalSkin from "./categories/NormalSkin";
import CombinationSkin from "./categories/CombinationSkin";
import DrySkin from "./categories/DrySkin";
import SensitiveSkin from "./categories/SensitiveSkin";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
      <>
        <Discount />
        <Navbar setIsLoginModalOpen={setIsLoginModalOpen} />
        <div className={isLoginModalOpen ? "blur-background" : ""}>
          <main className="app-main">
            <Routes>
              {/* Add your other routes here */}
              <Route path="/" element={

                <>
                  <Hero />
                  <Intro />
                  <Ingredients />
                  <PersonalizedCare></PersonalizedCare>
                  <FAQ></FAQ>

                </>
              } />
              <Route path="/ourproducts" element={<OurProducts />} /> {/* Add the new route here */}
              <Route path="/reviews" element={<Reviews />} /> {/* Add the new route here */}
              <Route path="/trackorder" element={<TrackOrder />}></Route>
              <Route path="/categories/oilyskin" element={<OilySkin />}></Route>

              <Route path="/categories/normalskin" element={<NormalSkin />}></Route>

              <Route path="/categories/combinationskin" element={<CombinationSkin />}></Route>

              <Route path="/categories/dryskin" element={<DrySkin />}></Route>

              <Route path="/categories/sensitiveskin" element={<SensitiveSkin />}></Route>
            </Routes>


          </main>
        </div>
        <Delivery></Delivery>
        <Footer />

        {/* Modal for Login/Signup handled in Navbar */}
        {isLoginModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            {/* Login/Signup form already handled in the Navbar component */}
          </div>
        )}
      </>
  );
}

export default App;
