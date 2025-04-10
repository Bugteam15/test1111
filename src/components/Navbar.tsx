
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-indigo-700 font-bold text-2xl">
          WinRewardsHub
        </Link>
        
        {/* Search bar - visible on desktop */}
        <div className="hidden md:flex relative w-1/3 mx-4">
          <input 
            type="text" 
            placeholder="Search sweepstakes..." 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
        </div>
        
        {/* Navigation Links - Hidden on mobile, shown on larger screens */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium text-sm">
            Home
          </Link>
          <Link to="/sweepstakes" className="text-gray-700 hover:text-indigo-600 font-medium text-sm">
            Sweepstakes
          </Link>
          <Link to="/rewards" className="text-gray-700 hover:text-indigo-600 font-medium text-sm">
            Rewards
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-indigo-600 font-medium text-sm">
            Account
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingBag className="h-5 w-5 text-gray-700 hover:text-indigo-600" />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="px-4 py-2">
            <input 
              type="text" 
              placeholder="Search sweepstakes..." 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col space-y-3 px-4 pt-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-indigo-600 font-medium text-sm py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/sweepstakes" 
              className="text-gray-700 hover:text-indigo-600 font-medium text-sm py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sweepstakes
            </Link>
            <Link 
              to="/rewards" 
              className="text-gray-700 hover:text-indigo-600 font-medium text-sm py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Rewards
            </Link>
            <Link 
              to="/login" 
              className="text-gray-700 hover:text-indigo-600 font-medium text-sm py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Account
            </Link>
            <Link 
              to="/cart" 
              className="text-gray-700 hover:text-indigo-600 font-medium text-sm py-2 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Cart (0)
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
