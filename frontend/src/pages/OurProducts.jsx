import { useState } from 'react';
import { useCart } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import myProducts from '../data/myProducts.json';

const OurProducts = () => {
  const { products, addProduct, removeProduct } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

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

  // Filter products based on search term
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
              <ProductCard
                key={product.id}
                product={product}
                isInCart={checkIfAddedInCart(product.id)}
                onAdd={handleAddToCart}
                onRemove={removeProduct}
              />
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
