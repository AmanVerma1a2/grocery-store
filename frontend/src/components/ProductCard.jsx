import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation when clicking add to cart
    e.stopPropagation();
    
    if (!user) {
      toast.error('Please sign in or register to add items to cart');
      navigate('/login', { state: { from: { pathname: window.location.pathname } } });
      return;
    }
    
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop";
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow block"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
          onError={handleImageError}
        />
        <div className="absolute top-2 right-2">
          <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
            ₹{product.price}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">
            ₹{product.price}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors"
          >
            <FiPlus size={16} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;