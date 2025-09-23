import React from 'react';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';

const Fruits = () => {
  const fruits = getProductsByCategory('fruits');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Fresh Fruits
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sweet and juicy fruits picked at perfect ripeness for maximum flavor and nutrition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fruits.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {fruits.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No fruits available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fruits;