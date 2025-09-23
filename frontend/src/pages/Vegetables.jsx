import React from 'react';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';

const Vegetables = () => {
  const vegetables = getProductsByCategory('vegetables');

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
            <ProductCard key={product.id} product={product} />
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