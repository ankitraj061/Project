import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/ProductContext';
import myProducts from '../data/myProducts.json';

const OurProducts = () => {
  const { products, addProduct, removeProduct } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  // Helper function to render stars
  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = totalStars - filledStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(filledStars)].map((_, index) => (
          <span key={`filled-${index}`} className="text-yellow-500">★</span>
        ))}
        {halfStar && <span className="text-yellow-400">★</span>}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-300">★</span>
        ))}
      </div>
    );
  };

  const handleAddToCart = (product) => {
    addProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      quantity: 1,
    });
  };

  const checkIfAddedInCart = (id) => {
    return products.find((el) => el.id === id);
  };

  // Filter products based on search term (case-insensitive)
  const filteredProducts = myProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6 md:flex-row flex-col gap-4">
  <h2 className="text-4xl font-serif font-bold text-gray-900 relative inline-block">
    Our Products
    <div className="absolute -bottom-2 left-0 h-1 w-24 bg-pink-500 rounded-full"></div>
  </h2>
  {/* Search Input */}
  <div className="w-full max-w-md">
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
    />
  </div>
</div>



        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white group"
              >
                <Link to={`/product/${product.id}`} className="block relative overflow-hidden h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-semibold tracking-wide mb-2">{product.name}</h3>
                    <p className="text-sm line-clamp-3 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-pink-400">{product.price}</p>
                      {renderStars(product.rating)}
                    </div>
                  </div>
                </Link>

                <div className="p-6 bg-white">
                  {!checkIfAddedInCart(product.id) ? (
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="w-full py-3 bg-green-800 text-white rounded-lg font-semibold hover:bg-green-900 transition-colors duration-300"
                    >
                      Remove From Cart
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg mt-10">
              No products found matching "{searchTerm}"
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
