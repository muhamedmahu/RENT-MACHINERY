// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; // Проверьте правильность импорта
import Footer from './components/Footer/Footer'; // Проверьте правильность импорта
import Home from './components/Home/Home'; // Проверьте правильность импорта
import Registration from './components/Registration/Registration'; // Проверьте правильность импорта
import Machines from './components/Machines/Machines'; // Импортируем компонент Machines
import Order from './components/Order/Order'; // Импортируем компонент Order

const App = () => {
  // Храним состояние заказов
  const [orders, setOrders] = useState([]);

  // Обрабатываем отправку заказа
  const handleOrderSubmit = (orderData) => {
    setOrders((prevOrders) => [...prevOrders, orderData]);  // Добавляем новый заказ в историю
  };

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/machines" element={<Machines onOrderSubmit={handleOrderSubmit} />} />
          <Route path="/orders" element={<Order orders={orders} />} /> {/* Передаем состояние заказов в компонент Order */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
