import React, { useState } from "react";
import './Registration.css';
const RegistrationForm = () => {
  // Состояние для хранения данных формы
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Обработчик изменения данных в полях
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Здесь можно будет сделать запрос в базу данных или другой сервис
    // Пока что просто выводим данные в консоль
    console.log("Submitted Data: ", formData);

    // Показать, что форма отправлена
    setIsSubmitted(true);
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      {isSubmitted ? (
        <div className="registration-success">
          <h3>Registration Successful!</h3>
          <p>Name: {formData.name}</p>
          <p>Phone: {formData.phone}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
