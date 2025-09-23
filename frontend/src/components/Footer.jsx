import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center">
              🛒 Fresh Grocery Store
            </h3>
            <p className="text-gray-300">
              Your trusted partner for fresh groceries, delivered right to your doorstep. Quality guaranteed, prices unbeatable!
            </p>
            <div className="flex space-x-4">
              <span className="text-gray-300 cursor-default">
                <FiFacebook size={20} />
              </span>
              <span className="text-gray-300 cursor-default">
                <FiTwitter size={20} />
              </span>
              <span className="text-gray-300 cursor-default">
                <FiInstagram size={20} />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/vegetables" className="block text-gray-300 hover:text-white transition-colors">
                Vegetables
              </Link>
              <Link to="/fruits" className="block text-gray-300 hover:text-white transition-colors">
                Fruits
              </Link>
              <Link to="/daily-needs" className="block text-gray-300 hover:text-white transition-colors">
                Daily Needs
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <div className="space-y-2">
              <span className="block text-gray-300 cursor-default">
                Help Center
              </span>
              <span className="block text-gray-300 cursor-default">
                Track Your Order
              </span>
              <span className="block text-gray-300 cursor-default">
                Return Policy
              </span>
              <span className="block text-gray-300 cursor-default">
                Privacy Policy
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiPhone size={16} className="text-green-400" />
                <span className="text-gray-300">+91 3212312332</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail size={16} className="text-green-400" />
                <span className="text-gray-300">support@freshgrocery.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin size={16} className="text-green-400 mt-1" />
                <span className="text-gray-300">
                  123 Fresh Street, Grocery District, City - 123456
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Fresh Grocery Store. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-300 text-sm cursor-default">
                Terms of Service
              </span>
              <span className="text-gray-300 text-sm cursor-default">
                Privacy Policy
              </span>
              <span className="text-gray-300 text-sm cursor-default">
                Cookie Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;