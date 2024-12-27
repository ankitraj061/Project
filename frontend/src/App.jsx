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
              <Route path="/trackorder" element={<h1>Track Order</h1>}></Route>
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
