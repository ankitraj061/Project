import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import OurProducts from "./pages/OurProducts"; 

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
import UseProduct from "./components/UseProduct";
import PopularCategory from "./components/PopularCategory";
import UpcomingCategory from "./components/UpcomingCategory";
import Quiz from "./pages/Quiz";
import Cart from "./pages/Cart";
import ProductDetails from './components/ProductDetails';
import Categories from "./components/Categories";
import FaceProductsChatbot from "./components/FaceProductsChatbot";


function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [cartCount, setCartCount] = useState(0); // State for cart count

  // Function to update cart count
  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1); // Increase cart count by 1
  };

  return (
      <>
       
        <Navbar setIsLoginModalOpen={setIsLoginModalOpen}  cartCount={cartCount}/>
        <div className={isLoginModalOpen ? "blur-background" : ""}>
          <main className="app-main">
            <Routes>
              {/* Add your other routes here */}
              <Route path="/" element={

                <>
                  <Hero />
                  <Intro />
                  <PopularCategory></PopularCategory>
                  <UpcomingCategory></UpcomingCategory>
                  <Ingredients />
                  <PersonalizedCare></PersonalizedCare>
                  <UseProduct></UseProduct>
                  <FAQ></FAQ>

                </>
              } />
              <Route path="/ourproducts" element={<OurProducts addToCart={addToCart} />} /> {/* Add the new route here */}
              <Route path="/reviews" element={<Reviews />} /> {/* Add the new route here */}
              <Route path="/trackorder" element={<TrackOrder />}></Route>
              <Route path="/categories" element={<Categories />}></Route>
              <Route path="/categories/oilyskin" element={<OilySkin  addToCart={addToCart}/>}></Route>

              <Route path="/categories/normalskin" element={<NormalSkin addToCart={addToCart}/>}></Route>

              <Route path="/categories/combinationskin" element={<CombinationSkin addToCart={addToCart}/>}></Route>

              <Route path="/categories/dryskin" element={<DrySkin addToCart={addToCart}/>}></Route>

              <Route path="/categories/sensitiveskin" element={<SensitiveSkin addToCart={addToCart}/>}></Route>

              <Route path="/quiz" element={<Quiz />}></Route>

              <Route path="/cart" element={<Cart />}></Route>
               <Route path="/product/:id" element={<ProductDetails />} />
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
        <FaceProductsChatbot></FaceProductsChatbot>
      </>
  );
}

export default App;
