import React, { useEffect, useState, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import './Header.css';

const Navbar = () => {
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

  // Используем useMemo для мемоизации объекта linksRef
  const linksRef = useMemo(() => ({
    '/': React.createRef(),
    '/machines': React.createRef(),
    '/orders': React.createRef(),
    '/register': React.createRef(),
  }), []);

  // Функция для вычисления стилей индикатора
  const updateIndicator = () => {
    const activeLink = linksRef[location.pathname];
    if (activeLink && activeLink.current) {
      const { offsetLeft, offsetWidth } = activeLink.current;
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  };

  useEffect(() => {
    updateIndicator(); // Обновить индикатор при монтировании
  }, [location.pathname, linksRef]); // Добавляем linksRef в зависимости

  return (
    <nav className="navbar">
      <div
        className="nav-indicator"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
        }}
      ></div>

      <NavLink
        to="/"
        className="nav-link"
        ref={linksRef['/']}
      >
        Home
      </NavLink>
      <NavLink
        to="/machines"
        className="nav-link"
        ref={linksRef['/machines']}
      >
        Machines
      </NavLink>
      <NavLink
        to="/orders"
        className="nav-link"
        ref={linksRef['/orders']}
      >
        Orders
      </NavLink>
      <NavLink
        to="/register"
        className="nav-link"
        ref={linksRef['/register']}
      >
        Register
      </NavLink>
    </nav>
  );
};

export default Navbar;
