import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPackage, FiClock, FiCheck, FiTruck, FiArrowLeft } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { ordersAPI } from '../services/api';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      
      if (!token) {
        setError('Please login to view your orders');
        setIsLoading(false);
        return;
      }

      const response = await ordersAPI.getUserOrders();

      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        setError('Failed to fetch orders');
      }
    } catch (error) {
      console.error('Fetch orders error:', error);
      setError('Unable to fetch orders. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return <FiCheck className="text-green-500" />;
      case 'processing':
        return <FiClock className="text-yellow-500" />;
      case 'shipped':
        return <FiTruck className="text-blue-500" />;
      case 'delivered':
        return <FiCheck className="text-green-600" />;
      default:
        return <FiPackage className="text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FiPackage className="mx-auto text-6xl text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Login Required</h2>
          <p className="text-gray-600 mb-6">Please login to view your orders</p>
          <Link
            to="/login"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Login to Continue
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your orders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FiPackage className="mx-auto text-6xl text-red-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Orders</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={fetchOrders}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
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
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              to="/"
              className="inline-flex items-center text-green-600 hover:text-green-700 mb-4"
            >
              <FiArrowLeft className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
            <p className="text-gray-600">Track and manage your orders</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Hello, {user.name}!</p>
            <p className="font-semibold text-gray-900">{orders.length} Orders</p>
          </div>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-16">
            <FiPackage className="mx-auto text-6xl text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No Orders Yet</h2>
            <p className="text-gray-600 mb-6">You haven't placed any orders yet</p>
            <Link
              to="/"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Order Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                      {getStatusIcon(order.orderStatus)}
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Order #{order._id.slice(-8).toUpperCase()}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Placed on {formatDate(order.createdAt)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.orderStatus)}`}>
                        {order.orderStatus.charAt(0).toUpperCase() + order.orderStatus.slice(1)}
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        ₹{order.totalAmount}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="px-6 py-4">
                  <h4 className="font-medium text-gray-900 mb-3">Order Items</h4>
                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img
                            src={item.product?.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop'}
                            alt={item.product?.name || 'Product'}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div>
                            <p className="font-medium text-gray-900">
                              {item.product?.name || 'Product Name'}
                            </p>
                            <p className="text-sm text-gray-600">
                              Quantity: {item.quantity} × ₹{item.price}
                            </p>
                          </div>
                        </div>
                        <span className="font-medium text-gray-900">
                          ₹{(item.quantity * item.price).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery Information */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Delivery Address</h5>
                      <div className="text-sm text-gray-600">
                        <p>{order.deliveryAddress.fullName}</p>
                        <p>{order.deliveryAddress.addressLine1}</p>
                        {order.deliveryAddress.addressLine2 && (
                          <p>{order.deliveryAddress.addressLine2}</p>
                        )}
                        <p>
                          {order.deliveryAddress.city}, {order.deliveryAddress.state} - {order.deliveryAddress.pincode}
                        </p>
                        <p>Phone: {order.deliveryAddress.phone}</p>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Payment Information</h5>
                      <div className="text-sm text-gray-600">
                        <p>
                          Method: {order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'UPI Payment'}
                        </p>
                        <p>
                          Status: {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                        </p>
                        <p className="font-semibold text-gray-900 mt-2">
                          Total: ₹{order.totalAmount}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;