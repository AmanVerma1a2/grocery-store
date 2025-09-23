import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiMinus, FiPlus, FiShoppingCart, FiArrowLeft, FiStar } from 'react-icons/fi';
import { getAllProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useAuth();
  
  const [quantity, setQuantity] = useState(1);
  
  const product = getAllProducts().find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
            <button
              onClick={() => navigate('/')}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Go Back Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    // Just add to cart without navigation
  };

  const handleBuyNow = () => {
    // Add to cart first
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    // Redirect to checkout if user is logged in, otherwise to login
    if (user) {
      navigate('/checkout');
    } else {
      navigate('/login', { state: { from: { pathname: '/checkout' } } });
    }
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-green-600 hover:text-green-700 mb-6 transition-colors"
        >
          <FiArrowLeft size={20} />
          <span>Back</span>
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="p-8">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop";
                  }}
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full">
                  <span className="font-semibold">₹{product.price}</span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-8">
              <div className="space-y-6">
                {/* Product Info */}
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h1>
                  <p className="text-gray-600 text-lg">
                    {product.description}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FiStar
                        key={star}
                        size={20}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">(4.5/5 - 123 reviews)</span>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-600">
                    ₹{product.price}
                  </div>
                  <p className="text-gray-500">Inclusive of all taxes</p>
                </div>

                {/* Quantity Selector */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={decreaseQuantity}
                        className="p-2 hover:bg-gray-100 transition-colors"
                        disabled={quantity <= 1}
                      >
                        <FiMinus size={16} />
                      </button>
                      <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={increaseQuantity}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <FiPlus size={16} />
                      </button>
                    </div>
                    <span className="text-gray-600">
                      Total: ₹{product.price * quantity}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <FiShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="flex-1 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                  >
                    Buy Now
                  </button>
                </div>

                {/* Product Features */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Product Features
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-gray-600">Fresh and organic</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-gray-600">Same day delivery available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-gray-600">Quality guaranteed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-gray-600">Easy returns within 24 hours</span>
                    </div>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Delivery Information
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>🚚 Free delivery on orders above ₹500</p>
                    <p>⚡ Same day delivery if ordered before 6 PM</p>
                    <p>📦 Standard delivery: 1-2 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;