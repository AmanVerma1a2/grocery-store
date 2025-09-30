import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

const OrderSuccess = () => {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Order Not Found</h1>
            <Link
              to="/"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="mb-6">
              <FiCheckCircle className="mx-auto text-green-600" size={64} />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Order Placed Successfully!
            </h1>
            
            <p className="text-gray-600 mb-8">
              Thank you for your order. We'll send you updates on your order status.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Order Details</h2>
              <div className="text-left space-y-2">
                <p><strong>Order ID:</strong> #{order._id || order.id}</p>
                <p><strong>Total Amount:</strong> ₹{order.totalAmount || order.total}</p>
                <p><strong>Payment Method:</strong> {(order.paymentMethod || 'N/A').toUpperCase()}</p>
                <p><strong>Order Date:</strong> {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Items Ordered</h3>
              <div className="space-y-3">
                {(order.items || []).map((item, index) => (
                  <div key={item._id || item.id || index} className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.product?.image || item.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop'}
                        alt={item.product?.name || item.name || 'Product'}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="text-left">
                        <p className="font-medium">{item.product?.name || item.name || 'Product'}</p>
                        <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-semibold">₹{(item.price || item.product?.price || 0) * item.quantity}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Delivery Address</h3>
              <div className="text-left">
                <p>{order.deliveryAddress?.address || 'Address not available'}</p>
                <p>{order.deliveryAddress?.city || ''}{order.deliveryAddress?.pincode ? `, ${order.deliveryAddress.pincode}` : ''}</p>
                <p>Phone: {order.deliveryAddress?.phone || 'Not provided'}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Continue Shopping
              </Link>
              <button
                onClick={() => window.print()}
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Print Receipt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;