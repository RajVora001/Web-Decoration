import React, { useEffect } from 'react';
import './navbar.css'; 

const Navbar = () => {
  useEffect(() => {
    const list = document.querySelectorAll('.navigation li');

    function activeLink() {
      list.forEach((item) => item.classList.remove('active'));
      this.classList.add('active');
    }

    list.forEach((item) => item.addEventListener('click', activeLink));

    return () => {
      list.forEach((item) => item.removeEventListener('click', activeLink));
    };
  }, []); 

  return (
    <>
      <ul className="navigation">
        <li className="active">
          <a href="#">
            <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
            <span className="text">Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon"><ion-icon name="search-circle-outline"></ion-icon></span>
            <span className="text">Search</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon"><ion-icon name="chatbubbles-outline"></ion-icon></span>
            <span className="text">Chats</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
            <span className="text">Profile</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
            <span className="text">Settings</span>
          </a>
        </li>
      </ul>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
};

export default Navbar;
