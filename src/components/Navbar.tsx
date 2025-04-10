
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full glass-morphism z-50">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="purple-gradient-text font-bold text-2xl">
          WinRewardsHub
        </Link>
        
        {/* Search bar - visible on desktop */}
        <div className="hidden md:flex relative w-1/3 mx-4">
          <input 
            type="text" 
            placeholder="Search sweepstakes..." 
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-rewards-purple text-white placeholder-white/60"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-white/60" />
        </div>
        
        {/* Navigation Links - Hidden on mobile, shown on larger screens */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-rewards-purple font-medium text-sm transition-colors duration-200 nav-link">
            Home
          </Link>
          <Link to="/sweepstakes" className="text-white hover:text-rewards-purple font-medium text-sm transition-colors duration-200 nav-link">
            Sweepstakes
          </Link>
          <Link to="/rewards" className="text-white hover:text-rewards-purple font-medium text-sm transition-colors duration-200 nav-link">
            Rewards
          </Link>
          <Link to="/login" className="text-white hover:text-rewards-purple font-medium text-sm transition-colors duration-200 nav-link">
            Account
          </Link>
          <Link to="/cart" className="relative transition-transform hover:scale-110 duration-200">
            <ShoppingBag className="h-5 w-5 text-white hover:text-rewards-purple" />
            <span className="absolute -top-2 -right-2 bg-rewards-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
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
        <div className="md:hidden glass-morphism py-4 animate-fade-in">
          <div className="px-4 py-2">
            <input 
              type="text" 
              placeholder="Search sweepstakes..." 
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-rewards-purple text-white placeholder-white/60"
            />
          </div>
          <div className="flex flex-col space-y-3 px-4 pt-4">
            <Link 
              to="/" 
              className="text-white hover:text-rewards-purple font-medium text-sm py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/sweepstakes" 
              className="text-white hover:text-rewards-purple font-medium text-sm py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Sweepstakes
            </Link>
            <Link 
              to="/rewards" 
              className="text-white hover:text-rewards-purple font-medium text-sm py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Rewards
            </Link>
            <Link 
              to="/login" 
              className="text-white hover:text-rewards-purple font-medium text-sm py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Account
            </Link>
            <Link 
              to="/cart" 
              className="text-white hover:text-rewards-purple font-medium text-sm py-2 flex items-center transition-colors duration-200"
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
