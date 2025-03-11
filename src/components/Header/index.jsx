import React from 'react';
import './index.css';
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxFill } from "react-icons/ri";
import Cookies from 'js-cookie';

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        Cookies.remove('jwt_token');
        navigate('/login');
    }
  return (
    <header className="header-container">
      <div className="header-left">
        <img src="/logo.png" alt="Logo Image" className="logo" />
        <div className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="logo-name">LOGO NAME</div>
      <div className="header-right">
        <CiSearch size={35} color='black' />
        <CiHeart size={35} color='black' />
        <RiLogoutBoxFill size={35} color='black' onClick={handleLogout} className='logout-icon' />
        <CgProfile size={35} color='black' />
      </div>
    </header>
  );
};

export default Header;