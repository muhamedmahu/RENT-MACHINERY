import React from 'react';

const Order = ({ orders }) => {
  return (
    <div className="orders">
      <h2>Active Orders</h2>
      {orders.length === 0 ? (
        <p>No active orders.</p>
      ) : (
        <div className="active-orders">
          {orders.map((order, index) => (
            <div key={index} className="order">
              <h3>{order.machine}</h3>
              <p>Address: {order.address}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Total Price: ${order.totalPrice}</p>
              <p>Status: Active</p>
            </div>
          ))}
        </div>
      )}

      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No order history available.</p>
      ) : (
        <div className="order-history">
          {orders.map((order, index) => (
            <div key={index} className="order">
              <h3>{order.machine}</h3>
              <p>Address: {order.address}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Total Price: ${order.totalPrice}</p>
              <p>Status: Completed</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
