// components/ProductCard.js
import { Link } from 'react-router-dom';

const ProductCard = ({ product, isInCart, onAdd, onRemove, showActions = true }) => {
  // Star rating renderer
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

  return (
    <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white group">
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

      {showActions && (
        <div className="p-6 bg-white">
          {!isInCart ? (
            <button
              onClick={() => onAdd(product)}
              className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
            >
              Shop Now
            </button>
          ) : (
            <button
              onClick={() => onRemove(product.id)}
              className="w-full py-3 bg-green-800 text-white rounded-lg font-semibold hover:bg-green-900 transition-colors duration-300"
            >
              Remove From Cart
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
