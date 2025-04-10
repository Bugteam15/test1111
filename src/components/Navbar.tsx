
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-rewards-dark z-50">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-2xl">
          WinRewardsHub
        </Link>
        
        {/* Navigation Links - Hidden on mobile, shown on larger screens */}
        <div className="hidden md:flex items-center space-x-5">
          <Link to="/" className="text-white hover:text-rewards-orange nav-link text-base">
            Home
          </Link>
          <Link to="/sweepstakes" className="text-white hover:text-rewards-orange nav-link text-base">
            Sweepstakes
          </Link>
          <Link to="/rewards" className="text-white hover:text-rewards-orange nav-link text-base">
            Rewards
          </Link>
          <Link to="/login" className="text-white hover:text-rewards-orange nav-link text-base">
            Login
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
