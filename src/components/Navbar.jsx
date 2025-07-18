import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// Styled components for custom navbar
const StyledNavbar = styled.nav`
  font-family: 'Quicksand', sans-serif;
  background-color: #2BC0E4 !important; /* Skyline color */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0.8rem 1.5rem;
  position: relative;
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .navbar-brand {
    font-weight: 700;
    font-size: 1.5rem;
    color: white;
    transition: all 0.3s ease;
    text-decoration: none;
    z-index: 1001;
    
    &:hover {
      color: #E4ECC6; /* Bora color */
    }
  }
  
  .nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    
    @media (max-width: 992px) {
      position: fixed;
      top: 0;
      right: ${props => props.mobileMenuOpen ? '0' : '-100%'};
      width: 70%;
      height: 100vh;
      background-color: #2BC0E4;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: right 0.3s ease-in-out;
      z-index: 1000;
      padding-top: 80px;
    }
  }
  
  .nav-item {
    margin: 0 0.5rem;
    
    @media (max-width: 992px) {
      margin: 0.8rem 0;
      width: 100%;
      text-align: center;
    }
  }
  
  .nav-link {
    color: white !important;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;
    text-decoration: none;
    display: block;
    
    &:hover {
      color: #E4ECC6 !important; /* Bora color */
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    @media (max-width: 992px) {
      padding: 1rem;
      font-size: 1.1rem;
    }
  }
  
  .mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 1001;
    
    @media (max-width: 992px) {
      display: block;
    }
  }
  
  .overlay {
    display: none;
    
    @media (max-width: 992px) {
      display: ${props => props.mobileMenuOpen ? 'block' : 'none'};
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 999;
    }
  }
`;

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Add Google Fonts link */}
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <StyledNavbar mobileMenuOpen={mobileMenuOpen}>
        <div className="navbar-container">
          <Link className="navbar-brand" to="/" onClick={closeMobileMenu}>HerbSacco</Link>
          
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className="nav-links">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMobileMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" onClick={closeMobileMenu}>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/info-center" onClick={closeMobileMenu}>Info Center</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news-events" onClick={closeMobileMenu}>News & Events</Link>
            </li>
          </ul>
          
          {/* Overlay that appears when mobile menu is open */}
          <div className="overlay" onClick={closeMobileMenu}></div>
        </div>
      </StyledNavbar>
    </>
  );
}

export default Navbar;