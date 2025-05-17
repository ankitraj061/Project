import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiShare2, FiStar, FiTruck, FiShield } from "react-icons/fi";
import myProducts from '../data/myProducts.json';
import { useCart } from '../context/ProductContext';


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = myProducts.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [expandedReviews, setExpandedReviews] = useState(false);
  const { products, addProduct, removeProduct } = useCart();
  
  // Mock data for enhanced product details
  const productImages = product?.images || [product?.image];
  const similarProducts = myProducts.filter(p => 
    p.category === product?.category && p.id !== product?.id
  ).slice(0, 4);
  
  const bankOffers = [
    { bank: "HDFC Bank", discount: "10% instant discount on Credit Cards", code: "HDFC10",img:"https://res.cloudinary.com/djbjfsshe/image/upload/v1747510318/hdfc_qlasyg.png" },
    { bank: "ICICI Bank", discount: "5% cashback on Debit Cards", code: "ICICI5",img:"https://res.cloudinary.com/djbjfsshe/image/upload/v1747510318/icici_tlhykd.jpg" },
    { bank: "Axis Bank", discount: "No-cost EMI on 3 months", code: "AXIS3EMI",img:"https://res.cloudinary.com/djbjfsshe/image/upload/v1747510318/axis_ijlz0t.jpg" }
  ];
  
  // Mock reviews
  const reviews = [
    { id: 1, user: "Priya S.", rating: 5, date: "May 12, 2025", 
      comment: "This product is amazing! My skin feels so soft and hydrated. Will definitely buy again.", 
      helpful: 24, images: [] },
    { id: 2, user: "Rahul M.", rating: 4, date: "May 5, 2025", 
      comment: "Good product overall. Noticed improvements in just a week. The fragrance is a bit strong though.", 
      helpful: 16, images: [] },
    { id: 3, user: "Aisha K.", rating: 5, date: "April 29, 2025", 
      comment: "Absolutely love this! It's worth every penny. My friends have started noticing the difference too!", 
      helpful: 32, images: [] },
    { id: 4, user: "Vikram P.", rating: 3, date: "April 22, 2025", 
      comment: "It's okay. Takes time to show results but packaging is great and delivery was prompt.", 
      helpful: 8, images: [] }
  ];
  
  if (!product) {
    return (
      <div className="max-w-6xl mx-auto p-6 flex flex-col items-center justify-center min-h-[50vh]">
        <div className="text-3xl text-gray-400 mb-4">Product not found</div>
        <Link to="/" className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
          Continue Shopping
        </Link>
      </div>
    );
  }
  
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FiStar 
          key={i} 
          className={`${i <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
        />
      );
    }
    return stars;
  };
  
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

    // Then redirect to checkout
    navigate("/cart");
    
  };

  return (
    <div className="max-w-6xl mx-auto bg-white pb-12">
      {/* Breadcrumb */}
      <div className="p-4 text-sm text-gray-500 flex items-center">
        <Link to="/" className="hover:text-pink-600">Home</Link>
        <span className="mx-2">/</span>
        <Link to={`/category/${product.category}`} className="hover:text-pink-600">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {/* Product Images Section */}
        <div className="sticky top-4">
          <div className="flex h-96 mb-4">
            <div className="w-20 mr-4 flex flex-col gap-2 overflow-y-auto max-h-96">
              {productImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`cursor-pointer border-2 ${selectedImage === idx ? 'border-pink-500' : 'border-gray-200'}`}
                  onClick={() => setSelectedImage(idx)}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-16 object-cover" />
                </div>
              ))}
            </div>
            <div className="flex-1 relative group">
              <img 
                src={productImages[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-contain rounded"
              />
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  <FiShare2 />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4 mt-6">
            {!checkIfAddedInCart(product.id) ? (
              <button 
                onClick={handleAddToCart} 
                className="flex-1 bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
              >
                <FiShoppingCart />
                Add to Cart
              </button>
            ) : (
              <button 
                onClick={handleRemoveFromCart} 
                className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <FiShoppingCart />
                Remove From Cart
              </button>
            )}
            <button 
              onClick={handleBuyNow}
              className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Buy Now
            </button>
            <button className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors">
              <FiHeart className="text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* Product Info Section */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{product.name}</h1>
          
          {/* Ratings Summary */}
          <div className="flex items-center mt-2 mb-4">
            <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded">
              <span className="font-semibold mr-1">{product.rating}</span>
              <FiStar className="fill-green-800" />
            </div>
            <div className="text-sm text-gray-500 ml-2">
              ({reviews.length} customer ratings)
            </div>
          </div>
          
          {/* Price Section */}
          <div className="mt-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-gray-900">{product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
              )}
              {product.discount && (
                <span className="text-green-600 font-semibold">{product.discount}% off</span>
              )}
            </div>
            <div className="text-sm text-green-600 mt-1">Inclusive of all taxes</div>
          </div>
          
          {/* Bank Offers */}
          <div className="border rounded-lg p-4 mb-6 bg-gray-50">
            <h3 className="font-semibold text-lg mb-2">Available Offers</h3>
            <ul className="space-y-2">
              {bankOffers.map((offer, idx) => (
                <li key={idx} className="flex">
                  <div className="bg-orange-100 text-orange-800 p-1 rounded mr-2 h-min">
                    <img src={offer.img} alt="bank" className="w-5 h-5 object-contain" />
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">{offer.bank}:</span> {offer.discount}
                    <div className="text-gray-600">Use Code: <span className="font-semibold text-orange-700">{offer.code}</span></div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="text-blue-600 text-sm mt-2">See More Offers</button>
          </div>
          
          {/* Quantity Selector */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Quantity</h3>
            <div className="flex items-center">
              <button 
                className="bg-gray-200 px-3 py-1 rounded-l-md hover:bg-gray-300"
                onClick={() => handleQuantityChange(quantity - 1)}
              >
                -
              </button>
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                className="w-12 text-center border-y border-gray-200 py-1" 
              />
              <button 
                className="bg-gray-200 px-3 py-1 rounded-r-md hover:bg-gray-300"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Delivery Details */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Delivery</h3>
            <div className="flex items-start gap-2">
              <div>
                <FiTruck className="text-gray-600 mt-1" />
              </div>
              <div>
                <div className="text-sm mb-1">Free delivery on orders above ₹499</div>
                <div className="flex gap-3">
                  <input type="text" placeholder="Enter pincode" className="border rounded px-2 py-1 text-sm w-32" />
                  <button className="text-blue-600 text-sm">Check</button>
                </div>
                <div className="text-sm text-green-600 mt-1">Usually delivered in 2-3 business days</div>
              </div>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="border-t pt-4 mb-6">
            <h3 className="font-semibold text-lg mb-2">Product Details</h3>
            <div className="text-gray-700 mb-4">{product.description}</div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-sm">
                <div className="font-semibold mb-1">Key Benefits</div>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Hydrates and nourishes skin</li>
                  <li>Reduces fine lines</li>
                  <li>Improves skin texture</li>
                </ul>
              </div>
              
              <div className="text-sm">
                <div className="font-semibold mb-1">Suitable For</div>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>All skin types</li>
                  <li>Daily use</li>
                  <li>Morning & night routine</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Warranty & Return Policy */}
          <div className="border-t pt-4 mb-6">
            <div className="flex items-start gap-2 mb-2">
              <FiShield className="text-gray-600 mt-1" />
              <div>
                <div className="font-semibold">1 Year Brand Warranty</div>
                <div className="text-sm text-gray-600">30-day free return policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reviews Section */}
      <div className="mt-12 border-t pt-6 px-4">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        
        {/* Rating Overview */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
            <div className="text-5xl font-bold text-gray-800">{product.rating}</div>
            <div className="flex my-2">
              {renderStars(product.rating)}
            </div>
            <div className="text-gray-500 text-sm">{reviews.length} reviews</div>
          </div>
          
          <div className="flex-1">
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map(num => {
                const count = reviews.filter(r => r.rating === num).length;
                const percentage = (count / reviews.length) * 100;
                
                return (
                  <div key={num} className="flex items-center gap-2">
                    <div className="flex items-center gap-1 w-16">
                      <span>{num}</span>
                      <FiStar className="text-gray-400" />
                    </div>
                    <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-yellow-400 h-full rounded-full" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-500 w-12">{percentage.toFixed(0)}%</div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 mb-2">
              Write a Review
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50">
              See All Reviews
            </button>
          </div>
        </div>
        
        {/* Review List */}
        <div className="space-y-6">
          {reviews.slice(0, expandedReviews ? reviews.length : 2).map(review => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex justify-between mb-2">
                <div className="font-semibold">{review.user}</div>
                <div className="text-sm text-gray-500">{review.date}</div>
              </div>
              
              <div className="flex mb-2">
                {renderStars(review.rating)}
                <div className="text-sm text-gray-600 ml-2">Verified Purchase</div>
              </div>
              
              <p className="text-gray-700 mb-3">{review.comment}</p>
              
              {review.images?.length > 0 && (
                <div className="flex gap-2 mb-3">
                  {review.images.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt={`Review by ${review.user}`} 
                      className="w-16 h-16 object-cover rounded border" 
                    />
                  ))}
                </div>
              )}
              
              <div className="flex text-sm text-gray-500">
                <button className="flex items-center hover:text-gray-700">
                  <span className="mr-1">Helpful ({review.helpful})</span>
                </button>
                <span className="mx-2">|</span>
                <button className="hover:text-gray-700">Report</button>
              </div>
            </div>
          ))}
        </div>
        
        {!expandedReviews && reviews.length > 2 && (
          <button 
            className="text-blue-600 mt-4 hover:underline"
            onClick={() => setExpandedReviews(true)}
          >
            + Show {reviews.length - 2} more reviews
          </button>
        )}
      </div>
      
      {/* Similar Products Section */}
      <div className="mt-12 px-4">
        <h2 className="text-2xl font-bold mb-6">You may also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {similarProducts.map(prod => (
            <Link to={`/product/${prod.id}`} key={prod.id} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
              <div className="h-32 mb-2">
                <img src={prod.image} alt={prod.name} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-medium text-gray-800 truncate">{prod.name}</h3>
              <div className="flex items-center mt-1">
                <div className="flex text-yellow-400">
                  {renderStars(prod.rating)}
                </div>
                <span className="text-xs text-gray-500 ml-1">({prod.rating})</span>
              </div>
              <div className="mt-2 font-semibold">{prod.price}</div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Recently Viewed */}
      <div className="mt-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Recently Viewed</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {myProducts.slice(0, 4).map(prod => (
            <Link to={`/product/${prod.id}`} key={prod.id} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
              <div className="h-32 mb-2">
                <img src={prod.image} alt={prod.name} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-medium text-gray-800 truncate">{prod.name}</h3>
              <div className="mt-2 font-semibold">{prod.price}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;