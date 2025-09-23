import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black bg-opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  🚚 Free Delivery on Orders Above ₹500
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Fresh Groceries
                  <span className="block text-green-200">Delivered Daily</span>
                </h1>
                <p className="text-xl text-green-100 max-w-xl">
                  Get farm-fresh vegetables, seasonal fruits, and daily essentials delivered right to your doorstep. Quality guaranteed, prices unbeatable!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/vegetables"
                  className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  🥬 Shop Vegetables
                </Link>
                <Link
                  to="/fruits"
                  className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  🍎 Shop Fruits
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-green-500">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-green-200 text-sm">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-green-200 text-sm">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-green-200 text-sm">Happy Customers</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop"
                  alt="Fresh Groceries"
                  className="rounded-2xl shadow-2xl w-full"
                />
                {/* Floating Cards */}
                <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg animate-pulse">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🥕</span>
                    <div>
                      <div className="font-semibold text-gray-800">Fresh Carrots</div>
                      <div className="text-green-600 font-bold">₹35/kg</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg animate-pulse delay-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🍎</span>
                    <div>
                      <div className="font-semibold text-gray-800">Red Apples</div>
                      <div className="text-green-600 font-bold">₹80/kg</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-green-400 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-green-300 rounded-full opacity-20 animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
        
        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#f9fafb" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,69.3C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Promotional Offers Banner */}
      <section className="py-12 bg-yellow-50 border-y-4 border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Free Delivery</h3>
              <p className="text-gray-600 text-sm">On orders above ₹500</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Same Day Delivery</h3>
              <p className="text-gray-600 text-sm">Order before 6 PM</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Special Offers</h3>
              <p className="text-gray-600 text-sm">Weekly deals & discounts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Shop by Category
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to="/vegetables"
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center">
                <span className="text-6xl">🥬</span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                  Fresh Vegetables
                </h3>
                <p className="text-gray-600">
                  Organic and fresh vegetables delivered daily
                </p>
              </div>
            </Link>

            <Link
              to="/fruits"
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
                <span className="text-6xl">🍎</span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                  Fresh Fruits
                </h3>
                <p className="text-gray-600">
                  Sweet and juicy fruits picked at perfect ripeness
                </p>
              </div>
            </Link>

            <Link
              to="/daily-needs"
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-6xl">🛍️</span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                  Daily Needs
                </h3>
                <p className="text-gray-600">
                  Essential items like biscuits, dal, milk, and oil
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;