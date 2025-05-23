import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from '../context/ProductContext';
import myProducts from '../data/myProducts.json';

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
  


  const product = myProducts.find(p => p.id === parseInt(id));
  const cartItem = products.find((p) => p.id === product?.id);
  const quantity = cartItem?.quantity || 1;

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

  const handleAddToCart = () => {
    addProduct({ ...product, quantity: 1 });
  };

  const handleRemoveFromCart = () => {
    removeProduct(product.id);
  };

  const handleBuyNow = () => {
    if (!cartItem) {
      addProduct({ ...product, quantity: 1 });
    }
    navigate("/cart");
  };

  const checkIfAddedInCart = (id) => products.some((p) => p.id === id);

  const similarProducts = myProducts.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);
  const recentlyViewed = myProducts.slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto bg-white pb-12">
      <Breadcrumb product={product} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        <div className="sticky top-4">
          <ProductGallery images={[product.image]} name={product.name} />

          <ProductActions 
            product={product}
            quantity={quantity}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            handleBuyNow={handleBuyNow}
            checkIfAddedInCart={checkIfAddedInCart}
          />
        </div>

        <div className="space-y-6">
          <ProductInfo product={product} />
          <ProductSpecs product={product} />
          <DeliveryInfo />
          <ProductOffers />
        </div>
      </div>

      <ReviewSection product={product} />
      <div className="space-y-12 mt-12">
        <RelatedProducts title="You may also like" products={similarProducts} />
        <RelatedProducts title="Recently Viewed" products={recentlyViewed} />
      </div>
    </div>
  );
};

export default ProductDetails;
