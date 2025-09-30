import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiLogOut, FiMenu, FiX } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { user, logout } = useAuth();
  const { getCartItemsCount } = useCart();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold flex items-center" onClick={closeMobileMenu}>
            🛒 <span className="hidden sm:inline ml-2">Fresh Grocery Store</span>
            <span className="sm:hidden ml-2">Fresh Store</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-green-200 transition-colors">
              Home
            </Link>
            <Link to="/vegetables" className="hover:text-green-200 transition-colors">
              Vegetables
            </Link>
            <Link to="/fruits" className="hover:text-green-200 transition-colors">
              Fruits
            </Link>
            <Link to="/daily-needs" className="hover:text-green-200 transition-colors">
              Daily Needs
            </Link>
            {user && (
              <Link to="/orders" className="hover:text-green-200 transition-colors">
                Orders
              </Link>
            )}
          </nav>

          {/* Mobile Menu & Desktop Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart - Always Visible */}
            <Link to="/cart" className="relative hover:text-green-200 transition-colors" onClick={closeMobileMenu}>
              <FiShoppingCart size={24} />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>

            {/* Desktop User Menu */}
            <div className="hidden md:flex items-center space-x-3">
              {user ? (
                <>
                  <span className="hidden lg:block text-sm">Hello, {user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 hover:text-green-200 transition-colors"
                  >
                    <FiLogOut size={20} />
                    <span className="hidden lg:block">Logout</span>
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-1 bg-green-700 px-3 py-2 rounded hover:bg-green-800 transition-colors"
                >
                  <FiUser size={18} />
                  <span className="hidden lg:block">Login</span>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-green-700 rounded transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-green-500">
            <nav className="flex flex-col space-y-2 mt-4">
              <Link
                to="/"
                className="block py-2 px-4 hover:bg-green-700 rounded transition-colors"
                onClick={closeMobileMenu}
              >
                🏠 Home
              </Link>
              <Link
                to="/vegetables"
                className="block py-2 px-4 hover:bg-green-700 rounded transition-colors"
                onClick={closeMobileMenu}
              >
                🥬 Vegetables
              </Link>
              <Link
                to="/fruits"
                className="block py-2 px-4 hover:bg-green-700 rounded transition-colors"
                onClick={closeMobileMenu}
              >
                🍎 Fruits
              </Link>
              <Link
                to="/daily-needs"
                className="block py-2 px-4 hover:bg-green-700 rounded transition-colors"
                onClick={closeMobileMenu}
              >
                🛍️ Daily Needs
              </Link>
              {user && (
                <Link
                  to="/orders"
                  className="block py-2 px-4 hover:bg-green-700 rounded transition-colors"
                  onClick={closeMobileMenu}
                >
                  📦 My Orders
                </Link>
              )}
              
              {/* Mobile User Section */}
              <div className="border-t border-green-500 pt-4 mt-4">
                {user ? (
                  <div className="px-4 space-y-2">
                    <p className="text-sm text-green-200">Hello, {user.name}!</p>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 py-2 px-4 bg-red-600 hover:bg-red-700 rounded transition-colors w-full"
                    >
                      <FiLogOut size={18} />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <div className="px-4">
                    <Link
                      to="/login"
                      className="flex items-center space-x-2 py-2 px-4 bg-green-700 hover:bg-green-800 rounded transition-colors w-full"
                      onClick={closeMobileMenu}
                    >
                      <FiUser size={18} />
                      <span>Login / Sign Up</span>
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;