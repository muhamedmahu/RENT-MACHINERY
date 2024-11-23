import React, { useEffect, useState, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import './Header.css';

const Navbar = () => {
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

  const linksRef = {
    '/': React.createRef(),
    '/machines': React.createRef(),
    '/orders': React.createRef(),
    '/register': React.createRef(),
  };

  // Мемоизация функции для вычисления стилей индикатора
  const updateIndicator = useCallback(() => {
    const activeLink = linksRef[location.pathname];
    if (activeLink && activeLink.current) {
      const { offsetLeft, offsetWidth } = activeLink.current;
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [location.pathname, linksRef]);

  useEffect(() => {
    updateIndicator(); // Обновить индикатор при монтировании
  }, [updateIndicator]);

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
  