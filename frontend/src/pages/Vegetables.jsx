import React, { useState, useEffect } from 'react';
import { productsAPI } from '../services/api';
import ProductCard from '../components/ProductCard';

const Vegetables = () => {
  const [vegetables, setVegetables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVegetables = async () => {
      try {
        setLoading(true);
        const response = await productsAPI.getByCategory('vegetables');
        setVegetables(response.data.data);
      } catch (err) {
        setError('Failed to load vegetables');
        console.error('Error fetching vegetables:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVegetables();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading fresh vegetables...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Fresh Vegetables
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide selection of fresh, organic vegetables delivered daily from local farms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vegetables.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {vegetables.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No vegetables available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Vegetables;