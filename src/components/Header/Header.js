import React from 'react';
import './Header.css'
const Header = () => {
  return (
    <div>
      <nav className="navBar">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
          alt=""

        ></img>
        <div>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/shop">Shop</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
