import React from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';
import { FaBoxOpen } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoMdPower } from "react-icons/io";


const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { Icon: FaBoxOpen, name: "Category", target: "/Category"},
    { Icon: CgProfile, name: "My Account", target: "/" },
    { Icon: FaHistory, name: "Cart", target: "/Cart" },
    { Icon: CiHeart, name: "Add Restro", target: "/AddRestro" },
    { Icon: FaSignInAlt, name: "Login", target: "/UserLogin" },
    { Icon: FaUserCheck, name: "Register", target: "/UserRegister" },
    { Icon: FaInfo, name: "About Us", target: "/" },
    { Icon: FaEnvelope, name: "Contact Us", target: "/" },
    { Icon: IoMdPower, name: "Log Out", target: "/" },
  ];

  const userData = JSON.parse(localStorage.getItem("user"));

  
  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        {menuItems.map((item, index) => {
          const Icon = item.Icon; 
          return (
            <div key={index} className="menu-item flex items-center gap-3" onClick={toggleSidebar}>
              { index === 8 ?(
                <Link to={item.target} onClick={() => {
                  localStorage.removeItem("user");
                }} className='flex gap-4 items-center'>
                <Icon className='text-3xl'/> {item.name}
                </Link>
              ) :
              <Link to={item.target} className='flex gap-4 items-center'>
              <Icon className='text-3xl'/> {item.name}
              </Link>
              }

            </div>
          );
        })}
      </div>

      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar} aria-hidden={!isOpen}></div>
    </>
  );
};

export default Sidebar;