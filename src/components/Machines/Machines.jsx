import React, { useState } from 'react';
import './Machines.css'
const Machines = ({ onOrderSubmit }) => {
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [orderData, setOrderData] = useState({
    address: '',
    quantity: 1,
    price: 0,
  });

  const machines = [
    { id: 1, name: 'Excavator', description: 'Heavy digging machine', price: 200 },
    { id: 2, name: 'Bulldozer', description: 'Used for moving earth', price: 150 },
    { id: 3, name: 'Crane', description: 'Used for lifting heavy objects', price: 250 },
  ];

  const handleMachineSelect = (machine) => {
    setSelectedMachine(machine);
    setOrderData((prevData) => ({
      ...prevData,
      price: machine.price,  // Обновление цены выбранной машины
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      ...orderData,
      machine: selectedMachine.name,
      totalPrice: orderData.quantity * selectedMachine.price,
    };
    onOrderSubmit(order);  // Отправляем данные заказа в родительский компонент
    setOrderData({ address: '', quantity: 1, price: 0 }); // Очистка формы
  };

  return (
    <div className="machines">
      <h2>Select Your Machine</h2>
      <div className="machine-list">
        {machines.map((machine) => (
          <div
            key={machine.id}
            className={`machine-item ${selectedMachine?.id === machine.id ? 'selected' : ''}`}
            onClick={() => handleMachineSelect(machine)}
          >
            <h3>{machine.name}</h3>
            <p>{machine.description}</p>
          </div>
        ))}
      </div>

      {selectedMachine && (
        <div className="order-form">
          <h3>Order Details for {selectedMachine.name}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="address">Delivery Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={orderData.address}
                onChange={handleChange}
                required
                placeholder="Enter delivery address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={orderData.quantity}
                onChange={handleChange}
                min="1"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                value={orderData.price}
                disabled
              />
            </div>
            <div className="form-group">
              <label>Total Price</label>
              <input
                type="text"
                value={orderData.quantity * selectedMachine.price}
                disabled
              />
            </div>
            <button type="submit">Submit Order</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Machines;

