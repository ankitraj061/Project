// Main ProductDetails component that orchestrates all the sub-components
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from '../context/ProductContext';
import myProducts from '../data/myProducts.json';

// Importing sub-components
import Breadcrumb from "../product-components/Breadcrumb";
import ProductGallery from "../product-components/ProductGallery";
import ProductActions from "../product-components/ProductActions";
import ProductInfo from "../product-components/ProductInfo";
import ProductOffers from "../product-components/ProductOffers";
import DeliveryInfo from "../product-components/DeliveryInfo";
import ProductSpecs from "../product-components/ProductSpecs";
import ReviewSection from "../product-components/ReviewSection";
import RelatedProducts from "../product-components/RelatedProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addProduct, removeProduct } = useCart();
  
  // Find the product from our data
  const product = myProducts.find(p => p.id === parseInt(id));
  
  // State management
  const [quantity, setQuantity] = useState(1);
  
  // Product images preparation
  const productImages = product?.images || [product?.image];
  
  // Find similar products for recommendations
  const similarProducts = myProducts.filter(p => 
    p.category === product?.category && p.id !== product?.id
  ).slice(0, 4);
  
  // Recently viewed products (for demonstration)
  const recentlyViewed = myProducts.slice(0, 4);
  
  // Handle not found product
  if (!product) {
    return (
      <div className="max-w-6xl mx-auto p-6 flex flex-col items-center justify-center min-h-[50vh]">
        <div className="text-3xl text-gray-400 mb-4">Product not found</div>
        <Link to="/" className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-3 rounded-lg hover:from-pink-700 hover:to-pink-800 shadow-lg transition-all duration-300">
          Continue Shopping
        </Link>
      </div>
    );
  }
  
  // Helper functions
  const handleQuantityChange = (newQty) => {
    if (newQty >= 1 && newQty <= 10) {
      setQuantity(newQty);
    }
  };
  
  const handleAddToCart = () => {
    addProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      quantity: quantity
    });
  };
  
  const checkIfAddedInCart = (id) => {
    return products.find((el) => el.id === id);
  };
  
  const handleRemoveFromCart = () => {
    removeProduct(product.id);
  };

  const handleBuyNow = () => {
    addProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      quantity: quantity
    });
    navigate("/cart");
  };
  
  return (
    <div className="max-w-6xl mx-auto bg-white pb-12">
      {/* Structured layout with component-based architecture */}
      <Breadcrumb product={product} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {/* Left column - Product images and actions */}
        <div className="sticky top-4">
          <ProductGallery images={productImages} name={product.name} />
          <ProductActions 
            product={product}
            quantity={quantity}
            handleQuantityChange={handleQuantityChange}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            handleBuyNow={handleBuyNow}
            checkIfAddedInCart={checkIfAddedInCart}
          />
        </div>
        
        {/* Right column - Product information */}
        <div className="space-y-6">
          <ProductInfo product={product} />
          <ProductOffers />
          <DeliveryInfo />
          <ProductSpecs product={product} />
        </div>
      </div>
      
      {/* Reviews section */}
      <ReviewSection product={product} />
      
      {/* Product recommendations */}
      <div className="space-y-12 mt-12">
        <RelatedProducts title="You may also like" products={similarProducts} />
        <RelatedProducts title="Recently Viewed" products={recentlyViewed} />
      </div>
    </div>
  );
};

export default ProductDetails;